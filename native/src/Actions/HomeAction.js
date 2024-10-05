import { ApiRequest } from "../WebServices";

export const fetchHome= async()=>
{
    try {
        let res = await ApiRequest('/simple',{},'GET');

        return {
          status: true,
          data: res
        }
    } catch (error) {
        return {
          status: false,
          error: error,
        };
    }
}

export const postHome =async(data)=>
{
    let body = data;
    try {
        let res = await ApiRequest('/',{},'POST',body);

        return {
          status: true,
          data: res
        }
    } catch (error) {
        return {
          status: false,
          error: error,
        };
    }
}