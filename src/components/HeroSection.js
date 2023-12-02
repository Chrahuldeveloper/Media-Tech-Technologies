import React, { useRef } from "react";
import {
  AboutSection,
  Banner,
  Highlights,
  ServicesSection,
  TestimonialSection,
  WorkSection,
  Footer,
  CommercialWorkSection,
} from "./index";
export default function HeroSection() {
  const Serviceref = useRef();
  const Worksref = useRef();
  const Aboutref = useRef();
  const Contactref = useRef();

  const Scrolltoref = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Banner
        Scrolltoref={() => {
          Scrolltoref(Serviceref);
        }}
        scrolltoWorks={() => {
          Scrolltoref(Worksref);
        }}
        scrolltoAbout={() => {
          Scrolltoref(Aboutref);
        }}
        scrolltoContact={() => {
          Scrolltoref(Contactref);
        }}
      />
      <Highlights />
      <ServicesSection Serviceref={Serviceref} />
      <WorkSection Worksref={Worksref} />
      <CommercialWorkSection  />
      <AboutSection Aboutref={Aboutref} />
      <TestimonialSection />
      <Footer Contactref={Contactref} />
    </>
  );
}
