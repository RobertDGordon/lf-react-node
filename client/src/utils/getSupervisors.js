import axios from 'axios';

export const getSupervisors = (setSupervisorsData) => {
    axios.get('http://localhost:5000/api/supervisors')
        .then(res => {
            setSupervisorsData(res.data.response);
        })
        .catch(err => {
            console.log(err);
            setSupervisorsData([{
                jurisdiction: "Error",
                lastName: err.code,
                firstName: err.response.status
            }]);
        })
}