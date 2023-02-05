import axios from 'axios'

export default function useApi(route) {
    const apiRoute = `http://localhost:3001/${route}`
    let cancelToken = null

    const get = async () => {
        cancelToken = axios.CancelToken.source()       

        try {
            const data = await axios.get(apiRoute, { cancelToken: cancelToken.token })
            cancelToken = null
            return data.data
        } catch (err) {
            if (axios.isCancel(err)) return
            console.log(err)
        }       
    }

    const post = async (obj) => {
        cancelToken = axios.CancelToken.source()

        try {
            await axios.post(apiRoute, obj, { cancelToken: cancelToken.token })
            cancelToken = null
            return true 
        } catch (err) {
            if (!axios.isCancel(err)) console.log(err)
            return false
        }
    }

    const cancelRequest = () => {
        cancelToken?.cancel()
    }

    return { get, post, cancelRequest }
}