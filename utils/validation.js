

export const passwordErrorMessage = 'Password must be more then 6 symbols!'
export const emailErrorMessage = 'Email is not Valid!'
export const validationPassword = (value) => {
    if (value.length === 0) {
        return null
    } else if (value.length < 6) {
        return passwordErrorMessage
    } else if (value.length >= 6) {
        return null
    }
}

export const validationEmail = value => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (value.length === 0) {
        return null;
    } else if (reg.test(value) === false) {
        return emailErrorMessage
    } else if (reg.test(value) === true) {
        return null;
    }
};

