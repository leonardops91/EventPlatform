import { Route, Routes } from "react-router-dom";
import Event from "./pages/event";
import Home from "./pages/home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/event" element={<Event/>} />
            <Route path="/event/lesson/:slug" element={<Event/>} />
        </Routes>
    )
}