import { GradientText, Presenter, Section, Social } from '@/components';

const Title = (
  <>
    Hey, Soy <GradientText>Juel Valdivia</GradientText> 👋
  </>
);

const Description = (
  <>
    Ingeniero de software desde 2015. Apasionado por crear SaaS escalables para
    automatizar procesos. Exploro ideas como automatización para negocios (e.g.,
    wedding planners). Sígueme en YouTube para mi aventura de construir un
    negocio en línea paso a paso.
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
