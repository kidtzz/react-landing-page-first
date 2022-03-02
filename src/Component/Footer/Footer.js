import React from "react";
import "./Footer.scss";

import { Form } from "react-bootstrap";

const Footer = () => {
    return (
        <section className="py-2 footer bg-grey ">
            <div className="container my-5 ">
                <div className="row justify-content-start ">
                    <div className="col-lg-4 col-md-4 col-xl-4  mb-3 mb-lg-0 ">
                        <h3>ARCH-kidtz</h3>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2 mb-3 mb-lg-0  ">
                        <h3 className="mb-4">About us</h3>
                        <p className="text-P">
                            {" "}
                            <a className="" href=" ">
                                {" "}
                                Our Values{" "}
                            </a>
                        </p>
                        <p className="text-P">
                            {" "}
                            <a href=" "> Contact Us</a>
                        </p>
                        <p className="text-P">
                            {" "}
                            <a href=" "> News</a>
                        </p>
                        <p className="text-P">
                            {" "}
                            <a href=" "> References</a>
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2  mb-3 mb-lg-0 ">
                        <h3 className="mb-4 ">Learning</h3>
                        <div className="text-secondary">
                            <p className="text-P">
                                {" "}
                                <a href=" "> Training </a>
                            </p>
                            <p className="text-P">
                                {" "}
                                <a href=" "> eLearning</a>
                            </p>
                            <p className="text-P">
                                {" "}
                                <a href=" "> Design</a>
                            </p>
                            <p className="text-P">
                                {" "}
                                <a href=" "> Sprints</a>
                            </p>
                            <p className="text-P">
                                {" "}
                                <a href=" "> Coaches</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xl-4  mb-3 mb-lg-0 ">
                        <h3 className=" mb-4 ">Subscribe to Our Newsletter</h3>
                        <div className="form-submit d-flex">
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            <button
                                type="submit"
                                class="btn btn-outline-dark mx-3"
                            >
                                Submit
                            </button>
                        </div>
                        <div class="btn" href="#!" role="button">
                            <a href=" ">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </div>
                        <div class="btn  " href="#!" role="button">
                            <a href=" ">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="btn  " href="#!" role="button">
                            <a href=" ">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                </div>
            </div>
            <div class="container copyright text-secondary ">
                <hr />
                <div className="d-flex justify-content-between pt-3 py-5">
                    <div className="d-flex">
                        <p>
                            {" "}
                            <a href=" "> Privacy</a>
                        </p>
                        <p className="px-4">
                            {" "}
                            <a href=" "> Therms of service</a>
                        </p>
                    </div>
                    <div>
                        © 2022 Arch-kidtz. All rights reserved <br />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
