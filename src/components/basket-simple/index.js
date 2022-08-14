import React from 'react';
import propTypes from 'prop-types';
import plural from 'plural-ru';
import { cn as bem } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import numberFormat from '../../utils/number-format';
import './style.css';


function BasketSimple({ onOpen, sum, amount }) {
  const cn = bem('BasketSimple');

  return (
    <div className={cn()}>
      <Link to="/">Главная</Link>
      <span className={cn('label')}>В корзине:</span>
      <span className={cn('total')}>
      {amount
        ? `${amount} ${plural(amount, 'товар', 'товара', 'товаров')} / ${numberFormat(sum)} ₽`
        : `пусто`
      }
      </span>
      <button onClick={onOpen}>Перейти</button>
    </div>
  );
}

BasketSimple.propTypes = {
  onOpen: propTypes.func.isRequired,
  sum: propTypes.number,
  amount: propTypes.number
};

BasketSimple.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
};

export default React.memo(BasketSimple);
