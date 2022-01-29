import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    function changeNavbar() {
			if (window.location.pathname === "/") {
				return (
					<div className="Navbar">
						<img src={require("../Images/people.png")} alt="peopleIcon" />
						<div className="heading"> My Contacts</div>
					</div>
				);
			} else {
				return (
					<div className="Navbar">
						<Link to="/">
							<img
								style={{ width: "25px" }}
								src={require("../Images/navbarArrow.png")}
								alt="peopleIcon"
							/>
						</Link>
						<div className="heading"> Contact</div>
					</div>
				);
			}
		}

        const location = useLocation();

        useEffect(() => {
            changeNavbar();
        },[location])

	return (
		<div >
			{changeNavbar()}
		</div>
	);
};

export default Navbar;
