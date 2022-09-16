import axios from 'axios';

export const getSupervisors = (setSupervisorsData) => {
    axios.get('http://localhost:5000/api/supervisors')
        .then(res => {
            console.log(res)
            setSupervisorsData(res.data.response)
        })
        .catch(err => {
            console.log(err)
        })
}