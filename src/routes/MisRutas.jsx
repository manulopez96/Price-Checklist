import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Error } from "../components/Error";

export const MisRutas = () => {
    return (
        <BrowserRouter>
            <Header></Header>

            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/inicio" element={<Main></Main>}></Route>
                <Route path="*" element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
