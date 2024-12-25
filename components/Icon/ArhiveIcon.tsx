import * as React from "react";

import { IconProps } from "./Icon";

function ArchiveIcon(props: IconProps) {
    const { fill = "currentColor" } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            {...props}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            preserveAspectRatio="none"
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
            />
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
            />
        </svg>
    );
}

export default ArchiveIcon;