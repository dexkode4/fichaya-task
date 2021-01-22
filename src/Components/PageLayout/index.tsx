import React, { ReactNode } from 'react'
import { IPageLayout } from '../../interface';
import Header from '../Header';

function PageLayout({ children }: IPageLayout) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default PageLayout
