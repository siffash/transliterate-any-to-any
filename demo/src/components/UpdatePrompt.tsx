import { useEffect, useRef, useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import { useRegisterSW } from "virtual:pwa-register/react";
import { type OfflinePackProgress, useOfflinePack } from "../hooks/useOfflinePack";

const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;
const NOTICE_DURATION_MS = 4000;

const formatDelay = (ms: number) =>
  ms < 59_500 ? `${Math.round(ms / 1000)}s` : `${Math.round(ms / 60_000)} min`;

const offlinePackNotice = (progress: OfflinePackProgress) => {
  switch (progress.status) {
    case "offline":
      return "Offline download paused — waiting for connection";
    case "waiting":
      return `Couldn't download some files, retrying in ${formatDelay(progress.retryInMs)}`;
    case "finished":
      return progress.failed > 0 ? "Some languages may not work offline" : "Ready to work offline";
    default:
      return null;
  }
};

const noticeIds = new WeakMap<OfflinePackProgress, number>();
let lastNoticeId = 0;
const noticeId = (progress: OfflinePackProgress) => {
  let id = noticeIds.get(progress);
  if (id === undefined) noticeIds.set(progress, (id = ++lastNoticeId));
  return id;
};

interface Message {
  id: string;
  text: string;
  notice?: OfflinePackProgress;
}

export const UpdatePrompt = ({
  onVisibleChange,
}: {
  onVisibleChange?: (visible: boolean) => void;
}) => {
  const registrationRef = useRef<ServiceWorkerRegistration | undefined>(undefined);
  const snoozeTimerRef = useRef<number | undefined>(undefined);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (!registration) return;
      registrationRef.current = registration;
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed") showIfWaiting();
        });
      });
      setInterval(() => registration.update().catch(() => {}), UPDATE_CHECK_INTERVAL_MS);
    },
  });

  const offlinePack = useOfflinePack();
  const [closedNotice, setClosedNotice] = useState<OfflinePackProgress | null>(null);
  const notice = offlinePack && offlinePackNotice(offlinePack);

  let desired: Message | null = null;
  if (needRefresh) {
    desired = { id: "update", text: "New version available" };
  } else if (offlinePack?.status === "downloading") {
    const percent = Math.floor((offlinePack.done / offlinePack.total) * 100);
    desired = { id: "progress", text: `Downloading for offline use... ${percent}%` };
  } else if (offlinePack && notice && closedNotice !== offlinePack) {
    desired = { id: `notice-${noticeId(offlinePack)}`, text: notice, notice: offlinePack };
  }

  const [shown, setShown] = useState<Message | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (shown === null) {
      if (desired) {
        setShown(desired);
        setOpen(true);
      }
    } else if (shown.id === desired?.id) {
      if (shown.text !== desired.text) setShown(desired);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [shown, desired?.id, desired?.text]);

  const visible = shown !== null;
  useEffect(() => {
    onVisibleChange?.(visible);
  }, [visible, onVisibleChange]);

  const showIfWaiting = () => {
    const registration = registrationRef.current;
    if (registration?.active && registration.waiting && snoozeTimerRef.current === undefined) {
      setNeedRefresh(true);
    }
  };

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let hadController = Boolean(navigator.serviceWorker.controller);
    const onControllerChange = () => {
      if (hadController) window.location.reload();
      hadController = true;
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    return () =>
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
  }, []);

  const remindLater = () => {
    setNeedRefresh(false);
    window.clearTimeout(snoozeTimerRef.current);
    snoozeTimerRef.current = window.setTimeout(() => {
      snoozeTimerRef.current = undefined;
      showIfWaiting();
    }, UPDATE_CHECK_INTERVAL_MS);
  };

  const reload = () => {
    if (registrationRef.current?.waiting) {
      void updateServiceWorker();
    } else {
      window.location.reload();
    }
  };

  return (
    <Snackbar
      key={shown?.id}
      open={open}
      message={shown?.text}
      autoHideDuration={shown?.notice ? NOTICE_DURATION_MS : null}
      onClose={() => {
        if (open && shown?.notice) setClosedNotice(shown.notice);
      }}
      slotProps={{ transition: { onExited: () => setShown(null) } }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      action={
        shown?.id === "update" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Button size="small" variant="outlined" onClick={remindLater}>
              Remind me in 1 hour
            </Button>
            <Button size="small" variant="contained" onClick={reload}>
              Reload
            </Button>
          </Box>
        )
      }
    />
  );
};
