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

// export const submitData = async (formData, setFormData, setCheckBoxes, setIsSending, setError, setResponse) => {
//     try {
//         const response = await fetch(`http://localhost:5000/api/submit`,{
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });
//         if(!response.ok) {
//             let response_data = await response.json()
//             console.log(response_data.message)
//             setError(response_data.message)
//             throw new Error(`${response.status} - submitData - ${response_data.message}`)
//         }
//         setIsSending(false);
//         setError("");
//         setResponse("Thank you for your submission!");
//         setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             phoneNumber: "",
//             notifyBy: "",
//             Supervisor: ""
//         });
//         setCheckBoxes({email: false, phone: false})
//     } catch (error) {
//         console.log(error)
//         setIsSending(false);
//         setResponse("");
//     }
// }