import React, { useContext, useReducer } from 'react';
import { WARNING_NOTIFICATION, CLEAR_WARNING } from './activity';

import { reactReducer } from './reactReducer';

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
        dispatch
    ] = useReducer(reactReducer, primaryData);

    // This function will make an alert for the display in entire application
    const poupNotification = () => {
        dispatch({ type: WARNING_NOTIFICATION });
        clearNotification();
    };

    const clearNotification = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_WARNING });
        }, 2000);
    };

    return <FullContext.Provider value={{ ...state, poupNotification }}>{children}</FullContext.Provider>;
};

const useFullContext = () => {
    return useContext(FullContext);
};
export { FullProvider, primaryData, useFullContext };
