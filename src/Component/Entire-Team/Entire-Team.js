import React from "react";
import "./Entire-Team.scss";
import img1 from "../../img/Entire-Team/01.svg";
import img2 from "../../img/Entire-Team/02.svg";
import img3 from "../../img/Entire-Team/03.svg";
import img4 from "../../img/Entire-Team/04.svg";
import img5 from "../../img/Entire-Team/05.svg";
import img6 from "../../img/Entire-Team/06.svg";

const EntireTeam = () => {
    const ListTeam = [
        {
            img: [img1],
        },
        {
            img: [img2],
        },
        {
            img: [img3],
        },
        {
            img: [img4],
        },
        {
            img: [img5],
        },
        {
            img: [img6],
        },
    ];
    return (
        <div className="container section-entire-team py-5">
            <div className="section-tittle">
                <div className="text-center section-text ">
                    Train Your <span> Entire Team </span>
                </div>
                <div className="text-body text-center">
                    Lorem ipsum dolor, consectetur adipisicing elit, sed do
                    eiusmod.
                </div>
            </div>
            <div className="row container mt-5 ">
                {ListTeam.map((item, index) => {
                    return (
                        <div
                            className="col-lg-2  col-md-2 col-xl-2 mb-lg-0 "
                            key={index}
                        >
                            <img
                                className="img-fluid mx-4"
                                src={item.img}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EntireTeam;
