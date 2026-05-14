import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

function loadAnalytics() {
  const globalWindow = window as Window &
    typeof globalThis & {
      clarity?: (...args: unknown[]) => void;
      dataLayer?: unknown[][];
      gtag?: (...args: unknown[]) => void;
    };

  try {
    if (!globalWindow.clarity) {
      globalWindow.clarity = function clarity(...args: unknown[]) {
        (globalWindow.clarity!.q = globalWindow.clarity!.q || []).push(args);
      };
    }

    const clarityScript = document.createElement("script");
    clarityScript.async = true;
    clarityScript.src = "https://www.clarity.ms/tag/wr3taqzj37";
    document.head.appendChild(clarityScript);

    globalWindow.dataLayer = globalWindow.dataLayer || [];
    globalWindow.gtag =
      globalWindow.gtag ||
      function gtag(...args: unknown[]) {
        globalWindow.dataLayer?.push(args);
      };
    globalWindow.gtag("js", new Date());
    globalWindow.gtag("config", "G-D4V7G85EXC");

    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-D4V7G85EXC";
    document.head.appendChild(gtagScript);
  } catch {
    // Analytics must never block the app from rendering.
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

window.addEventListener("load", loadAnalytics, { once: true });
