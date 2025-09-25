"use client";

import { useState, useEffect } from "react";

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--primary)] text-white flex flex-col p-6 space-y-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-6">🎮 Gamestation</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-lg">
            📊 Dashboard
          </a>
          <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-lg">
            🧾 Reportes
          </a>
          <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-lg">
            ⚙️ Configuración
          </a>
          <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-lg">
            👥 Usuarios
          </a>
        </nav>
        <div className="mt-auto">
          <button
            onClick={toggleDarkMode}
            className="w-full px-3 py-2 bg-white text-[var(--primary)] rounded-lg font-medium hover:bg-gray-200 transition"
          >
            {darkMode ? "🌙 Oscuro" : "☀️ Claro"}
          </button>
        </div>
      </aside>

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Panel Principal</h2>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Bienvenido, Gabriel 👋
          </div>
        </header>

        {/* Contenido */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-slate-800 py-4 text-center text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Gamestation · Desarrollado con ❤️ por Gabriel
        </footer>
      </div>
    </div>
  );
}
