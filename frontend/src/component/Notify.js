import React from 'react';
import { useFullContext } from '../context/fullContext';

const Notify = () => {
    const { notifyType, notifyText } = useFullContext();
    return <div className={`notify ${notifyType}`}>{notifyText}</div>;
};

export default Notify;
