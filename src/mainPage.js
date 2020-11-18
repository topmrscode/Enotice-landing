import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import ClientSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FooterAlt from "./components/FooterAlt";

class MainPage extends React.Component {
  componentDidMount() {
    document.getElementById("main_navbar").classList.add("navbar-light");
  }

  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Navbar />
        <Home />
        <AboutSection />
        <FeatureSection />
        <ClientSection />
        <ContactSection />
        <Footer />
        <FooterAlt />
      </React.Fragment>
    );
  }
}

export default MainPage;
