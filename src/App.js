import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContentHeader from "./Components/header-content/header-content";
import ContentTraining from "./Components/content-training-coaching/content-training-coaching";
import About from "./Components/About/About";
import OnlineCourse from "./Components/Online-Course/Online-Course";
import JoinOur from "./Components/Join-Our/Join-Our";
import EntireTeam from "./Components/Entire-Team/Entire-Team";
import SignUp from "./Components/SignUp/SignUp";

class App extends Component {
    state = {
        isOpen: false,
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ContentHeader />} />
                        {/* <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<SignUp />} /> */}
                    </Routes>
                    <ContentTraining />
                    <About />
                    <OnlineCourse />
                    <JoinOur />
                    <EntireTeam />
                    <SignUp />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
