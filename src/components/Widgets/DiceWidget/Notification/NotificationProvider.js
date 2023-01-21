import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';

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
  const open = (content) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ]);
  const close = (id) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <NotificationContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="toasts-wrapper">
          {toasts.map((toast) => (
            <Notification key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Notification>
          ))}
        </div>,
        document.body
      )}
    </NotificationContext.Provider>
  );
};