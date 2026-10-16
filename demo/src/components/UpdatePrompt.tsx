import { useEffect, useRef, useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import { useRegisterSW } from "virtual:pwa-register/react";
import { useOfflinePack } from "../hooks/useOfflinePack";

const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;

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
  const [offlineReadyClosed, setOfflineReadyClosed] = useState(false);
  const downloading = offlinePack !== null && offlinePack.done < offlinePack.total;
  const downloadPercent = offlinePack
    ? Math.floor((offlinePack.done / offlinePack.total) * 100)
    : 0;
  const offlineReady =
    offlinePack !== null && !downloading && offlinePack.failed === 0 && !offlineReadyClosed;

  const visible = needRefresh || downloading || offlineReady;
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
    <>
      <Snackbar
        open={needRefresh}
        message="New version available"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={
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
        }
      />
      <Snackbar
        open={downloading && !needRefresh}
        message={`Downloading for offline use... ${downloadPercent}%`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Snackbar
        open={offlineReady && !needRefresh}
        message="Ready to work offline"
        autoHideDuration={4000}
        onClose={() => setOfflineReadyClosed(true)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};
