import React, { createContext, useState } from 'react';
import { Iformdata } from '../interface';

interface ContextValues {
    formData: Iformdata,
    handleFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export const InvoiceContext = createContext<ContextValues | null>(null);


type Propstype = {
    children: React.ReactNode
}


export const InvoiceContextProvider = ({ children }: Propstype) => {
    const [formData, setFormData] = useState({
        company: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const contextValue = {
        formData,
        handleFormData
    }


    return (
        <InvoiceContext.Provider value={contextValue}>
            { children}
        </InvoiceContext.Provider >)

}