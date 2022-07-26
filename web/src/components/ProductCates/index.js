import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import style from './index.scss';

const ProductCates = props => {
  const {
    title = '',
    cates = [],
  } = props;
  useStyles(style);
  return (
    <div className={style['category-products']}>
      <h2 className={style['title']}>{title}</h2>
      <div className={style['cates']}>
        {cates.map(cate => (
          <div key={cate.cateId} className={style['cate-item']}>
            <div className={style['name']}>{cate.cateName}</div>
            <img className={style['pic']} src={cate.catePic} alt="涂料分类概图" />
            <div className={style['desc']}>{cate.cateDesc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCates;
