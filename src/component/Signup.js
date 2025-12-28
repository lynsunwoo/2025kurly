import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '.././css/Signup.css';

function Signup(props) {

  const dataSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 제출');

  }
  return (
    <>
      <section className='signup_page'>
        <form onSubmit={dataSubmit}>
          <fieldset className='form_inner'>
            <legend>회원가입</legend>

            <hr style={{ border: '1px solid #333' }} />
            <div className='input_row'>
              <label htmlFor="id">아이디</label>
              <input type='text' name='id' id='id' placeholder='아이디를 입력해주세요' />
            </div>

            <div className='input_row'>
              <label htmlFor="pw">비밀번호</label>
              <input type='text' name='pw' id='pw' placeholder='비밀번호를 입력해주세요' />
            </div>

            <div className='input_row'>
              <label htmlFor="pw2">비밀번호확인</label>
              <input type='text' name='pw2' id='pw2' placeholder='비밀번호를 한번 더 입력해주세요' />
            </div>

            <div className='input_row'>
              <label htmlFor="name">이름</label>
              <input type='text' name='name' id='name' placeholder='이름을 입력해주세요' />
            </div>

            <div className='input_row'>
              <label htmlFor="email">이메일</label>
              <input type='email' name='email' id='email' placeholder='예: marketkurly' />
            </div>

            <div className='input_row'>
              <label htmlFor="phone">휴대폰</label>
              <input type='text' name='phone' id='phone' placeholder='숫자만 입력해주세요.' />
            </div>

            <div className='input_row'>
              <label htmlFor="address">주소</label>
              <input type="text" name="address" id="address" />
            </div>

            <div className='input_row'>
              <label className='row_label'>성별</label>

              <div className='gender_box'>
                <label className='radio_item'>
                  <input type='radio' value='남자' name='gender' id='' />
                  <span className='radio_button'></span>
                  남자
                </label>

                <label className='radio_item'>
                  <input type='radio' value='여자' name='gender' id='' />
                  <span className='radio_button'></span>
                  여자
                </label>

                <label className='radio_item'>
                  <input type='radio' value='선택안함' name='gender' id='' />
                  <span className='radio_button'></span>
                  선택안함
                </label>
              </div>
            </div>

            <div className='input_row'>
              <label htmlFor='birth'>생년월일</label>
              <input type='text' id='birth' name='birth' placeholder='YYYY / MM / DD' />
            </div>
          </fieldset>

          <hr style={{ border: '1px solid #ccc', margin: '20px 0px' }} />

          {/* 이용약관 동의 박스 */}
          <div className='agree_box'>
            <label>이용약관 동의</label>

            <div className='agree_inner'>
              {/* 전체 동의 */}
              <div className="agree_all">
                <label className='check_item all'>
                  <input type="checkbox" />
                  <span className='check_button'></span>
                  <div classNaem="text_box">
                    <span>전체 동의합니다.</span>
                    <p>
                      선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
                    </p>
                  </div>
                </label>
              </div>

              {/* 개별항목 */}
              <ul className="agree_list">
                <li>
                  <label className='check_item'>
                    <input type="checkbox" />
                    <span className="check_button"></span>
                    이용약관 동의 <span className="required">(필수)</span>
                    <button type="button" className="btn_view">약관보기 &gt;</button>
                  </label>
                </li>

                <li>
                  <label className="check_item">
                    <input type="checkbox" />
                    <span className="check_button"></span>
                    개인정보 수집·이용 동의<span className="required">(필수)</span>
                    <button type="button" className="btn_view">약관보기 &gt;</button>
                  </label>
                </li>

                <li>
                  <label className="check_item">
                    <input type="checkbox" />
                    <span className="check_button"></span>
                    마케팅 광고 활용을 위한 수집 및 이용 동의<span className="optional">(선택)</span>
                    <button type="button" className="btn_view">약관보기 &gt;</button>
                  </label>
                </li>

                <li className='sub'>
                  <label className="check_item">
                    <input type="checkbox" />
                    <span className="check_button"></span>
                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span className="optional">(선택)</span>
                    <button type="button" className="btn_view">약관보기 &gt;</button>
                  </label>

                  <div className="sub_check">
                    <label className="check_item">
                      <input type="checkbox" />
                      <span className='check_button'></span>
                      SMS
                    </label>

                    <label className="check_item">
                      <input type='checkbox' />
                      <span className="check_button"></span>
                      이메일
                    </label>
                  </div>
                </li>

                <li>
                  <label className='check_item'>
                    <input type='checkbox' />
                    <span className="check_button"></span>
                    본인은 만 14세 이상입니다. <span className="required">(필수)</span>
                  </label>
                </li>
              </ul>
            </div>

          </div>

          {/* 가입버튼 */}
          <div className='submit_btn'>
            <button type='submit'>가입하기</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
