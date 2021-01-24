import React, { createContext, useState, useEffect, useCallback } from 'react';
import { Iformdata } from '../interface';

interface ContextValues {
    formData: Iformdata,
    handleFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleIssueDate: (date: Date) => void,
    handleDueDate: (date: Date) => void,
    isFormFilled: boolean,
    calcTotalAmount: () => number
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
        address: "",
        issueDate: new Date(),
        dueDate: new Date(),
        VAT: 0,
        description: "",
        amount: 0,
        status: "UNPAID"
    })
    const [isFormFilled, setIsFormFilled] = useState(false);

    useEffect(() => {
        const { company, email, phone, address, VAT, description, amount } = formData;
        setIsFormFilled(prev => (company && email && phone && address && VAT && description && amount) ? true : false)
    }, [formData])


    const calcTotalAmount = useCallback(
        () => {
            return (((formData.VAT * formData.amount) / 100) + Number(formData.amount))
        },
        [formData.amount, formData.VAT],
    );



    const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleIssueDate = (date: Date) => {
        setFormData({ ...formData, issueDate: date })
    }
    const handleDueDate = (date: Date) => {
        setFormData({ ...formData, dueDate: date })
    }

    const contextValue = {
        formData,
        handleFormData,
        handleIssueDate,
        handleDueDate,
        isFormFilled,
        calcTotalAmount
    }


    return (
        <InvoiceContext.Provider value={contextValue}>
            { children}
        </InvoiceContext.Provider >)

}