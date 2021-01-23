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
    fill: boolean,
    toggleOptions?: any
}

export interface IinvoiceStatus {
    status: string
}


export interface Ioptions {
    options: Ioption[],
    isOpen: boolean,
    setIsOpen: (D: boolean) => void,
    match: { url: string }
}

export interface Ioption {
    link: string,
    title: string
}

export interface Iformdata {
    company: string,
    email: string,
    phone: string,
    address: string
}