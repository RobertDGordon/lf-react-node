import axios from 'axios';

export const submitData = (formData, setIsLoading, setError, setResponse) => {
    axios.post(`http://localhost:5000/api/submit`, formData)
        .then(res => {
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            setError(err.response.data.message)
        })
}