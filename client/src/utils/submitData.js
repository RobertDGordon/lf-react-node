import axios from 'axios';

export const submitData = (formData, setFormData, setIsLoading, setError, setResponse) => {
    axios.post(`http://localhost:5000/api/submit`, formData)
        .then(res => {
            setIsLoading(false);
            setError("");
            setResponse("Thank you for your submission!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                Supervisor: ""
            });
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
            setError(err.response.data.message);
        })
}