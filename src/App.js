import React from "react"
import ButtonBar from "./components/Button-bar"
import Main from "./components/Main"
import BodyText from "./components/Body-text"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Main />
            <ButtonBar />
            <BodyText />
            <Footer />
        </div>
    )
}


