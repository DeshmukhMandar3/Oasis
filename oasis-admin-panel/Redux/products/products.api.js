import axios from 'axios'

const BASE_URL = `https://backend-cw-4.onrender.com/amazon`

export async function getDataAPI() {
    const data =  axios.get(BASE_URL+"?_page=1&_limit=10")
    return data;
}