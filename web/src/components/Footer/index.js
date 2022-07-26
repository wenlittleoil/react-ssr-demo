import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { getCls } from '@utils/style';
import style from './index.scss';

const Footer = props => {
  useStyles(style);
  return (
    <div className={getCls(style, "footer")}>
      <div className={getCls(style, "company-name")}>
        <div className={getCls(style, "cn-name")}>中山苏特宝新材料有限公司</div>
        <div className={getCls(style, "en-name")}>Zhongshan Sutebao New Materials Co., LTD</div>
      </div>
      <div className={getCls(style, "contact")}>
        <div className={getCls(style, "contact-item")}>地址：中山市民众镇沙仔工业区结新路8号</div>
        <div className={getCls(style, "contact-item")}>电话：0760-85550918</div>
        <div className={getCls(style, "contact-item")}>传真：0760-85550920</div>
      </div>
      <div className={getCls(style, "qrcode")}>
      </div>
      <div className={getCls(style, "company-logo")}></div>
    </div>
  );
}

export default Footer;
