import React, { useContext } from 'react';
import moment from 'moment';
import styles from './Invoice.module.scss';
import { LogoIcon } from '../../assets/svg';
import { InvoiceContext } from '../../Context/invoiceContext';

export const InvoiceCard = () => {
    const state = useContext(InvoiceContext);
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <LogoIcon />
                <header>Invoice</header>
            </div>
            <div className={styles.cardMidSection}>
                <div className={styles.cardLeft}>
                    <header className={styles.title}>FROM</header>
                    <h3>FICHAYA</h3>
                    <p>finance@fichaya.com</p>
                    <p>+2348177141611</p>
                    <br />
                    <header className={styles.title}>BILL TO</header>
                    <h3>{state?.formData.company}</h3>
                    <p>{state?.formData.email}</p>
                    <p>{state?.formData.address}</p>
                    <p>{`+234${state?.formData.phone.toString().substr(1,)}`}</p>

                </div>
                <div className={styles.cardRight}>
                    <header className={styles.title}>STATUS</header>
                    <h3 className={styles.negative}>{state?.formData.status}</h3>
                    <br />
                    <header className={styles.title}>CREATED</header>
                    <p>{`${moment(state?.formData.issueDate).format('LL')}`}</p>
                    <br />
                    <header className={styles.title}>DUE</header>
                    <p>{`${moment(state?.formData.dueDate).format('LL')}`}</p>
                    <br />
                    <header className={styles.title}>AMOUNT</header>
                    <p>{`NGN ${state?.calcTotalAmount().toLocaleString()}`}</p>
                </div>
            </div>
            <div className={styles.table}>
                <header className={styles.tableHeader}>
                    <div>DESCRIPTION</div>
                    <div>QTY</div>
                    <div>UNIT PRICE</div>
                    <div>AMOUNT</div>
                </header>
                <div className={styles.tableBody}>
                    <div>{state?.formData.description}</div>
                    <div>1</div>
                    <div>{`NGN ${state?.formData.amount?.toLocaleString()}`}</div>
                    <div>{`NGN ${state?.formData.amount?.toLocaleString()}`}</div>
                </div>
            </div>

            <div className={styles.cardLower}>
                <div></div>
                <div className={styles.cardBreakdown}>
                    <div className={styles.cardBreakdownItem}>
                        <header className={styles.title}>SUB-TOTAL</header>
                        <p>{`NGN ${state?.formData.amount?.toLocaleString()}`}</p>
                    </div>
                    <div className={styles.cardBreakdownItem}>
                        <header className={styles.title}>VAT ({state?.formData.VAT}%) </header>
                        <p>{`NGN ${state?.calcVAT().toLocaleString()}`}</p>
                    </div>
                    <div className={styles.cardBreakdownItem}>
                        <header className={styles.title}>TOTAL</header>
                        <p className={styles.cardBreakdownTotal}>{`NGN ${state?.calcTotalAmount().toLocaleString()}`}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}