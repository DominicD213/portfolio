import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/theme';
import Project from './sections/projects/project';
import FloatingNav from './sections/floating-nav/FloatingNav';
import { useThemeContext } from './context/theme-context';
import React from 'react'

const App = () => {
  const {themeState} = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar/>
        <Header/>
        <About/>
        <Project/>
        <Services/>
        <FAQs/>
        <Contact/>
        <Footer/>
        <Theme/>
        <FloatingNav/> 
    </main>
  )
}

export default App