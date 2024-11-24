import Menu from "@/components/Menu";
import React from "react";

function NotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-full">
            <Menu />
            <div className="w-full flex-row">
                <div className="w-full border-b border-b-neutral-200 p-4 dark:border-b-neutral-700">Searchbar</div>
                {children}
            </div>
        </div>
    );
}

export default NotesLayout;
