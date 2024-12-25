import Link from "next/link";
import React from "react";

import Icon, { IconType } from "../Icon/Icon";

interface MenuLinkProps {
    iconType: IconType;
    href: string;
    children: React.ReactNode;
}

function MenuLink({ iconType, href, children }: MenuLinkProps) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 rounded-md p-2 transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
            <Icon type={iconType} className="text-blue-500" />
            {children}
        </Link>
    );
}

export default MenuLink;
