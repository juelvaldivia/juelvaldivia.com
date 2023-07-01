import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
  text-align: center;
  height: 100%;
`;
const AboutBio = styled.p`
  color: #e7e7e5;
  font-size: 0.8em;
  font-weight: 300;
  padding: 0px 30px 0px 30px;
  text-indent: 15px;
  text-align: center;
`;
const AboutDesc = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const About = () => {
  return (
    <AboutStyle>
      <AboutDesc>
        <AboutBio>
          Soy un apasionado del desarrollo de software con experiencia desde 2016.
        </AboutBio>
        <AboutBio>
          Uso principalmente Javascript(NodeJS), Ruby y Python y desde mi perspectiva, contar con
          una sólida base en arquitectura de software, testing (TDD), clean code y buenas prácticas
          es fundamental para crear software de alta calidad.
        </AboutBio>
        <AboutBio>
          He descubierto que estos conceptos son universales y pueden ser aplicados en cualquier
          lenguaje de programación y tecnología.
        </AboutBio>
        <AboutBio>
          Mi enfoque es crear nuevas funcionalidades, desde la priorización del negocio hasta
          escribir código de calidad. Me apasiona mejorar constantemente el producto y colaborar con
          equipos multidisciplinarios para lograr resultados exitosos.
        </AboutBio>
      </AboutDesc>
    </AboutStyle>
  );
};

export default About;
