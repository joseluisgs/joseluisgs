export const loadGA = (measurementId: string) => {
  if (typeof window === "undefined" || (window as any).GA_INITIALIZED) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", measurementId, { anonymize_ip: true });

  (window as any).GA_INITIALIZED = true;
};