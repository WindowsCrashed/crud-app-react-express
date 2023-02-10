export default function handleSubmit(func) {
    const handleSubmit = event => {
        event.preventDefault()
        func()
    }
    
    return handleSubmit
}