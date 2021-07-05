const DEVICE_NAME_REGEX = /^[a-zA-z0-9 \-()]+$/;
const DEVICE_DESCRIPTION_REGEX = /^/;
const ACTION_NAME_REGEX = /^[a-zA-z0-9 \-()]+$/;
const ACTION_URI_REGEX = /^[a-zA-Z0-9_]+$/;
const ACTION_DESCRIPTION_REGEX = DEVICE_DESCRIPTION_REGEX;

export const validateDeviceName = (device_name) => {
    if (device_name.length === 0)
        return {
            valid: false,
            message: "Device name can not be empty."
        };

    if (!device_name.match(DEVICE_NAME_REGEX))
        return {
            valid: false,
            message: "Un-allowed characters."
        };

    return {
        valid: true,
        message: "Look's good."
    };
};


export const validateDeviceDescription = (deviceName) => {
    if (deviceName.length === 0)
        return {
            valid: false,
            message: "Device description can not be empty."
        };

    if (!deviceName.match(DEVICE_DESCRIPTION_REGEX))
        return {
            valid: false,
            message: "Un-allowed characters."
        };

    return {
        valid: true,
        message: "Look's good."
    };
};


export const validateActionName = (actionName) => {
    if (actionName.length === 0)
        return {
            valid: false,
            message: "Action name can not be empty."
        };

    if (!actionName.match(ACTION_NAME_REGEX))
        return {
            valid: false,
            message: "Un-allowed characters."
        };

    return {
        valid: true,
        message: "Look's good."
    };
};


export const validateActionUri = (actionUri) => {
    if (actionUri.length === 0)
        return {
            valid: false,
            message: "Device description can not be empty."
        };

    if (actionUri.length >= 64)
        return {
            valid: false,
            message: "Length limit is 63"
        };

    if (!actionUri.match(ACTION_URI_REGEX))
        return {
            valid: false,
            message: "Only letters, digits and _ (underscore) allowed."
        };

    return {
        valid: true,
        message: "Look's good."
    };
};

export const validateActionDescription = (actionDescription) => {

    if (actionDescription.length === 0)
        return {
            valid: false,
            message: "Action description can not be empty."
        };

    if (!actionDescription.match(ACTION_DESCRIPTION_REGEX))
        return {
            valid: false,
            message: "Un-allowed characters."
        };

    return {
        valid: true,
        message: "Look's good."
    };
};