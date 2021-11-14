import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

import "../Main.css";

export const VehiclesDetail = props => {
	const { store, actions } = useContext(Context);
	const { char_id } = useParams();
	const history = useHistory();
	let index = char_id - 1;

	let images = "https://starwars-visualguide.com/assets/img/starships/" + char_id + ".jpg";

	async function getDetails() {
		try {
			let url = "https://www.swapi.tech/api/starships/" + char_id;
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
			document.querySelector(".model").innerHTML = "MODEL: " + dato.properties.model;
			document.querySelector(".sclass").innerHTML = "STARCHIP CLASS: " + dato.properties.starship_class;
			document.querySelector(".manuf").innerHTML = "MANUFACTURER: " + dato.properties.manufacturer;
			document.querySelector(".cost").innerHTML = "COST IN CREDITS: " + dato.properties.cost_in_credits;
			document.querySelector(".length").innerHTML = "LENGTH: " + dato.properties.length;
			document.querySelector(".passeng").innerHTML = "PASSENGERS: " + dato.properties.passengers;
			document.querySelector(".capacity").innerHTML = "CAPACITY: " + dato.properties.cargo_capacity;
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
						<h1 className="card-title">{store.vehicles[index].name}</h1>
						<h5 className="card-title desc">Descripción</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item model">An item</li>
							<li className="list-group-item sclass">A second item</li>
							<li className="list-group-item manuf">A third item</li>
							<li className="list-group-item cost">A fourth item</li>
							<li className="list-group-item length">And a fifth one</li>
							<li className="list-group-item passeng">An item</li>
							<li className="list-group-item capacity">A second item</li>
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