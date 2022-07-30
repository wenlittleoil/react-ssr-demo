import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useStyles from 'isomorphic-style-loader/useStyles';
import cates from '@/data/product';
import style from './index.scss';

const ProductList = () => {
  const {
    cateId,
  } = useParams();
  const navigate = useNavigate();
  useStyles(style);
  const cateItem = cates.find(cate => cate.cateId === cateId);
  const prods = cateItem?.products || [];
  return (
    <div className={style['product-list-wrap']}>
      <h2 className={style['title']}>{cateItem?.cateName}</h2>
      <div className={style['prods']}>
        {prods.map(prod => (
          <div 
            key={prod.prodId} 
            className={style['prod-item']}
            onClick={() => {
              navigate(`/product/${cateId}/${prod.prodId}`);
            }}
          >
            <img className={style['pic']} src={prod.prodPic} alt="涂料产品品类" />
            <div className={style['name']}>{prod.prodName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
