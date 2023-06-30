"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="fixed p-2 bottom-6 left-24"
      style={{ margin: "auto" }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-6 w-6 text-orange-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-slate-900" />
      )}
    </button>
  );
};

export default ThemeButton;
