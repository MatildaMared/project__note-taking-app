import React from "react";

import ArchiveIcon from "./ArhiveIcon";
import HomeIcon from "./HomeIcon";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    type: IconType;
    color?: string;
}

export type IconType =
    | "home"
    | "archive"
    | "trash"
    | "settings"
    | "plus"
    | "edit"
    | "search"
    | "close"
    | "menu"
    | "tag"
    | "calendar"
    | "user"
    | "lock"
    | "unlock"
    | "logout"
    | "moon"
    | "sun";

function Icon(props: IconProps) {
    switch (props.type) {
        case "home":
            return <HomeIcon {...props} />;
        case "archive":
            return <ArchiveIcon {...props} />;
        default:
            return <></>;
    }
}

export default Icon;
