import React from "react";
import { useLocation } from "react-router-dom";
import "./ContactDetail.css";

const ContactDetail = (props) => {
	const location = useLocation();
	const contact = location.state;

	return (
		<div className="ContactDetail">
			<div className="contact-img-container">
				<img src={contact.img} alt="contact" />
				<div className="contact-name">{contact.name}</div>
			</div>
			<div className="details-container">
				<div className="detail-container">
					<div className="details-label">Age</div>
					<div className="details-data">{contact.age}</div>
				</div>
				<div className="detail-container">
					<div className="details-label">Email</div>
					<div className="details-data">{contact.email}</div>
				</div>
				<div className="detail-container">
					<div className="details-label">Mobile</div>
					<div className="details-data">{contact.mobile}</div>
				</div>
				<div className="detail-container">
					<div className="details-label">Phone</div>
					<div className="details-data">{contact.phone}</div>
				</div>
				<div className="detail-container" style={{marginTop:"30px"}}>
					<div className="details-label">Address</div>
					<div className="details-data">
						<div>{contact.street}</div> 
                        <div> {contact.city} </div> 
                        <div>{contact.state}</div>
						<div>{contact.postCode + " " + contact.country}</div>
					</div>
				</div>
			</div>
            <div className="footer">
                <div className="footer-element">CALL</div>
                <div className="footer-element">EMAIL</div>
            </div>
		</div>
	);
};

export default ContactDetail;
