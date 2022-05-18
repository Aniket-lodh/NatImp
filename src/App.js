import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Action from "./pages/action/Action";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = {"/"} element = {<Home />} />
                <Route path={"/actions"} element={<Action/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
