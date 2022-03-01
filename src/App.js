import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import ContentHeader from "./Component/header-content/header-content";
import ContentTraining from "./Component/content-training-coaching/content-training-coaching";
import About from "./Component/About/About";
import OnlineCourse from "./Component/Online-Course/Online-Course";
import JoinOur from "./Component/Join-Our/Join-Our";
import EntireTeam from "./Component/Entire-Team/Entire-Team";
import SignUp from "./Component/SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ContentHeader />
            <ContentTraining />
            <About />
            <OnlineCourse />
            <JoinOur />
            <EntireTeam />
            <SignUp />
            <Footer />
        </div>
    );
}

export default App;
