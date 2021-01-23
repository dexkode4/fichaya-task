import React, { ReactNode } from 'react'
import { IPageLayout } from '../../interface';
import Header from '../Header';
import styles from './PageLayout.module.scss';

function PageLayout({ children }: IPageLayout) {
    return (
        <div>
            <Header />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default PageLayout
