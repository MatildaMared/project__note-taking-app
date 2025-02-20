"use client";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import data from "../../data.json";
import MenuLink from "./MenuLink";

function Menu() {
    const { theme, toggleDarkMode } = useTheme();
    const pathName = usePathname();

    // TODO: Import data from DB
    const notes = data.notes;
    const tags = new Set(notes.flatMap((note) => note.tags));

    const logoImg = theme === "dark" ? "/images/logo-dark.svg" : "/images/logo.svg";

    return (
        <div className="flex h-full min-w-60 flex-col gap-6 border-r border-r-neutral-200 p-4 dark:border-r-neutral-700">
            <Link href="/notes">
                <p className="sr-only">Home</p>
                <Image src={logoImg} alt="Logo" width={100} height={95} />
            </Link>
            <nav className="flex flex-col gap-0.5">
                <ul>
                    <MenuLink iconType="home" href="/notes" active={pathName === "/notes"}>
                        All Notes
                    </MenuLink>
                    <MenuLink iconType="archive" href="/notes/archived" active={pathName === "/notes/archived"}>
                        Archived Notes
                    </MenuLink>
                </ul>
                <div className="mt-1 mb-2 h-0.25 bg-neutral-200 dark:bg-neutral-700" />
                <h2 className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">Tags</h2>
                <ul>
                    {Array.from(tags).map((tag) => (
                            <MenuLink
                                iconType="tag"
                                href={`/notes/tags/${tag}`}
                                active={pathName === `/notes/tags/${tag}`}
                            >
                                {tag}
                            </MenuLink>
                    ))}
                </ul>
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
