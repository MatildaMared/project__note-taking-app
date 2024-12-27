import React from "react";

import ArchiveIcon from "./ArhiveIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import HomeIcon from "./HomeIcon";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    type: IconType;
    color?: string;
}

export type IconType =
    | "archive"
    | "calendar"
    | "chevron-right"
    | "close"
    | "edit"
    | "home"
    | "lock"
    | "logout"
    | "menu"
    | "moon"
    | "plus"
    | "search"
    | "settings"
    | "sun"
    | "tag"
    | "trash"
    | "unlock"
    | "user";

function Icon(props: IconProps) {
    switch (props.type) {
        case "home":
            return <HomeIcon {...props} />;
        case "archive":
            return <ArchiveIcon {...props} />;
        case "chevron-right":
            return <ChevronRightIcon {...props} />;
        default:
            return <></>;
    }
}

export default Icon;
