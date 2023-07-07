import React from 'react';
import { AnimateJumpIn, Link, Text } from '../styles';
import { Buymeacoffee as BuymeacoffeeIcon } from './Icons';

const BuyMeACoffee: React.FC = () => {
  return (
    <AnimateJumpIn>
      <Text>
        <Link
          href={'https://www.buymeacoffee.com/juelvaldivia'}
          target="_blank"
          style={{ color: '#d0a022' }}
        >
          {BuymeacoffeeIcon}
          {'¿Me invitas una cerveza? '}
          {BuymeacoffeeIcon}
        </Link>
      </Text>
    </AnimateJumpIn>
  );
};

export default BuyMeACoffee;
