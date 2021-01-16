import React from "react";
import Icon1 from "../../images/java.svg";
import Icon2 from "../../images/react.svg";
import Icon3 from "../../images/html.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="portfolio">
      <ServicesH1>PORTFOLIO</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          href="https://github.com/trachuynh2014/Student-Registry-Simulator"
          target="_blank"
        >
          <ServicesIcon src={Icon1} alt="a Java icon" />
          <ServicesH2>Student Registry Simulator</ServicesH2>
          <ServicesP>
            This simple version can maintain a list of registered students in
            the registry and a list of active courses that are currently
            running.
          </ServicesP>
        </ServicesCard>
        <ServicesCard
          href="https://powerful-beach-79248.herokuapp.com/movies"
          target="_blank"
        >
          <ServicesIcon src={Icon2} alt="a React icon" />
          <ServicesH2>Searchable movie React app</ServicesH2>
          <ServicesP>
            A simple video rental app that has full functionalities of
            pagination, sorting, searching, form validation, and routing.
          </ServicesP>
        </ServicesCard>
        <ServicesCard
          href="https://raynorelgie.com/MovieCrunchers/"
          target="_blank"
        >
          <ServicesIcon src={Icon3} alt="a HTML, CSS, and JavaScript icon" />
          <ServicesH2>MovieCrunchers</ServicesH2>
          <ServicesP>
            A group project with a goal of providing platform for reviews,
            discussion, and allowing users to comment and rate on 1150+ movies.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
