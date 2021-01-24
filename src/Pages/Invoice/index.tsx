import React from 'react';
import CustomButton from '../../Components/CustomButton';
import PageLayout from '../../Components/PageLayout';
import styles from './Invoice.module.scss';
import { InvoiceCard } from './Invoice.component';


function Invoice() {
    return (
        <PageLayout>
            <CustomButton text="Generate invoice" clear={false} fill={false} />
            <header className={styles.header}>
                PREVIEW YOUR INVOICE
            </header>
            <div className={styles.flex}>
                <div className={styles.flexLeft}>
                    <InvoiceCard />
                    <div className={styles.btnGroup}>
                        <CustomButton text="GO BACK" clear={true} fill={false}/>
                        <CustomButton text="SEND TO CUSTOMER" clear={false} fill={true} />
                    </div>
                </div>
                <div className={styles.flexRight}>
                </div>
            </div>
        </PageLayout>
    )
}

export default Invoice
