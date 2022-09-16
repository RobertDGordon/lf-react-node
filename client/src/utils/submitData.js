import axios from 'axios';

export const submitData = (formData, setFormData, setCheckBoxes, setIsSending, setError, setResponse) => {
    axios.post(`http://localhost:5000/api/submit`, formData)
        .then(res => {
            setIsSending(false);
            setError("");
            setResponse("Thank you for your submission!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                notifyBy: "",
                Supervisor: ""
            });
            setCheckBoxes({email: false, phone: false})
        })
        .catch(err => {
            console.log(err);
            setIsSending(false);
            setResponse("");
            setError(err.response.data.message);
        })
}