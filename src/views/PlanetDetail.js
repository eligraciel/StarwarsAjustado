import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

import "../Main.css";

export const PlanetDetail = props => {
	const { store, actions } = useContext(Context);
	const { char_id } = useParams();
	const history = useHistory();
	let index = char_id - 1;

	let images = "https://starwars-visualguide.com/assets/img/planets/" + char_id + ".jpg";

	async function getDetails() {
		try {
			let url = "https://www.swapi.tech/api/planets/" + char_id;
			let optionsGET = {
				method: "GET"
			};
			const response = await fetch(url, optionsGET);
			const details = await response.json();
			let detail = details.result;

			// Elements ya ha sido procesado
			return detail;
		} catch (error) {
			console.warn("Ha ocurrido un error: ", error);
		}
	}

	async function cargar() {
		try {
			let dato = await getDetails();
			document.querySelector(".diameter").innerHTML = "DIAMETER: " + dato.properties.diameter;
			document.querySelector(".rotation_period").innerHTML =
				"ROTATION PERIOD: " + dato.properties.rotation_period;
			document.querySelector(".orbital_period").innerHTML = "ORBITAL PERIOD: " + dato.properties.orbital_period;
			document.querySelector(".gravity").innerHTML = "GRAVITY: " + dato.properties.gravity;
			document.querySelector(".population").innerHTML = "POPULATION: " + dato.properties.population;
			document.querySelector(".climate").innerHTML = "CLIMATE: " + dato.properties.climate;
			document.querySelector(".terrain").innerHTML = "TERRAIN: " + dato.properties.terrain;
			document.querySelector(".desc").innerHTML = "DESCRIPTION: " + dato.description;
		} catch (error) {
			console.warn("Ha ocurrido un error: ", error);
		}
	}

	useEffect(() => {
		cargar();
	}, []);

	return (
		<div className="card mt-5 pt-3" style={{ "max-with": "540px" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img style={{ margin: "auto" }} src={images} className="img-fluid rounded-start imagen" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h1 className="card-title">{store.planets[index].name}</h1>
						<h5 className="card-title desc">Descripción</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item diameter">An item</li>
							<li className="list-group-item rotation_period">A second item</li>
							<li className="list-group-item orbital_period">A third item</li>
							<li className="list-group-item gravity">A fourth item</li>
							<li className="list-group-item population">And a fifth one</li>
							<li className="list-group-item climate">An item</li>
							<li className="list-group-item terrain">A second item</li>
						</ul>
					</div>
					<button className="btn btn-warning mx-3" onClick={history.goBack}>
						Return
					</button>
				</div>
			</div>
		</div>
	);
};