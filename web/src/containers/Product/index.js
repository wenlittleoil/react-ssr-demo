import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import style from './index.scss';
import ProductCates from '@components/ProductCates';
import ProductList from '@components/ProductList';
import ProductInfo from '@components/ProductInfo';
import cates from '@/data/product';

export const ProdDetail = props => {
  useStyles(style);
  return (
    <div className={style['prod-detail']}>
      <ProductInfo />
    </div>
  );
}

export const CategoryDetail = props => {
  useStyles(style);
  return (
    <div className={style['category-detail']}>
      <ProductList />
    </div>
  );
}

export const ProductCatory = props => {
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

export default ProductCatory;
