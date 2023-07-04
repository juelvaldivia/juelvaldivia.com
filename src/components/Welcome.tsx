import { AnimateJump, Avatar, AnimateEaseLinear, AnimateOnce } from '../styles';

const Welcome = () => {
  return (
    <AnimateJump>
      <AnimateOnce>
        <AnimateEaseLinear>
          <Avatar src="/assets/img/juel.webp" alt="Juel"></Avatar>
        </AnimateEaseLinear>
      </AnimateOnce>
    </AnimateJump>
  );
};

export default Welcome;
