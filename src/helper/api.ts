import { request } from './axios';

// api helper to fetch data from the backend
export const fetchData = async (url:string) => {
  try {
    console.log('url here', url)
    const response:any = await request(`${url}`);
    console.log('response', response.data)
    return response.data
  } catch (err:any) {
    console.log('error', err)
    return err
  }
}

// api helper to add data to the backend
export const addData = async (url:any, data: any, token?:string) => {
  try {
    const options:{} = {
      method: 'POST',
      Authorization: `Bearer ${token}`,
      data
    }
    const response:any = await request(url, options)
    console.log('response', response)
    // setTimeout(() => {
    //   store.dispatch()
    // })
    console.log('response in here is, ', response)
    const status:number = response.status;
    const res:{} = response.data;
    return {
      status,
      res
    }
  } catch (err:any ) {
    const status:number = err.response?.status
    const message:number = err.response?.data?.message
    return {
      status,
      message
    }
  }
}

// api helper to edit data in the backend
export const editData = async (url: any, data: any) => {
  try {
    const options:{} = {
      method: 'PATCH',
      data
    }
    const response:any = await request(url, options)
    console.log('response', response.data)
    return response.data
  } catch (err:any) {
    console.log('err', err.response)
    return err?.response
  }

}

// api helper to delete data from the backend
export const removeData = async (url: any) => {
  try {
    const options:{} = {
      method: 'DELETE',
    }
    const response:any = await request(url, options)
    console.log('response', response.data)
    return response.data
  } catch (err:any) {
    console.log('err', err.response)
    return err?.response
  }

}