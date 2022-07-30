import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import {
  useParams,
} from 'react-router-dom';
import style from './index.scss';
import cates from '@/data/product';

const ProductInfo = () => {
  const { 
    cateId, 
    prodId, 
  } = useParams();
  useStyles(style);
  const cateItem = cates.find(cate => cate.cateId === cateId);
  const prodItem = cateItem?.products?.find(prod => prod.prodId === prodId);
  return (
    <div className={style['product-info']}>
      <div className={style['name']}>{prodItem.prodName}</div>
      <div className={style['main']}>
        <img className={style['pic']} src={prodItem.prodPic} />
        <div className={style['desc']}>
          <div className={style['desc-item']}><b>产品名称：</b>{prodItem.prodName}</div>
          <div className={style['desc-item']}><b>产品分类：</b>{cateItem.cateName}</div>
          <div className={style['desc-item']}><b>产品描述：</b>{prodItem.prodDesc}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
