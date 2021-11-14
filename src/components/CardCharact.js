import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import React, { useState, useEffect, useContext } from "react";
import "../Main.css";

export const CardCharact = ({ title, description, id, img, type }) => {
    const [rojo, setRojo] = useState("white");
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <Link
                            to={`/${type}/${id}/detail`}
                            className="btn btn-primary mt-2">
                            Details
                        </Link>
                    </div>

                    <div>
                        <BsHeart
                            className={rojo}
                            onClick={() => {
                                setRojo("red");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

