
export const setDevicesTypesAction = (devicesTypes) => ({
    type: 'SET_DEVICES_TYPES',
    payload: devicesTypes
});


export const addDeviceTypeAction = (deviceType) => ({
   type: 'ADD_DEVICE_TYPE',
   payload: deviceType
});


export const deleteDeviceTypeAction = (deviceTypeId) => ({
    type: 'DELETE_DEVICE_TYPE',
    payload: deviceTypeId
});
