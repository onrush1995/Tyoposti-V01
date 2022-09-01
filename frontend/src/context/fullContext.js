import React, { useContext, useReducer } from 'react';
import {
    WARNING_NOTIFICATION,
    CLEAR_WARNING,
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_ERROR
} from './activity';

import { reactReducer } from './reactReducer';

const primaryData = {
    isLoading: false,
    showNotification: false,
    notifyText: '',
    notifyType: '',
    userLocation: '',
    token: null,
    user: null
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

    const signupUser = async (currentUser) => {
        console.log(currentUser);
    };

    return <FullContext.Provider value={{ ...state, poupNotification, signupUser }}>{children}</FullContext.Provider>;
};

const useFullContext = () => {
    return useContext(FullContext);
};
export { FullProvider, primaryData, useFullContext };
