import React from 'react'
import Nav from './components/Nav/Nav' 
import Home from './components/Home/Home'
import About from './components/About/About'
import CertificateSection from "./components/Certificates/CertificateSection";
import Projects from './components/Projects/Projects'
import Contact from './components/Contacts/Contact'

function App() {
    return (
    <>
    <Nav />
    <Home/>
    <About/>
    <Projects/>
    <CertificateSection/>
    <Contact/>

    </>
    )
}

export default App

