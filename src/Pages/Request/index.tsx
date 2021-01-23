import React, { useState } from 'react';

import CustomButton from '../../Components/CustomButton';
import PageLayout from '../../Components/PageLayout';
import { CaretDownIconWithBg } from '../../assets/svg';
import styles from './Request.module.scss';
import { InvoiceStatus, Options } from './Request.component';



const options = [
    {
        link: 'contact-customer',
        title: 'Contact customer'
    },
    {
        link: 'generate-invoice',
        title: 'Generate invoice'
    },
    {
        link: 'reject-request',
        title: 'Reject request'
    }
]

function Request({ match }: { match: { url: string } }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    return (
        <PageLayout>
            <CustomButton text="Request Information" clear={false} fill={false} />

            <div className={styles.info_card}>
                <div className={styles.info_cardTop}>
                    <div>
                        <header>REQUEST TYPE</header>
                        <span>POST-CON</span>
                    </div>
                    <div>
                        <header>CUStOMER NAME</header>
                        <span>PETER ABU-EKPESHIE</span>
                    </div>
                    <div>
                        <header>CLEANING DATE</header>
                        <span>09•10•2019</span>
                    </div>
                </div>
                <div className={styles.info_cardMiddle}>
                    <div>
                        <header>INVOICE STATUS</header>
                        <InvoiceStatus status='UNGENERATED' />
                    </div>
                    <div>
                        <header>REQUEST DATE</header>
                        <span>06•10•2016</span>
                    </div>
                    <div>
                        <header>REQUEST TIME</header>
                        <span>8:00 A.M</span>
                    </div>
                </div>
                <div className={styles.info_cardBottom}>
                    <div>
                        <header>LOCATION</header>
                        <span>8, YOvi Street,<br />
IWAYA, ONIKE, YABA.</span>

                    </div>
                    <div>
                        <header>HOUSE-TYPE</header>
                        <span>5-BEDROOM DUPLEX</span>
                    </div>
                    <div>
                        <header>REQUEST TIME</header>
                        <span>8:00 A.M</span>
                    </div>
                </div>
                <div className={styles.line} />
                <div className={styles.action}>
                    <CustomButton text="Actions" icon={<CaretDownIconWithBg />} clear={false} fill={false} toggleOptions={setIsOpen} />
                    {
                        isOpen && <Options options={options} isOpen={isOpen} setIsOpen={setIsOpen} match={match}/>
                    }
                </div>

            </div>
        </PageLayout>
    )
}

export default Request
