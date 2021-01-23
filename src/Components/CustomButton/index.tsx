import React from 'react'
import { Icustombutton } from '../../interface';
import styles from './CustomButton.module.scss';
import cx from 'classnames';


function CustomButton({ text, icon, clear, fill }: Icustombutton) {
    return (
        <button className={cx(styles.customBtn, icon && styles.customBtnAction, clear && styles.customBtnClear, fill && styles.customBtnFill )}>
            <span>{text}</span>
            {icon}
        </button>
    )
}

export default CustomButton
