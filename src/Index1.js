import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutSection from './components/AboutSection';
import FeatureSection from './components/FeatureSection';
import ClientSection from './components/ClientSection';
import ContactSection from './components/ContactSection';
import DemoSection from './components/DemoSection'
import Footer from './components/Footer';
import FooterAlt from './components/FooterAlt';


class Index1 extends React.Component {

  componentDidMount() {
        document.getElementById("main_navbar").classList.add("navbar-light");
}

  render() {

    return (
      <React.Fragment>

        {/* preloader */}
        <Preloader />

        {/* Navigation Menu */}
        <Navbar />

        {/* HomeSection Menu */}
        <Home />

        {/* AboutSection Menu */}
        <AboutSection />

        {/* FeatureSection Menu */}
        <FeatureSection />

        {/* ClientSection Menu */}
        <ClientSection />

        {/* ContactSection Menu */}
        <ContactSection />

        {/* Footer Menu */}
        <Footer />

        {/* FooterAlt Menu */}
        <FooterAlt />

      </React.Fragment>

    );
  }
}

export default Index1;