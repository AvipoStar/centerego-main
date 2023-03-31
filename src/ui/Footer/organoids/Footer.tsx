import { useLocation } from "react-router-dom";
import { FooterAbout } from "../molecules/About";
import { FooterContact } from "../molecules/Contact";
import { FooterLogo } from "../molecules/Logo";
import "../styles/Footer.css";

interface IFooter{
  contactsRef: any;
}
export const Footer = (params: IFooter) => {
  let location = useLocation();
  return (
    <div
      ref={params.contactsRef}
      style={
        location.pathname == "/Registration" || location.pathname == "/Login"
          ? { background: "transparent" }
          : {}
      }
      className="Footer"
    >
      <div
        style={
          location.pathname == "/Registration" || location.pathname == "/Login"
            ? { display: "none" }
            : {}
        }
        className="Footer__Active"
      >
        <FooterLogo />
        <FooterAbout />
        <FooterContact />
      </div>
    </div>
  );
};
