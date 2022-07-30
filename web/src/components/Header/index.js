import React from 'react';
import classnames from 'classnames';
import { 
  Link, 
  useLocation, 
  matchPath,
} from "react-router-dom";
import useStyles from 'isomorphic-style-loader/useStyles';
import style from './index.scss';
import { getCls } from '@utils/style';

const Header = () => {
  useStyles(style);
  const {
    pathname,
  } = useLocation();
  const tabs = [
    {
      title: '首页',
      to: '/',
      activePathPattern: '/',
    },
    {
      title: '关于我们',
      to: '/company',
      activePathPattern: '/company',
    },
    {
      title: '产品展示',
      to: '/product',
      activePathPattern: '/product/*'
    }
  ];
  return (
    <div className={getCls(style, "header")}>
      <div className={getCls(style, "tab-list")}>
        {tabs.map(tab => {
          const routeMatch = matchPath({
            path: tab.activePathPattern,
            exact: true,
          }, pathname);
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
