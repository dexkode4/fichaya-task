import React, { useContext } from 'react';
import { Prompt } from "react-router-dom";
import CustomButton from '../../Components/CustomButton';
import PageLayout from '../../Components/PageLayout';
import styles from './GenerateInvoice.module.scss';
import DatePicker from "react-datepicker";
import { InvoiceContext } from '../../Context/invoiceContext';
import "react-datepicker/dist/react-datepicker.css";
import './custom-react-date-picker.scss';
import { FiChevronDown } from 'react-icons/fi'
import { IGenerateInvoice } from '../../interface';


function GenerateInvoice({ history, match }: IGenerateInvoice) {
    const state = useContext(InvoiceContext);
    return (
        <PageLayout>
            <CustomButton text="Generate invoice" clear={false} fill={false} />
            <header className={styles.header}>
                ENTER INVOICE INFO
            </header>
            <div className={styles.formSection}>
                <div className={styles.formSectionLeft}>
                    <div className={styles.formInput}>
                        <label htmlFor="company">Customer/ Company name</label>
                        <input type="text" name="company" id="company" className={styles.inputField} onChange={state?.handleFormData} />
                    </div>
                    <div className={styles.mid}>
                        <div className={styles.formInput}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" id="email" className={styles.inputField} onChange={state?.handleFormData} />
                        </div>
                        <div className={styles.formInput}>
                            <label htmlFor="phone">Phone number</label>
                            <input type="number" name="phone" id="phone" className={styles.inputField} onChange={state?.handleFormData} />
                        </div>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="address">Home/ Building Address</label>
                        <input type="text" name="address" id="address" className={styles.inputField} onChange={state?.handleFormData} />
                    </div>

                </div>
                <div className={styles.formSectionRight}>
                    <div className={styles.mid}>
                        <div>
                            <label>Issue date</label>
                            <div className={styles.dateInput}>
                                <DatePicker
                                    selected={state?.formData.issueDate}
                                    onChange={(date: Date) => state?.handleIssueDate(date)}
                                    name="startDate"
                                    dateFormat="MM/dd/yyyy"
                                    wrapperClassName="datePicker"
                                    calendarClassName="calender"
                                />
                                <FiChevronDown />
                            </div>
                        </div>
                        <div>
                            <label>Due date</label>
                            <div className={styles.dateInput}>
                                <DatePicker
                                    selected={state?.formData.dueDate}
                                    onChange={(date: Date) => state?.handleDueDate(date)}
                                    name="dueDate"
                                    dateFormat="MM/dd/yyyy"
                                    wrapperClassName="datePicker"
                                    calendarClassName="calender"
                                />
                                <FiChevronDown />
                            </div>
                        </div>
                    </div>

                    <div className={styles.mid}>
                        <div className={styles.formInput}>
                            <label htmlFor="invoice">Invoice number</label>
                            <input type="email" name="invoice" id="invoice" className={styles.inputField} onChange={state?.handleFormData} />
                        </div>

                        <div>
                            <label>V.A.T %</label>
                            <div className={styles.dateInput}>
                                <input type="number" name="VAT" onChange={state?.handleFormData} />
                                <FiChevronDown />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formInput}>
                        <label htmlFor="description">Service description</label>
                        <input type="text" name="description" id="description" className={styles.inputField} onChange={state?.handleFormData} />
                    </div>
                    <div className={styles.mid}>
                        <div className={styles.formInput}>
                            <label htmlFor="amount">Service amount</label>
                            <input type="number" name="amount" id="amount" className={styles.inputField} onChange={state?.handleFormData} value={state?.formData.amount} />
                        </div>
                        <div className={styles.formInput}>
                            <label>Total amount</label>
                            <div className={styles.total}>NGN {state?.calcTotalAmount().toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div></div>
                <div className={styles.footerAction}>
                    <CustomButton text="CANCEL" clear={true} fill={false} history={history} />
                    <CustomButton text="CREATE INVOICE" clear={false} fill={true} history={history} match={match} />
                </div>
            </div>
        </PageLayout>
    )
}

export default GenerateInvoice
