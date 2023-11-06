import { GradientText } from 'astro-boilerplate-components';

import { Presenter, Section, Social } from '../components';

const Title = (
  <>
    Hey, Soy <GradientText>Joel Valdivia</GradientText> 👋
  </>
);

const Description = (
  <>
    Un ingeniero de software con {new Date().getFullYear() - 2016}+ años de
    experiencia. Apasionado por crear software de alta calidad con experiencia
    en arquitectura de software, testing, código limpio y buenas prácticas.
  </>
);

const Avatar = (
  <img
    className="h-80 w-64"
    src="/assets/images/avatar.svg"
    alt="Avatar image"
    loading="lazy"
  />
);

const Whoiam = () => (
  <Section>
    <Presenter
      title={Title}
      description={Description}
      avatar={Avatar}
      socialButtons={Social}
    />
  </Section>
);

export { Whoiam };
