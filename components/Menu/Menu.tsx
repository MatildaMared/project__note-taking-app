"use client";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Icon from "./Icon";

function Menu() {
    const { theme, toggleDarkMode } = useTheme();

    const logoImg = theme === "dark" ? "/images/logo-dark.svg" : "/images/logo.svg";

    return (
        <div className="flex h-full min-w-60 flex-col gap-4 border-r border-r-neutral-200 p-4 dark:border-r-neutral-700">
            <Link href="/notes">
                <p className="sr-only">Home</p>
                <Image src={logoImg} alt="Logo" width={100} height={95} />
            </Link>
            <nav className="flex flex-col gap-0.5">
                <Link href="/notes" className="flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100">
                    <Icon type="home" className="text-blue-500" />
                    All Notes
                </Link>
                <Link href="/notes/archived">Archived Notes</Link>
            </nav>
            <button
                onClick={toggleDarkMode}
                className="mt-auto cursor-pointer rounded-md bg-neutral-300 px-2 py-1 text-neutral-500 dark:bg-neutral-800"
            >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    );
}

export default Menu;
