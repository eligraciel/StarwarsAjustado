import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./views/Home";
import { Characters } from "./views/Characters";
import { CharactersDetail } from "./views/CharactersDetail";
import { Planet } from "./views/Planet";
import { PlanetDetail } from "./views/PlanetDetail";
import { Vehicles } from "./views/Vehicles";
import { VehiclesDetail } from "./views/VehiclesDetail";
import { NotFound } from "./views/NotFound";

import injectContext from "./store/appContext";

import { Navbar } from "./components/Navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/characters/:char_id/detail">
							<CharactersDetail />
						</Route>
						<Route exact path="/planet">
							<Planet />
						</Route>
						<Route exact path="/planet/:char_id/detail">
							<PlanetDetail />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/vehicles/:char_id/detail">
							<VehiclesDetail />
						</Route>
						<Route exact path="/NotFound">
                            <NotFound />
						</Route>
					</Switch>
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);