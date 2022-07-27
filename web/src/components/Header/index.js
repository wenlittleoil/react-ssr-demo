import React from 'react';
import classnames from 'classnames';
import { Link, useLocation, matchPath, } from "react-router-dom";
import useStyles from 'isomorphic-style-loader/useStyles';
import style from './index.scss';
import { getCls } from '@utils/style';

const Header = props => {
  useStyles(style);
  const tabs = [
    {
      title: '首页',
      to: '/',
      activePath: '/',
    },
    {
      title: '关于我们',
      to: '/company',
      activePath: '/company',
    },
    {
      title: '产品展示',
      to: '/product',
      activePath: '/product'
    }
  ];
  const location = useLocation();
  console.log('location', location)
  return (
    <div className={getCls(style, "header")}>
      <div className={getCls(style, "tab-list")}>
        {tabs.map(tab => {
          const routeMatch = matchPath({
            path: tab.activePath,
            exact: false,
            strict: true
          }, location.pathname);
          // console.log('routeMatch:', routeMatch);
          return (
            <Link 
              className={classnames(getCls(style, "tab-item"), {
                [style['active']]: !!routeMatch,
              })} 
              key={tab.to}
              to={tab.to}
            >
              {tab.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
