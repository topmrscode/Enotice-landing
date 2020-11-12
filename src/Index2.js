import React from 'react';
import Preloader from './components/Preloader';
import NavbarDemo from './components/NavbarDemo';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import FooterAlt from './components/FooterAlt';


class Index2 extends React.Component {

  render() {

    return (
      <React.Fragment>
      
        {/* Navigation Menu */}
        
        <NavbarDemo />

        {/* DemoSection Menu */}
        <DemoSection />

        {/* Footer Menu */}
        <Footer />

        {/* FooterAlt Menu */}
        <FooterAlt />

      </React.Fragment>

    );
  }
}

export default Index2;