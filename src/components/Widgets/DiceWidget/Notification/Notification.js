import React from 'react';
import styles from './Notification.module.css';
import closeButton from '../../../../images/close.png';

export const Notification = ({ children, close }) => {
    return (
        <div className={styles.notification}>
            <div className={styles.header}>Результат:</div>
            <div className={styles.content}>
                {children.map((item, index) => {
                    let result = 0;
                    const length = item.result.length
                    return (
                        <div className={styles.items} key={item.dice + index + 'dice'}>
                           {`d${item.dice}:`}
                            <div className={styles.dices}>
                                {item.result.map((item, index) => {
                                    result = result + item;
                                    if (length === index + 1) {
                                        return (
                                            <div
                                                key={item + index + item + 'value'}
                                            >
                                                {`${item}`}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={item + index + item + 'value'}
                                            >
                                                {` ${item} + `}
                                            </div>
                                        );
                                    }

                                })}
                            </div>
                            <div className={styles.result}>{`( ${result} )`}</div>
                        </div>
                    );
                })}
            </div>
            <img
                className={styles.close}
                onClick={close}
                src={closeButton}
                alt="close"
            />
        </div>
    );
};
