import { useEffect, useRef, useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import { useRegisterSW } from "virtual:pwa-register/react";
import { type OfflinePackProgress, useOfflinePack } from "../hooks/useOfflinePack";

const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;
const NOTICE_DURATION_MS = 4000;

// Rounded, so 59.6s reads "1 min" rather than "60s"
const formatDelay = (ms: number) =>
  ms < 59_500 ? `${Math.round(ms / 1000)}s` : `${Math.round(ms / 60_000)} min`;

// What the offline download has come to, after a pass
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

// Tells notices apart, even with the same text: each one comes with its own
// progress object
const noticeIds = new WeakMap<OfflinePackProgress, number>();
let lastNoticeId = 0;
const noticeId = (progress: OfflinePackProgress) => {
  let id = noticeIds.get(progress);
  if (id === undefined) noticeIds.set(progress, (id = ++lastNoticeId));
  return id;
};

interface Message {
  // A message with the same id is updated in place, e.g. the download's percentage
  id: string;
  text: string;
  // The progress a notice is about; notices hide by themselves
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
      // workbox-window reports only the first update found after page load,
      // so watch for every later one ourselves.
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed") showIfWaiting();
        });
      });
      // Long-lived tabs and installed apps otherwise only check for a new
      // service worker on navigation.
      setInterval(() => registration.update().catch(() => {}), UPDATE_CHECK_INTERVAL_MS);
    },
  });

  const offlinePack = useOfflinePack();
  // Each notice is shown once, for the progress it's about
  const [closedNotice, setClosedNotice] = useState<OfflinePackProgress | null>(null);
  const notice = offlinePack && offlinePackNotice(offlinePack);

  // What should be on screen, by priority
  let desired: Message | null = null;
  if (needRefresh) {
    desired = { id: "update", text: "New version available" };
  } else if (offlinePack?.status === "downloading") {
    const percent = Math.floor((offlinePack.done / offlinePack.total) * 100);
    desired = { id: "progress", text: `Downloading for offline use... ${percent}%` };
  } else if (offlinePack && notice && closedNotice !== offlinePack) {
    desired = { id: `notice-${noticeId(offlinePack)}`, text: notice, notice: offlinePack };
  }

  // One snackbar at a time: a different message waits for the current one to
  // close and finish its exit transition, and then the latest one is shown
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
      // Back before its exit transition ended
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [shown, desired?.id, desired?.text]);

  // Until the exit transition ends
  const visible = shown !== null;
  useEffect(() => {
    onVisibleChange?.(visible);
  }, [visible, onVisibleChange]);

  const showIfWaiting = () => {
    const registration = registrationRef.current;
    // `active` is missing during the very first install, which isn't an update
    if (registration?.active && registration.waiting && snoozeTimerRef.current === undefined) {
      setNeedRefresh(true);
    }
  };

  // When any tab activates a new version, every other tab is switched to the
  // new service worker while still running the old code, so reload them all.
  // The typed text survives because it is kept in the URL.
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    // On a first visit the first controllerchange is just the initial install
    // claiming this page (clientsClaim), with the same code.
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
      // Activates the waiting worker; the controllerchange listener reloads
      void updateServiceWorker();
    } else {
      // Another tab has already activated it
      window.location.reload();
    }
  };

  return (
    <Snackbar
      // A new message gets its own auto-hide timer
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
