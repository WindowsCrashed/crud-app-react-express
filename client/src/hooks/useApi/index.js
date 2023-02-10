import { useEffect, useCallback } from 'react'
import axios from 'axios'

export default function useApi(route) {
	const apiRoute = `http://localhost:3001/${route}`
	let cancelToken = null

	const get = useCallback(async () => {
		cancelToken = axios.CancelToken.source()

		try {
			const data = await axios.get(apiRoute, { cancelToken: cancelToken.token })
			cancelToken = null
			return data.data
		} catch (err) {
			if (axios.isCancel(err)) return
			console.log(err)
		}
	}, [])

	const post = useCallback(async obj => {
		cancelToken = axios.CancelToken.source()

		try {
			await axios.post(apiRoute, obj, { cancelToken: cancelToken.token })
			cancelToken = null
			return true
		} catch (err) {
			if (!axios.isCancel(err)) console.log(err)
			return false
		}
	}, [])

	const put = useCallback(async obj => {
		cancelToken = axios.CancelToken.source()

		try {
			await axios.put(apiRoute, obj, { cancelToken: cancelToken.token })
			cancelToken = null
			return true
		} catch (err) {
			if (!axios.isCancel(err)) console.log(err)
			return false
		}
	}, [])

	const del = useCallback(async () => {
		cancelToken = axios.CancelToken.source()

		try {
			await axios.delete(apiRoute, { cancelToken: cancelToken.token })
			cancelToken = null
			return true
		} catch (err) {
			if (!axios.isCancel(err)) console.log(err)
			return false
		}
	}, [])

	const cancelRequest = useCallback(() => {
		cancelToken?.cancel()
	}, [])

	useEffect(() => {
		return () => cancelRequest()
	}, [cancelRequest])

	return { get, post, put, del, cancelRequest }
}
