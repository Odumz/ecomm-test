import { ref, Ref } from 'vue'

const password_pattern:any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const email_pattern:any = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
const phone_pattern:any = /^[0]{1}[0-9]{10}$/;
const number_pattern:any = /^[0-9]*$/;
const url_pattern:any = /^(http(s)?:\/\/)?([\w]+\.)([-a-zA-Z0-9]+)\/*/;
const linkedin_pattern:any = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/;
const facebook_pattern:any = /^(http(s)?:\/\/)?([\w]+\.)?facebook\.com\/([-a-zA-Z0-9]+)\/*/;
const twitter_pattern:any = /^(http(s)?:\/\/)?([\w]+\.)?twitter\.com\/([-a-zA-Z0-9]+)\/*/;

export const stringCheck:any = (value:string, label?:string, length:number = 2) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (!value) {
        hasError.value = true;
        message.value = `${label || 'Item'} is required`
    } else if (value.length < length) {
        hasError.value = true;
        message.value = `${label || 'Item'} is less than ${length} characters`
    } else {
        hasError.value = false;
        message.value = ''
    }

    return {
        hasError: hasError.value,
        message: message.value
    }
}

export const emailCheck:any = (value:string, label?:string) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (!value) {
        hasError.value = true;
        message.value = `${label || 'Email'} is required`
    } else if (!value.match(email_pattern)) {
        hasError.value = true;
        message.value = `${label || 'Email'} must match pattern 'brainadams@gmail.com'`
    } else {
        hasError.value = false;
        message.value = ''
    }

    return {
        hasError: hasError.value,
        message: message.value
    }
}

export const passwordCheck:any = (value:string, label?:string) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (!value) {
        hasError.value = true;
        message.value = `${label || 'Password'} is required`
    } else if (!password_pattern.test(value)) {
        hasError.value = true;
        message.value = `${label || 'Password'} must be at least 8 characters, contain at least one number, one symbol, one uppercase and one lowercase letter`
    } else {
        hasError.value = false;
        message.value = ''
    }
    console.log(`hasError.value is: ${hasError.value} `)
    return {
        hasError: hasError.value,
        message: message.value
    }
}

export const phoneCheck:any = (value:string, label?:string, pattern:any = phone_pattern) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (!value) {
        hasError.value = true;
        message.value = `${label || 'Phone number'} is required`
    } else if (isNaN(Number(value))) {
        hasError.value = true;
        message.value = `${label || 'Phone number'} cannot contain letters`
    } else if (!pattern.test(value)) {
        hasError.value = true;
        message.value = `${label || 'Phone number'} must be 11 digits and start with 0`
    } else {
        hasError.value = false;
        message.value = ''
    }

    return {
        hasError: hasError.value,
        message: message.value
    }
}

export const numberCheck:any = (value:string, label?:string) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (!value) {
        hasError.value = true;
        message.value = `${label || 'Number'} is required`
    } else if (isNaN(Number(value))) {
        hasError.value = true;
        message.value = `${label || 'Number'} cannot contain letters`
    } else if (!number_pattern.test(value)) {
        hasError.value = true;
        message.value = `${label || 'Number'} must be a number`
    } else {
        hasError.value = false;
        message.value = ''
    }

    console.log(`result: ${hasError.value} ${message.value}`)

    return {
        hasError: hasError.value,
        message: message.value
    }
}

export const imageCheck:any = (value:Blob, label?:string) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (value?.size > 5242880) {
        hasError.value = true;
        message.value = `${label || 'Image'} size should be less than 5mb`
    } else {
        hasError.value = false;
        message.value = ''
    }

    console.log(`result: ${hasError.value} ${message.value}`)

    return {
        hasError: hasError.value,
        message: message.value
    }
}

export const urlCheck:any = (type:string = 'url', value:string, label?:string) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (type === 'url') {
        if (!url_pattern.test(value)) {
            hasError.value = true;
            message.value = `${label || 'URL'} must match 'https://domain.com'`
        } else {
            hasError.value = false;
            message.value = ''
        }
    } else if (type === 'twitter') {
        if (!twitter_pattern.test(value)) {
            hasError.value = true;
            message.value = `${label || 'Twitter'} url must match 'https://twitter.com/username'`
        } else {
            hasError.value = false;
            message.value = ''
        }
    } else if (type === 'facebook') {
        if (!facebook_pattern.test(value)) {
            hasError.value = true;
            message.value = `${label || 'Facebook'} url must match 'https://facebook.com/username'`
        } else {
            hasError.value = false;
            message.value = ''
        }
    } else if (type === 'linkedin') {
        if (!linkedin_pattern.test(value)) {
            hasError.value = true;
            message.value = `${label || 'Linkedin'} url must match 'https://linkedin.com/in/username'`
        } else {
            hasError.value = false;
            message.value = ''
        }
    }

    console.log(`result: ${hasError.value} ${message.value}`)

    return {
        hasError: hasError.value,
        message: message.value
    }
}