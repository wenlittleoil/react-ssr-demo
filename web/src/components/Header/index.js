import React from 'react';
import { Link } from "react-router-dom";
import useStyles from 'isomorphic-style-loader/useStyles';
import style from './index.scss';
import { getCls } from '@utils/style';

const Header = props => {
  useStyles(style);
  const tabs = [
    {
      title: '首页',
      to: '/',
    },
    {
      title: '关于我们',
      to: '/company',
    },
    {
      title: '产品展示',
      to: '/product',
    }
  ];
  return (
    <div className={getCls(style, "header")}>
      <div className={getCls(style, "tab-list")}>
        {tabs.map(tab => (
          <Link className={getCls(style, "tab-item")} key={tab.to} to={tab.to}>
            {tab.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
