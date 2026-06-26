"use client";

import * as Sentry from "@sentry/nextjs";

export default function SentryExamplePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Sentry Example Page
      </h1>
      <p className="text-center text-sm text-gray-600">
        Haz clic en el botón para simular un error y verificar que Sentry lo
        capture.
      </p>
      <button
        type="button"
        onClick={() => {
          throw new Error("This error was thrown from the Sentry example page.");
        }}
        className="rounded-md bg-[#3483fa] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2968c8]"
      >
        Trigger Error
      </button>
      <p className="text-xs text-gray-400">
        Revisa el error en tu dashboard de Sentry.
      </p>
    </div>
  );
}
