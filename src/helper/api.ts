import { request } from './axios';

// api helper to fetch data from the backend
export const fetchData = async (url:string) => {
  try {
    const response:any = await request(`${url}`);
    return response
  } catch (err:any) {
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
    const response:any = await request(url, options);
    const status:number = response.status;
    const res:{} = response;
    return {
      status,
      res
    }
  } catch (err:any ) {
    const status:number = err.response?.status
    const message:number = err.response
    return {
      status,
      message
    }
  }
}