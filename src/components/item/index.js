import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import numberFormat from '../../utils/number-format';
import './style.css';

function Item({ item, onAdd, langPack }) {
  const cn = bem('Item');

  const callbacks = {
    onAdd: useCallback((e) => onAdd(item._id), [onAdd, item])
  };

  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <Link to={`card/${item._id}`}>{item.title}</Link>
      </div>
      <div className={cn('right')}>
        <div className={cn('price')}>
          {numberFormat(item.price)} {langPack.currencySymbol}
        </div>
        <button onClick={callbacks.onAdd}>{langPack.addButton}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func,
  langPack: propTypes.object.isRequired
};

Item.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Item);
