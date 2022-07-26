import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import style from './index.scss';
import ProductCates from '@components/ProductCates';
import cates from '@/data/product';

const Product = props => {
  useStyles(style);
  return (
    <div className={style['product']}>
      <ProductCates 
        title="产品展示"
        cates={cates}
      />
    </div>
  );
}

export default Product;
