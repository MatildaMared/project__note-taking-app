import React from "react";

import { IconProps } from "./Icon";

function ChevronRightIcon(props: IconProps) {
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
                fill={fill}
                fillRule="evenodd"
                d="M9.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default ChevronRightIcon;
