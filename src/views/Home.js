import React from "react";

import "../Main.css";

export const Home = () => {
	return (
		<>
			<div className="row franja mt-2">
				<img
					style={{ height: "170px", width: "300px", margin: "auto" }}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
				/>
			</div>
			<div className="container">
				<div className="d-flex flex-wrap container mt-3">
					<div className="card d-flex" style={{ width: "16rem" }}>
						<img
							style={{ margin: "auto" }}
							src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
							className="card-img-top text-center"
							alt="..."
						/>
					</div>
					<div className="card d-flex" style={{ width: "16rem" }}>
						<img
							style={{ margin: "auto" }}
							src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
							className="card-img-top text-center"
							alt="..."
						/>
					</div>
					<div className="card d-flex" style={{ width: "16rem" }}>
						<img
							style={{ margin: "auto" }}
							src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
							className="card-img-top text-center"
							alt="..."
						/>
					</div>
					<div className="card d-flex" style={{ width: "16rem" }}>
						<img
							style={{ margin: "auto" }}
							src="https://starwars-visualguide.com/assets/img/characters/5.jpg"
							className="card-img-top aling-items-center"
							alt="..."
						/>
					</div>
				</div>
			</div>
			<div className="alert alert-info mt-5 mx-5" role="alert">
				Artículos pendientes por leer!!
			</div>
		</>
	);
};
