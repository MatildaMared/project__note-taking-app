import React from "react";

import HomeIcon from "./HomeIcon";

interface IconProps {
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
        default:
            return <></>;
    }
}

export default Icon;
