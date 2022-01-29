import React, { useState } from "react";
import "./ContactList.css";
import {Link} from "react-router-dom";

const ContactList = (props) => {
	const [filter, setFilter] = useState("");
	const [sortValue, setSortValue] = useState("");
    
	const searchHandler = (e) => {
		setFilter(e.target.value);
	};

	const sortHandler = (e) => {
		e.target.value === "0"
			? props.props.sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
			: props.props.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
		
		setSortValue(e.target.value);
	};

	const Contacts = () => (
		<div className="contacts-container">
			{props.props.map(
				(contact, i) =>
					((
						contact.name.first.toLowerCase() +
						" " +
						contact.name.last.toLowerCase()
					).includes(filter.toLowerCase()) ||
						(
							contact.location.state.toLowerCase() +
							"/" +
							contact.location.country.toLowerCase()
						).includes(filter.toLowerCase())) && (
						<Link to={`/page/${contact.login.uuid}`}
                        state={{
                            name: contact.name.first + " " + contact.name.last,
                            age: contact.dob.age,
                            email:contact.email,
                            mobile:contact.cell,
                            phone:contact.phone,
                            street:contact.location.street.number +
                            " " +
                            contact.location.street.name,
                            city:contact.location.city,
                            state:contact.location.state,
                            postCode:contact.location.postcode,
                            country:contact.location.country,
                            img:contact.picture.large,
                        }}
                         key={i}>
							<div className="ContactElement" >
								<img
									className="thumbnail-img"
									src={contact.picture.thumbnail}
									alt="thumbnail-img"
								/>
								<div className="ContactElement-info">
									<div style={{ fontSize: "17px", fontWeight: "600" }}>
										{contact.name.first + " " + contact.name.last}
									</div>
									<div
										style={{
											fontSize: "13px",
											marginTop: "3px",
											fontWeight: "500",
											color: "#fd6c9e",
										}}
									>
										{contact.location.state + " / " + contact.location.country}
									</div>
								</div>
								<img
									className="info-arrow"
									src={require("../Images/contactArrow.png")}
									alt="arrow"
								/>
							</div>
						</Link>
					)
			)}
		</div>
	);

	return (
		<div className="ContactList">
			<div className="search-sort-container">
				<div className="labels">
					<div>Search</div>
					<div>Sort</div>
				</div>
				<div className="input-areas">
					<div className="search-input">
						<input value={filter} onChange={searchHandler} type="text" />
					</div>
					<div className="sort-select">
						<select value={sortValue} onChange={sortHandler}>
							<option defaultValue={true} style={{display: "none"}}>First Name</option>
							<option value="0" > First Name</option>
							<option value="1"> Last Name</option>
						</select>
					</div>
				</div>
			</div>
			<Contacts />
		</div>
	);
};

export default ContactList;
