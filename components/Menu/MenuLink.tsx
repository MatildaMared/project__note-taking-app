import Link from "next/link";
import React from "react";

import Icon, { IconType } from "../Icon/Icon";

interface MenuLinkProps {
    iconType: IconType;
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

function MenuLink({ iconType, href, active, children }: MenuLinkProps) {
    return (
        <li className="mb-0.5">
            <Link
                href={href}
                className={`group flex items-center gap-2 rounded-md p-2 transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-blue-500 dark:hover:bg-neutral-800 ${active ? "bg-neutral-100 text-blue-500 dark:bg-neutral-800" : ""}`}
            >
                <Icon type={iconType} className="" />
                <span
                    className={`text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 hover:dark:text-neutral-100 ${active ? "text-blue-500 dark:text-blue-500" : ""}`}
                >
                    {children}
                </span>
                <Icon
                    type="chevron-right"
                    className={`ml-auto ${active ? "block" : "hidden"} text-neutral-900 group-hover:block dark:text-neutral-100`}
                />
            </Link>
        </li>
    );
}

export default MenuLink;
