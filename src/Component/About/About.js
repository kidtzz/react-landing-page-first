import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="container section-About py-5 mb-5">
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-tittle mb-5">
                        <div className=" text ">
                            <div className="about-tittle mb-3">
                                We are <span>Summit,</span> and we will bring
                                you to the top.
                            </div>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetuer adipis
                                elit. Aenean commodo ligula eget dolor. Aenean
                                massa cum sociis natoque penatibus et .
                            </p>
                            <button className="btn btn-outline-dark">
                                About Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 d-block text-center content-bottom ">
                    <div className="col-lg-12  justify-content-center">
                        <div className="title-number ">
                            <div className="col-lg-3 offset-lg-5 text-center ">
                                <h1>60+</h1>
                                <hr />
                                <p>Online and Offline Course</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex">
                        <div className="col-lg-6">
                            {" "}
                            <div className="col-lg-5 offset-lg-4 text-center">
                                <h1>10</h1>
                                <hr />
                                <p>Expert Coaches On- and Offline</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {" "}
                            <div className="col-lg-6 offset-lg-4 text-center">
                                <h1>1,000+</h1>
                                <hr />
                                <p>Successful Businesses Thanks to Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
