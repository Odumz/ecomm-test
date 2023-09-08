import { ref, Ref } from 'vue'

const number_pattern:any = /^[0-9]*$/;
const url_pattern:any = /^(http(s)?:\/\/)?([\w]+\.)([-a-zA-Z0-9]+)\/*/;

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

export const urlCheck:any = (value:string, label?:string) => {
    const hasError:Ref<boolean> = ref(false)
    const message:Ref<string> = ref('')

    if (!url_pattern.test(value)) {
        hasError.value = true;
        message.value = `${label || 'URL'} must match 'https://domain.com'`
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