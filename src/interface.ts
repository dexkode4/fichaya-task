import React, { ReactNode } from "react";

export interface Icomingsoon {
    match: { url: string }
}

export interface IPageLayout {
    children: ReactNode;
}

export interface Icustombutton {
    text: string,
    icon?: React.ReactElement,
    clear: boolean,
    fill: boolean
}