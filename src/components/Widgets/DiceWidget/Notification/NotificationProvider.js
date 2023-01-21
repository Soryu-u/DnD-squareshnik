import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Notification.module.css';
import { NotificationContext } from './NotificationContext';
import { Notification } from './Notification';

// Create a random ID
function generateUEID() {
    let first = (Math.random() * 46656) | 0;
    let second = (Math.random() * 46656) | 0;
    first = ('000' + first.toString(36)).slice(-3);
    second = ('000' + second.toString(36)).slice(-3);

    return first + second;
}

export const NotificationProvider = (props) => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        if (toasts.length === 4) {
            setToasts(toasts.slice(1));
        }
    }, [toasts]);

    const open = (content) =>
        setTimeout(() => {
            setToasts((currentToasts) => [
                ...currentToasts,
                { id: generateUEID(), content },
            ]);
        }, 0.1);

    const close = (id) =>
        setToasts((currentToasts) =>
            currentToasts.filter((toast) => toast.id !== id)
        );

    const contextValue = useMemo(() => ({ open }), []);

    return (
        <NotificationContext.Provider value={contextValue}>
            {props.children}

            {createPortal(
                <div className={styles.wrapper}>
                    {toasts.map((toast) => (
                        <Notification
                            key={toast.id}
                            close={() => close(toast.id)}
                        >
                            {toast.content}
                        </Notification>
                    ))}
                </div>,
                document.body
            )}
        </NotificationContext.Provider>
    );
};
