import React from "react";
import NavbarDemo from "./components/NavbarDemo";
import DemoSection from "./components/DemoSection";
import Footer from "./components/Footer";
import FooterAlt from "./components/FooterAlt";

class DemoPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavbarDemo />
        <DemoSection />
        <Footer />
        <FooterAlt />
      </React.Fragment>
    );
  }
}

export default DemoPage;
