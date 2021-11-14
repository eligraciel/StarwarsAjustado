import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharact } from "../components/CardCharact";

import "../Main.css";

export const Characters = () => {
    const { store } = useContext(Context);
    console.log(store)
  

    return (
        <div className="container">
			<div className="row mt-5 pt-5">
				<div className="d-flex flex-wrap container">
					{store.characters.map(characts => {
						let images = "https://starwars-visualguide.com/assets/img/characters/" + characts.uid + ".jpg";
                        let descrip = "Some quick example text to build on the card title and make up the bulk of the cards content."
                        let type = "characters"
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

