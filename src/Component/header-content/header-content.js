import React from "react";
import "./header-content.scss";
import img1 from "../../img/01.svg";
import img2 from "../../img/02.svg";

const ContentHeader = () => {
    return (
        <div className="container header-content  py-5">
            <div className="section-tittle mb-5">
                <div className="text-center text mb-5">
                    <span> Inspiring You</span> to Get the Most Out of Your
                    <span>Business</span>
                </div>
            </div>
            <div className="section-body-content">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-lg-0 col-xl-6 text-center">
                        <img className="img-fluid" src={img1} alt="" />
                        <h3 className="mb-3">Training</h3>
                        <div className="col-lg-10 offset-lg-1">
                            <p className="mb-4 px-5">
                                We offer training services for one person
                                companies and large scale businesses.
                            </p>
                        </div>

                        <div className="btn btn-outline-dark mb-5">Learn More</div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-lg-0 col-xl-6 text-center">
                        <img className="img-fluid" src={img2} alt="" />
                        <h3 className="mb-3">E-learning</h3>
                        <div className="col-lg-8 offset-lg-2">
                            <p className="mb-4 px-5">
                                With our online video courses you can sharpen
                                your skills wherever you are.
                            </p>
                        </div>

                        <div className="btn btn-outline-dark">Learn More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
