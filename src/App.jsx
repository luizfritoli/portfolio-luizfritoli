import Menu from "./components/menu.jsx";
import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"
import Skillsets from "./components/skillsets.jsx"
import Footer from "./components/footer.jsx"
import "./App.css";

const App = () => {
    return (
        <div className="">
            <Menu />
            <Home />
            <About />
            <Skillsets />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
