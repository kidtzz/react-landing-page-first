import React from "react";
import "./header-content.scss";

const ContentHeader = () => {
    return (
        <div className="container header-content border py-5">
            <div className="section-title ">
                <div className="text-center h1">
                    <span> Inspiring You</span> to Get the Most Out of Your
                    <span>Business</span>
                </div>
            </div>
            <div className="section-body-content">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-lg-0 col-xl-6 text-center">
                        <h3 className="mb-3">Training</h3>
                        <p className="mb-3 px-5">
                            We offer training services for one person companies
                            and large scale businesses.
                        </p>
                        <div className="btn btn-outline-dark">Learn More</div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-lg-0 col-xl-6 text-center">
                        <h3 className="mb-3">E-learning</h3>
                        <p className="mb-3 px-5">
                            With our online video courses you can sharpen your
                            skills wherever you are.
                        </p>
                        <div className="btn btn-outline-dark">Learn More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
