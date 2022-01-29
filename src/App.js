import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [contacts, setContacts] = useState([]);
	const fetchContacts = async () => {
		try {
			const res = await fetch(
				"https://randomuser.me/api/?results=50&amp;nat=gb"
			);
			const data = await res.json();

			setContacts(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<div className="App">
			{contacts.length !== 0 && (
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<ContactList props={contacts} />} />
            			<Route path="/page/:id" element={<ContactDetail />} />
					</Routes>
				</Router>
			)}
		</div>
	);
}

export default App;
