import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IinvoiceStatus, Ioption, Ioptions } from '../../interface';
import styles from './Request.module.scss';

export function InvoiceStatus({ status }: IinvoiceStatus) {
    return (
        <div className={styles.invoice}>
            {status}
        </div>
    )
}

export function Options({ options, isOpen, setIsOpen, match}: Ioptions) {
    const dropDownRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     function handleClickOutside(event: any) {
    //         if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
    //             setIsOpen(false);
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [dropDownRef, setIsOpen]);

    return <> {
        // isOpen &&
        <div className={styles.options} ref={dropDownRef}>
            {
                options.map((option: Ioption, index) => (
                    <Link to={`${match.url}/${option.link}`} key={index}>
                        {option.title}
                    </Link>
                ))
            }
        </div>
    }
    </>
}