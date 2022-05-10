import { WARNING_NOTIFICATION, CLEAR_WARNING } from './activity';

export const reactReducer = (state, notification) => {
    if (notification.type === WARNING_NOTIFICATION) {
        return {
            ...state,
            showNotification: true,
            notifyType: 'notify-red',
            notifyText: 'I am sure you miss something, fill all values,please!!!!'
        };
    }
    if (notification.type === CLEAR_WARNING) {
        return {
            ...state,
            showNotification: false,
            notifyType: '',
            notifyText: ''
        };
    }
    throw new Error(`Not a valid type ${notification.type}`);
};
