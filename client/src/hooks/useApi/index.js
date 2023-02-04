import axios from 'axios'

export default function useApi(route) {
    const apiRoute = 'http://localhost:3001'
    let cancelToken = null

    const get = async () => {
        cancelToken = axios.CancelToken.source()       
        
        try {
            const data = await axios.get(`${apiRoute}/${route}`, { cancelToken: cancelToken.token })
            cancelToken = null
            return data.data
        } catch (err) {
            if (axios.isCancel(err)) return
            console.log(err)
        }       
    }

    const cancelRequest = () => {
        cancelToken?.cancel()
    }

    return { get, cancelRequest }
}