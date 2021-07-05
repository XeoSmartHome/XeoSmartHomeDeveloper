import {apiRequest} from "./Requests";
import {apiRoutes} from "./Routes";

export const API = {
    /**
     * @param {String} params.emailAddress
     * @param {String} params.password
     * @return {Promise}
     */
    login: (params) => apiRequest(apiRoutes.LOGIN, params),

    /**
     *
     * @param {String} params.firstName
     * @param {String} params.lastName
     * @param {String} params.emailAddress
     * @param {string} params.password
     * @param {string} params.phoneNumber
     * @return {Promise}
     */
    createAccount: (params) => apiRequest(apiRoutes.CREATE_ACCOUNT, params),

    /**
     * @param {null} params
     * @return {Promise}
     */
    userInfo: (params) => apiRequest(apiRoutes.USER_INFO, params),

    /**
     * @param {null} params
     * @return {Promise}
     */
    getDevicesTypes: (params) => apiRequest(apiRoutes.devicesTypes, params),

    /**
     * @param {Number} params.id
     * @return {Promise}
     */
    getDeviceType: (params) => apiRequest(apiRoutes.deviceType, params),

    /**
     * @param {String} params.name
     * @param {String} params.description
     * @return {Promise}
     */
    createDeviceType: (params) => apiRequest(apiRoutes.createDeviceType, params),

    /**
     * @param {Number} params.id
     * @param {String} params.name
     * @param {String} params.description
     * @return {Promise}
     */
    updateDeviceType: (params) => apiRequest(apiRoutes.updateDeviceType, params),

    /**
     * @param {Number} params.id
     * @return {Promise}
     */
    deleteDeviceType: (params) => apiRequest(apiRoutes.deleteDeviceType, params),

    /**
     * @param {Number} params.deviceTypeId
     * @param {String} params.name
     * @param {String} params.uri
     * @param {String} params.description
     * @return {Promise}
     */
    createActionType: (params) => apiRequest(apiRoutes.createActionType, params),

    /**
     * @param {Number} params.id
     * @param {String} params.name
     * @param {String} params.uri
     * @param {string} params.description
     * @return {Promise}
     */
    updateActionType: (params) => apiRequest(apiRoutes.updateActionType, params),

    /**
     * @param {Number} params.id
     * @return {Promise}
     */
    deleteActionType: (params) => apiRequest(apiRoutes.deleteActionType, params),

    /**
     * @param {Number} params.actionTypeId
     * @param {String} params.name
     * @param {String} params.uri
     * @param {String} params.description
     * @param {Number} params.minValue
     * @param {Number} params.maxValue
     * @param {Number} params.defaultValue
     * @return {Promise}
     */
    createParameterType: (params) => apiRequest(apiRoutes.createParameterType, params),

    /**
     * @param {Number} params.id
     * @param {String} params.name
     * @param {String} params.uri
     * @param {String} params.description
     * @param {Number} params.minValue
     * @param {Number} params.maxValue
     * @param {Number} params.defaultValue
     * @return {Promise}
     */
    updateParameterType: (params) => apiRequest(apiRoutes.updateParameterType, params),

    /**
     * @param {Number} params.id
     * @return {Promise}
     */
    deleteParameterType: (params) => apiRequest(apiRoutes.deleteParameterType, params),
};
