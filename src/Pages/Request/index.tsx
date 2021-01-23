import React from 'react';
import CustomButton from '../../Components/CustomButton';
import PageLayout from '../../Components/PageLayout';
import { CaretDownIconWithBg } from '../../assets/svg'

function Request() {
    return (
        <PageLayout>
            <CustomButton text="CREATE INVOICE" clear={true} fill={false} />
        </PageLayout>
    )
}

export default Request
