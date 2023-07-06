import React from 'react';

import { AnimateFadeLeft, Text, TextCenter } from '../styles';

const About = () => {
  return (
    <AnimateFadeLeft>
      <TextCenter>
        <Text>Soy un apasionado del desarrollo de software desde 2016.</Text>
        <Text>
          Uso principalmente JavaScript (Node.js), Ruby y Python y desde mi perspectiva, una sólida
          base en arquitectura de software, testing (TDD), código limpio y buenas prácticas es
          fundamental para crear software de alta calidad.
        </Text>
        <Text>
          He descubierto que estos conceptos se pueden ser aplicados en cualquier lenguaje
          programación.
        </Text>
        <Text>
          Me apasiona mejorar constantemente el producto y colaborar con equipos multidisciplinarios
          para lograr resultados exitosos.
        </Text>
        <Text>
          Mi enfoque es crear nuevas funcionalidades, desde la priorización del negocio hasta
          escribir código de calidad.
        </Text>
      </TextCenter>
    </AnimateFadeLeft>
  );
};

export default About;
