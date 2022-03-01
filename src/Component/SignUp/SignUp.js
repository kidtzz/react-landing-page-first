import React from "react";
import "./SignUp.scss";

const SignUp = () => {
    return (
        <div className="container section-signUp py-5">
            <div className="section-tittle">
                <div className="text-center col-lg-10 offset-lg-1 section-text ">
                    Explore Our <span> Training Services</span> or{" "}
                    <span> Sign Up</span> to Start With Our{" "}
                    <span>Online Courses </span>
                </div>
                <div className="section-button row">
                    <div className="col-lg-1 justify-content-center offset-lg-5">
                        <button className="btn btn-outline-dark">
                            Training
                        </button>
                    </div>
                    <div className="col-lg-2   ">
                        <button className="btn btn-outline-dark">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
