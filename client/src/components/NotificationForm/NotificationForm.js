import React, { useState, useEffect } from 'react';
import { getSupervisors } from '../../utils/getSupervisors';
import { submitData } from '../../utils/submitData';
import '../../styles/notification_form.css';

const NotificationForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        Supervisor: ""
    })
    const [supervisorsData, setSupervisorsData] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        submitData(formData, setFormData, setIsLoading, setError, setResponse);
    }

    useEffect(() =>{
        if (!supervisorsData.length){
            getSupervisors(setSupervisorsData)
        }
    }, [supervisorsData])

    const supervisorsList = () => {
        return (
          <select
            className="notification-form-item-select"
            name="Supervisor"
            onChange={handleChange}
            defaultValue={""}
            required
          >
            <option value="" disabled>
              Select a supervisor...
            </option>
            {supervisorsData.map(
              (supervisor, index) =>
                <option value={`${supervisor.jurisdiction} - ${supervisor.lastName}, ${supervisor.firstName}`} key={index}>
                    {supervisor.jurisdiction} - {supervisor.lastName}, {supervisor.firstName}
                </option>
            )}
          </select>
        );
      };

    return (
        <div className="form-container">
            <form className="notification-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="notification-form-header">
                    <h1>Notification Form</h1>
                </div>
                <div className="notification-form-row">
                    <div className="notification-form-item">
                        <label>First Name</label><br/>
                        <input className="notification-form-item-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required>
                        </input>
                    </div>
                    <div className="notification-form-item">
                        <label>Last Name</label><br/>
                        <input className="notification-form-item-input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required>
                        </input>
                    </div>
                </div>
                <div className="notification-form-row">
                    <div className="notification-form-item">
                        <label>Email Address</label><br/>
                        <input className="notification-form-item-input" type="email" name="email" value={formData.email} onChange={handleChange}>
                        </input>
                    </div>
                    <div className="notification-form-item">
                        <label>Phone</label><br/>
                        <input className="notification-form-item-input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}>
                        </input>
                    </div>
                </div>
                <div className="notification-form-row">
                    <div className="notification-form-item">
                        {supervisorsList()}
                    </div>
                </div>
                <div className="notification-form-row">
                    <div className="notification-form-item">
                        {isLoading ? (
                                <div>Sending...</div>
                            ) : (
                                <button className="notification-form-button" type="submit">Submit</button>
                        )}
                    </div> 
                </div>
                <div className="notification-form-row">
                    <div className="notification-form-message">
                        {error && (
                            <span>{error}</span>
                        )}
                        {response && (
                            <span>{response}</span>
                        )}
                    </div> 
                </div>
            </form>
        </div>
    )
}



export default NotificationForm
