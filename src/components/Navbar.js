import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<Link className="nav-link" aria-current="page" to="/">
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/characters">
					Characters
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/planet">
					Planets
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/vehicles">
					Vehicles
				</Link>
			</li>
		</ul>
	);
};

