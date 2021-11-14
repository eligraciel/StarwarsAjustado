import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharact } from "../components/CardCharact";

import "../Main.css";

export const Vehicles = () => {
    const { store } = useContext(Context);
      return (
        <div className="container">
			<div className="row mt-5 pt-5">
				<div className="d-flex flex-wrap container">
					{store.vehicles.map(characts => {
						let images = "https://starwars-visualguide.com/assets/img/starships/" + characts.uid + ".jpg";
                        let descrip = "Some quick example text to build on the card title and make up the bulk of the cards content."
                        let type = "vehicles"
                        return (
                            <div className="col-md-4 py-3" key={characts.uid}>
                                <CardCharact
                                    id={characts.uid}
                                    title={characts.name}
                                    description={descrip}
                                    img={images}
                                    type = {type}
                                />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        );
    };

