import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Action from "./pages/action/Action";
import Task from "./pages/action/tasks/Task"
import Community from "./pages/community/Community"
import "remixicon/fonts/remixicon.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/actions"} element={<Action/>}/>
                <Route path={"/actions/:id"} element={<Task/>}/>
                <Route path={"/community"} element={<Community/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
