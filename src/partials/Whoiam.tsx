import { GradientText, Presenter, Section, Social } from '@/components';

const Title = (
  <>
    Hey, Soy <GradientText>Juel Valdivia</GradientText> 👋
  </>
);

const Description = (
  <>
    Ingeniero de software con {new Date().getFullYear() - 2016}+ años de
    experiencia. Apasionado por crear software de alta calidad con experiencia
    en arquitectura de software, testing, código limpio y buenas prácticas.
    Tengo este espacio para compartir un poco de mi experiencia, espero te ayude
    en algo.
  </>
);

const Avatar = (
  <img
    className="h-80 w-64"
    src="/assets/images/me.webp"
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
