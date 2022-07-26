import React from "react";
import withStyles from 'isomorphic-style-loader/withStyles';
import useStyles from 'isomorphic-style-loader/useStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './Layout.scss';
import normalizeStyle from '@styles/normalize.scss';
import { getCls } from '@utils/style';

const Layout = (props) => {
  const {
    children
  } = props;
  // useStyles(style);
  return (
    <div className={getCls(style, 'layout-wrapper')}>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(style, normalizeStyle)(Layout);

// export default Layout;
