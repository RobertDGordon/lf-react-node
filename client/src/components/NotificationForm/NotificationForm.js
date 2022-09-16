import React, { useState } from 'react';
import '../../styles/notification_form.css';

const NotificationForm = () => {

    const [isLoading, SetIsLoading] = useState(false);
    const [error, SetError] = useState("");
    const [response, SetResponse] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        Supervisor: ""
    })

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // authenticateUser(login, updateState, () => props.history.push('/dashboard/overview'));
    }

    return (
        <div className="form-container">
            <form className="notification-form">
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
