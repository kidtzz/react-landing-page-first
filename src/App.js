import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import ContentHeader from "./Component/header-content/header-content";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ContentHeader />
            <Footer />
        </div>
    );
}

export default App;
