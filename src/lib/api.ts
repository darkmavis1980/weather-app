import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

export const fetcher = <T>(url: string) => api.get<T>(url).then(({data}) => data);