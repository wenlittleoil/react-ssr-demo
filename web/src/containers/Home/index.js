
import React, {
  useState,
  useEffect,
} from 'react';
import { Link } from "react-router-dom";
import { 
  connect,
  useSelector, 
  useDispatch,
} from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { getCls } from '@utils/style';
import style from './index.scss';
import styleNative from './index.native.scss';
import cates from '@/data/product';

// 当前webpack环境不支持swiper第三方css方案
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import banner1 from './imgs/banner01.jpeg';
import banner2 from './imgs/banner02.jpeg';
import banner3 from './imgs/banner03.jpeg';
import ProductCates from '@components/ProductCates';

const swiperList = [
  {
    src: banner1,
    key: '1',
  },
  {
    src: banner2,
    key: '2',
  },
  {
    src: banner3,
    key: '3',
  },
];



const Home = props => {

  const globalNum = useSelector((state) => state.num);
  const dispatch = useDispatch();
  return (
    <div className={getCls(style, 'home-wrapper')}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperList.map(item => (
          <SwiperSlide key={item.key}>
            <img 
              src={item.src} 
              className="swiper-item-pic"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProductCates 
        title="产品与解决方案亮点"
        cates={cates}
      />
    </div>
  );
}

// const mapStateToProps = state => ({
//   num: state.num.value
// })
// export default connect(mapStateToProps)(Home);

export default withStyles(style, styleNative)(Home);
