"use client";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";
import React from "react";

function Menu() {
    const { theme, toggleDarkMode } = useTheme();

    const logoImg = theme === "dark" ? "/images/logo-dark.svg" : "/images/logo.svg";

    return (
        <menu className="flex h-full min-w-60 flex-col border-r border-r-neutral-200 p-4 dark:border-r-neutral-700">
            <Image src={logoImg} alt="Logo" width={100} height={95} />
            <p>Menu</p>
            <button
                onClick={toggleDarkMode}
                className="mt-auto cursor-pointer rounded-md bg-neutral-300 px-2 py-1 text-neutral-500 dark:bg-neutral-800"
            >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </menu>
    );
}

export default Menu;
