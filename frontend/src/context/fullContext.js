import React, { useContext, useState } from 'react';

const primaryData = {
    isLoading: false,
    showNotification: false,
    notifyText: '',
    notifyType: ''
};

const FullContext = React.createContext();

const FullProvider = ({ children }) => {
    const [
        state,
        setState
    ] = useState(primaryData);

    return <FullContext.Provider value={{ ...state }}>{children}</FullContext.Provider>;
};

const useFullContext = () => {
    return useContext(FullContext);
};
export { FullProvider, primaryData, useFullContext };
