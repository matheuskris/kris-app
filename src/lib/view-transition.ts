let pending: (() => void) | null = null;

export function notifyViewTransitionReady() {
  const resolve = pending;
  pending = null;
  resolve?.();
}

export function waitForViewTransitionReady(timeoutMs = 1200) {
  return new Promise<void>((resolve) => {
    const finish = () => {
      if (pending === finish) pending = null;
      resolve();
    };

    pending = finish;
    window.setTimeout(() => {
      if (pending === finish) {
        pending = null;
        resolve();
      }
    }, timeoutMs);
  });
}
