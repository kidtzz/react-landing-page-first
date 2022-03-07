import React from "react";
import "./Join-Our.scss";
import img1 from "../../img/joinour.svg";

const JoinOur = () => {
    return (
        <div className="container section-Join-Our py-5">
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="col-lg-6 align-items-center">
                    <div className="section-tittle mb-5 mt-5">
                        <div className=" section-text mb-2">
                            Join Our Next Webinar
                        </div>
                        <div className="text-body mb-3">
                            August 27, 2 PM EST — Lorem ipsum dolor sit amet,
                            con setetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque penati.
                        </div>
                        <button className="btn btn-outline-dark">
                            Registrasi Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinOur;
