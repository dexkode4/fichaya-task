import React, { useContext } from 'react';
import { Icustombutton } from '../../interface';
import styles from './CustomButton.module.scss';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { InvoiceContext } from '../../Context/invoiceContext';


function CustomButton({ text, icon, clear, fill, toggleOptions, history, match }: Icustombutton) {
    const state = useContext(InvoiceContext);
    return (
        <>
            <button
                type="submit"
                className={cx(styles.customBtn, icon && styles.customBtnAction, clear && styles.customBtnClear, fill && styles.customBtnFill)}
                onClick={() => {
                    toggleOptions && toggleOptions((prev: boolean) => !prev);

                    text === "CANCEL" && history?.push('/');

                    text === "CREATE INVOICE" && !state?.isFormFilled && toast.error("Form field can't be empty")

                    text === "CREATE INVOICE" && history?.push(`${match?.url}/${uuidv4()}`)
                }
                }
            >
                <span>{text}</span>
                {icon}
            </button>
        </>
    )
}

export default CustomButton
