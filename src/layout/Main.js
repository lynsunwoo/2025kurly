import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import product1 from '../data/product1.json';
import product2 from '../data/product2.json';
import product3 from '../data/product3.json';

function Main(props) {
  return (
    <>
      <>
        <section>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="mslide"
          >

            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide01.jpg`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide02.png`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide03.png`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide04.jpg`} alt="" />
            </SwiperSlide>

          </Swiper>
        </section>


        {/* 2. 인기 급상승 상품 목록 */}
        <section className="cont">
          <h3>💝인기 급상승! 연말 필수~56% <i className="fa-solid fa-chevron-right"></i>
          </h3>
          <span>연말 모임 미식 메뉴부터 선물까지</span>

          <div>
            <ul>
              {product1.products01.map(product => (
                <li key={product.id}>
                  <img src={`${process.env.PUBLIC_URL}${product.img}`} alt={product.name} />
                  <p>
                    <span className="product_title">{product.name}</span>
                  </p>
                  <span className="product_price">{product.price.toLocaleString('ko-KR')}원</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. 지금 가장 많이 담는 특가 */}
        <section className="cont">
          <h3>🛒지금 가장 많이 담는 특가 <i className="fa-solid fa-chevron-right"></i></h3>
          <span>꼭 담아야 할 추천 특가템 최대 60% OFF</span>

          <div>
            <ul>
              {product2.products02.map(product => (
                <li key={product.id}>
                  <img src={`${process.env.PUBLIC_URL}${product.img}`} alt={product.name} />
                  <p>
                    <span className="product_title">{product.name}</span>
                  </p>
                  <span className="product_price">{product.price.toLocaleString('ko-KR')}원</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. 2025 리빙 어워즈 특가 */}
        <section className="cont">
          <h3>🏆2025 리빙 어워즈 특가 <i className="fa-solid fa-chevron-right"></i></h3>
          <span>꼭 담아야 할 추천 특가템 최대 60% OFF</span>
          <div>

            <ul>
              {product3.products03.map(product => (
                <li key={product.id}>
                  <img src={`${process.env.PUBLIC_URL}${product.img}`} alt={product.name} />
                  <p>
                    <span className="product_title">{product.name}</span>
                  </p>
                  <span className="product_price">{product.price.toLocaleString('ko-KR')}원</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    </>
  );
}

export default Main;
