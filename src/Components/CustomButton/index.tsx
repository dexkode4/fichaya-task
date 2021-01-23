import React from 'react';
import { Link } from 'react-router-dom';
import { Icustombutton } from '../../interface';
import styles from './CustomButton.module.scss';
import cx from 'classnames';


function CustomButton({ text, icon, clear, fill, toggleOptions }: Icustombutton) {

    return (
        <>
            <button className={cx(styles.customBtn, icon && styles.customBtnAction, clear && styles.customBtnClear, fill && styles.customBtnFill)} onClick={() => toggleOptions && toggleOptions((prev: boolean) => !prev)}>
                <span>{text}</span>
                {icon}
            </button>
        </>
    )
}

export default CustomButton
