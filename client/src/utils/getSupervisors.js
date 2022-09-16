import axios from 'axios';

export const getSupervisors = (setSupervisorsList) => {
    axios.get('http://localhost:5000/api/supervisors')
        .then(res => {
            setSupervisorsList(res.data.response);
        })
        .catch(err => {
            console.log(err);
            setSupervisorsList([`Error ${err.response.status} ${err.code}`]);
        })
}