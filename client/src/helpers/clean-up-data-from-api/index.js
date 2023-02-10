export default function cleanUpDataFromApi(data) {
    if (!data) return
    const cleanData = structuredClone(data)
    cleanData.forEach(obj => delete obj.__v)
    return cleanData
}
