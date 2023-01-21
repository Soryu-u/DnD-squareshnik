import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

export const useNotification = () => useContext(NotificationContext);