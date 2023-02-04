import { BASE_URL } from '../assets'
import { get } from '../lib/functions'

export const getPrintersData = async () => {
    let res = await get({ useBaseURL: BASE_URL, path:'/printers'})
    return res.json()
} 