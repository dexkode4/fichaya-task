import React from 'react';
import CustomButton from '../../Components/CustomButton';
import PageLayout from '../../Components/PageLayout';
import styles from './Invoice.module.scss';
import { } from './Invoice.component';


function Invoice() {
    return (
        <PageLayout>
            <CustomButton text="Generate invoice" clear={false} fill={false} />
            <header className={styles.header}>
                PREVIEW YOUR INVOICE
            </header>

        </PageLayout>
    )
}

export default Invoice
