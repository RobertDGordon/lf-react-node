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

// export const getSupervisors = async (setSupervisorsList) => {
//     try {
//         const response = await fetch('http://localhost:5000/api/supervisors');
//         if(!response.ok) {
//             console.log('Errrroorrrrrrrr')
//             throw new Error(`Error: ${response.status}`)
//         }
//         let response_data = await response.json()
//         setSupervisorsList(response_data.response)
//     } catch (error) {
//         console.log(error)
//         // setSupervisorsList([`Error ${err.response.status} ${err.code}`]);
//     }
// }