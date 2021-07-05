export const API_URL = 'https://developer.xeosmarthome.com/api';

export const apiRoutes = {
    LOGIN: {
        path: '/login',
        method: 'POST'
    },
    CREATE_ACCOUNT: {
        path: '/create-account',
        method: 'POST'
    },
    USER_INFO: {
        path: '/user-info',
        method: 'GET'
    },

    devicesTypes: {
        path: '/devices-types',
        method: 'GET'
    },
    deviceType: {
        path: '/device-type',
        method: 'GET'
    },
    createDeviceType: {
        path: '/create-device-type',
        method: 'POST'
    },
    updateDeviceType: {
        path: '/update-device-type',
        method: 'POST'
    },
    deleteDeviceType: {
        path: '/delete-device-type',
        method: 'POST'
    },
    createActionType: {
        path: '/create-action-type',
        method: 'POST'
    },
    updateActionType: {
        path: '/update-action-type',
        method: 'POST'
    },
    deleteActionType: {
        path: '/delete-action-type',
        method: 'POST'
    },
    createParameterType: {
        path: '/create-parameter-type',
        method: 'POST'
    },
    updateParameterType: {
        path: '/update-parameter-type',
        method: 'POST'
    },
    deleteParameterType: {
        path: '/delete-parameter-type',
        method: 'POST'
    }
};
