import React, { useContext } from 'react';
import CustomButton from '../../Components/CustomButton';
import PageLayout from '../../Components/PageLayout';
import styles from './GenerateInvoice.module.scss';
// import DatePicker from "react-datepicker";
import { InvoiceContext } from '../../Context/invoiceContext';



function GenerateInvoice() {
    const state = useContext(InvoiceContext);
    console.log(state);

    return (
        <PageLayout>
            <CustomButton text="Generate invoice" clear={false} fill={false} />
            <header className={styles.header}>
                ENTER INVOICE INFO
            </header>
            <div className={styles.formSection}>
                <div className={styles.formSectionLeft}>
                    <div>
                        <label htmlFor="company">Customer/ Company name</label>
                        <input type="text" name="company" id="company" className={styles.inputField} onChange={state?.handleFormData} />
                    </div>
                    <div className={styles.mid}>
                        <div>
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" id="email" className={styles.inputField} onChange={state?.handleFormData} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone number</label>
                            <input type="number" name="phone" id="phone" className={styles.inputField} onChange={state?.handleFormData} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address">Home/ Building Address</label>
                        <input type="text" name="address" id="address" className={styles.inputField} onChange={state?.handleFormData} />
                    </div>

                </div>
                <div className={styles.formSectionRight}>

                </div>

            </div>
        </PageLayout>
    )
}

export default GenerateInvoice
