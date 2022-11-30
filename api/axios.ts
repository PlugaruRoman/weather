import $axios from 'axios';

export const axios = $axios.create();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API;
