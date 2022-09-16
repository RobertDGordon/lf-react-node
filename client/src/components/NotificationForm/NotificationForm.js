import React, { useState, useEffect } from "react";
import { getSupervisors } from "../../utils/getSupervisors";
import { submitData } from "../../utils/submitData";
import "../../styles/notification_form.css";

const NotificationForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [response, setResponse] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		Supervisor: "",
	});
	const [supervisorsList, setSupervisorsList] = useState([]);

	const handleChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		submitData(formData, setFormData, setIsLoading, setError, setResponse);
	};

	useEffect(() => {
		if (!supervisorsList.length) {
			getSupervisors(setSupervisorsList);
		}
	}, [supervisorsList]);

	return (
		<div className="form-container">
			<form className="notification-form" onSubmit={(e) => handleSubmit(e)}>
				<div className="notification-form-header">
					<h1>Notification Form</h1>
				</div>
				<div className="notification-form-row">
					<div className="notification-form-item">
						<label>First Name</label>
						<br />
						<input
							className="notification-form-item-input"
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							required
						></input>
					</div>
					<div className="notification-form-item">
						<label>Last Name</label>
						<br />
						<input
							className="notification-form-item-input"
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							required
						></input>
					</div>
				</div>
				<div className="notification-form-row">
					<div className="notification-form-item">
						<label>Email Address</label>
						<br />
						<input
							className="notification-form-item-input"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
						></input>
					</div>
					<div className="notification-form-item">
						<label>Phone</label>
						<br />
						<input
							className="notification-form-item-input"
							type="tel"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
						></input>
					</div>
				</div>
				<div className="notification-form-row">
					<div className="notification-form-item">
                        <select
                            className="notification-form-item-select"
                            name="Supervisor"
                            onChange={handleChange}
                            value={formData.Supervisor}
                            required
                        >
                            <option value="" disabled>
                                Select a supervisor...
                            </option>
                            {supervisorsList.map((supervisor, index) => (
                                <option
                                    value={supervisor}
                                    key={index}
                                >
                                    {supervisor}
                                </option>
                            ))}
                        </select>
                    </div>
				</div>
				<div className="notification-form-row">
					<div className="notification-form-item">
						{isLoading ? (
							<div className="notification-form-sending">Sending...</div>
						) : (
							<button className="notification-form-button" type="submit">
								Submit
							</button>
						)}
					</div>
				</div>
				<div className="notification-form-row">
					<div className="notification-form-message">
						{error && <span>{error}</span>}
						{response && <span>{response}</span>}
					</div>
				</div>
			</form>
		</div>
	);
};

export default NotificationForm;
