import React from 'react';

import { AnimateFadeLeft, Text, TextCenter } from '../styles';

const About = () => {
  return (
    <AnimateFadeLeft>
      <TextCenter>
        <Text>Soy un apasionado del desarrollo de software con experiencia desde 2016.</Text>
        <Text>
          Uso principalmente Javascript(NodeJS), Ruby y Python y desde mi perspectiva, contar con
          una sólida base en arquitectura de software, testing (TDD), clean code y buenas prácticas
          es fundamental para crear software de alta calidad.
        </Text>
        <Text>
          He descubierto que estos conceptos son universales y pueden ser aplicados en cualquier
          lenguaje de programación y tecnología.
        </Text>
        <Text>
          Mi enfoque es crear nuevas funcionalidades, desde la priorización del negocio hasta
          escribir código de calidad. Me apasiona mejorar constantemente el producto y colaborar con
          equipos multidisciplinarios para lograr resultados exitosos.
        </Text>
      </TextCenter>
    </AnimateFadeLeft>
  );
};

export default About;
