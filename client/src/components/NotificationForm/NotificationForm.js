import React, { useState, useEffect } from "react";
import { getSupervisors } from "../../utils/getSupervisors";
import { submitData } from "../../utils/submitData";
import "../../styles/notification_form.css";

const NotificationForm = () => {
	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState("");
	const [response, setResponse] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
        notifyBy: "",
		Supervisor: "",
	});
    const [checkBoxes, setCheckBoxes] = useState({
        email: false,
        phone: false
    })
	const [supervisorsList, setSupervisorsList] = useState([]);

	const [userInput, setUserInput] = useState("");
	
	//Initialize as an array
	const [filteredList, setFilteredList] = useState(["Search for supervisor above..."]);

	const onSearchChange = (e) => {
		setUserInput(e.target.value);
		let result = supervisorsList.filter((supervisor) => {
			return supervisor.toLowerCase().includes(userInput.toLowerCase())
		});
		setFilteredList(result);
	}

	const handleChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

    const handleChecked = (e) => {
        setFormData({
            ...formData,
            notifyBy: e.target.value
        })
        switch (e.target.value) {
            case "email":
                setCheckBoxes({email: true, phone: false})
                break;
            case "phone":
                setCheckBoxes({email: false, phone: true})
                break;
            default:
                break;
        }
    }

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSending(true);
		submitData(formData, setFormData, setCheckBoxes, setIsSending, setError, setResponse);
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
                            required={checkBoxes.email}
						></input>
					</div>
					<div className="notification-form-item">
						<label>Phone Number</label>
						<br />
						<input
							className="notification-form-item-input"
							type="tel"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
                            required={checkBoxes.phone}
						></input>
					</div>
				</div>
                <div className="notification-form-row">
                    <div className="notification-form-item">
                        Notify me by:
                        <label>
                            <input
                                className="notification-form-item-checkbox"
                                type="checkbox"
                                checked={checkBoxes.email}
                                value="email"
                                onChange={handleChecked}
                            />
                        Email
                        </label>
                        <label>
                            <input
                                className="notification-form-item-checkbox"
                                type="checkbox"
                                checked={checkBoxes.phone}
                                value="phone"
                                onChange={handleChecked}
                            />
                        Phone
                        </label>
                    </div>
                </div>
				<div className="notification-form-row">
					<div className="notification-form-item">
						<label>Search Supervisor</label>
						<br />
						<input
							className="notification-form-item-input"
							type="text"
							name="firstName"
							value={userInput}
							onChange={onSearchChange}
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
                            {/* <option value="" disabled>
                                Select a supervisor...
                            </option> */}
                            {filteredList.map((supervisor, index) => (
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
						{isSending ? (
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
