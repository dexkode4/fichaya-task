import React, { ReactNode } from "react";

export interface Icomingsoon {
    match?: { url: string }
}

export interface IPageLayout {
    children: ReactNode;
}

export interface Icustombutton {
    text: string,
    icon?: React.ReactElement,
    clear: boolean,
    fill: boolean,
    toggleOptions?: any,
    history?: { push: (D: string) => void },
    match?: { url: string }
}

export interface IGenerateInvoice {
    history?: { push: (D: string) => void }
    match?: { url: string }
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
    address: string,
    issueDate: Date,
    dueDate: Date,
    VAT: number | undefined,
    description: string,
    amount: number | undefined,
    status: string
}