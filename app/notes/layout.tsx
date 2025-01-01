import Menu from "@/components/Menu";
import React from "react";

function NotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-full">
            <Menu />
            <div className="w-full flex-row">
                {children}
            </div>
        </div>
    );
}

export default NotesLayout;
