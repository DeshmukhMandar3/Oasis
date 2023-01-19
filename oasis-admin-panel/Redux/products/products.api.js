import axios from 'axios'

const BASE_URL = `https://backend-cw-4.onrender.com/Products`

export async function getDataAPI({page, limit, pid, name, category}) {
    const config = {
        method: 'get',
        url: BASE_URL,
        params: {
            _page: page,
            _limit: limit,
            pid,
            product_name_like: name,
            product_category_tree_like: category
        }
    }
    const data =  axios(config)
    return data;
}