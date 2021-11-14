import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

import "../Main.css";

export const CharactersDetail = props => {
	const { store, actions } = useContext(Context);
	const { char_id } = useParams();
	const history = useHistory();
	let index = char_id - 1;

	let images = "https://starwars-visualguide.com/assets/img/characters/" + char_id + ".jpg";

	async function getDetails() {
		try {
			let url = "https://www.swapi.tech/api/people/" + char_id;
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
			document.querySelector(".height").innerHTML = "HEIGHT: " + dato.properties.height;
			document.querySelector(".mass").innerHTML = "MASS: " + dato.properties.mass;
			document.querySelector(".hair_color").innerHTML = "HAIR COLOR: " + dato.properties.hair_color;
			document.querySelector(".skin_color").innerHTML = "SKIN COLOR: " + dato.properties.skin_color;
			document.querySelector(".eye_color").innerHTML = "EYE COLOR: " + dato.properties.eye_color;
			document.querySelector(".birth_year").innerHTML = "BIRTH YEAR: " + dato.properties.birth_year;
			document.querySelector(".gender").innerHTML = "GENDER: " + dato.properties.gender;
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
						<h1 className="card-title">{store.characters[index].name}</h1>
						<h5 className="card-title desc">Descripción</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item height">An item</li>
							<li className="list-group-item mass">A second item</li>
							<li className="list-group-item hair_color">A third item</li>
							<li className="list-group-item skin_color">A fourth item</li>
							<li className="list-group-item eye_color">And a fifth one</li>
							<li className="list-group-item birth_year">An item</li>
							<li className="list-group-item gender">A second item</li>
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