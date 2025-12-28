import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faCartShopping,
  faMagnifyingGlass,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <>
      <div className="h_top">
        <div className="t_inner">
          <p>
            지금 가입하고 <strong>최대 1만 5천원 할인 쿠폰</strong> 받아가세요!
          </p>
          <button><FontAwesomeIcon icon={faXmark} /></button>
        </div>
      </div>

      <div className="h_bottom">
        {/* 상단 유저 메뉴 */}
        <div className="user_box">
          <Link to="/signup">회원가입</Link>
          <span>|</span>
          <Link to="/login">로그인</Link>
          <span>|</span>
          <Link to="/cs">고객센터</Link>
        </div>

        <div className="bottom_inner">
          {/* 로고 */}
          <div className="logo_box">
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/images/kurly_logo.svg`} alt='로고' />
              {/* <img src="./images/kurly_logo.svg" alt="로고" /> */}
            </Link>

            <NavLink to="/" className={({ isActive }) => isActive ? 'act' : ''}>마켓컬리</NavLink>
            <span>|</span>
            <NavLink to="/beauty" className={({ isActive }) => isActive ? 'act' : ''}>뷰티컬리</NavLink>
          </div>

          {/* 검색 */}
          <div className="search_box">
            <input type="search" placeholder="검색어를 입력해 주세요" />
            <label>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
            </label>
          </div>

          {/* 아이콘 */}
          <div className="icon_box">
            <Link to="/location">
              <FontAwesomeIcon icon={faLocationDot} />
            </Link>

            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeartRegular} />
            </Link>

            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="nav_wrap">
          <div className="category_btn">
            <FontAwesomeIcon icon={faBars} className="menuBtn" />
            <span>카테고리</span>
          </div>

          <ul className="nav">
            <li><Link to="/best">베스트</Link></li>
            <li><Link to="/sale">세일</Link></li>
            <li><Link to="/fashion">패션</Link></li>
            <li><Link to="/living">리빙</Link></li>
            <li><Link to="/new">신상</Link></li>
            <li><Link to="/event">특가/세일</Link></li>
          </ul>

          <Link to="/delivery" className="delivery_btn">
            <span>샛별하루</span> 배송안내
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
