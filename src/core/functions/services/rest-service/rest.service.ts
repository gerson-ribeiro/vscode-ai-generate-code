import axios from "axios";

export default function() {
    const get = (url: string) => axios.get(url);
    const post = (url: string, data: any) => axios.post(url, data);
    const put = (url: string, data: any) => axios.put(url, data);
    const del = (url: string) => axios.delete(url);
    
    return {
        get,
        post,
        put,
        del
    }
}