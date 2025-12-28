import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '.././css/Login.css'; //로그인 서식

function Login(props) {
  //1. 사용자가 입력한 아이디 상태 변수값
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  //2. 함수 만들기
  const idChange = (e) => {
    setId(e.target.value); //상태값을 변수값에 담는다.
  }
  const pwChange = (e) => {
    setPw(e.target.value);
  }
  //3. 전송버튼 클릭시 실행하는 함수 데이터 유효성 검사하기
  const dataSubmit = (e) => {
    e.preventDefault();

    //1. 아이디 체크
    if (id.trim() === '') {
      alert('아이디를 입력해주세요.');
      return;
    }

    //2. 비밀번호 체크
    if (pw.trim() === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    //3. 비밀번호 길이 체크
    if (pw.length < 6) {
      alert('비밀번호는 6자 이상 입력해주세요');
      return;
    }

    //모든 검사 통과
    alert('로그인 성공');
    console.log({ id, pw });
  }

  return (
    <>
      <section className='login_page'>
        <form onSubmit={dataSubmit}>
          <fieldset>
            <legend>로그인</legend>
            <label for="id" className="visually-hidden">아이디</label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              placeholder="아이디를 입력해 주세요"
              onChange={idChange}
            />

            <label for="pw" className="visually-hidden">패스워드</label>
            <input
              type="password"
              id="pw"
              name="pw"
              value={pw}
              placeholder="비밀번호를 입력해 주세요"
              onChange={pwChange}
            />

            <div className="find_link">
              <Link to='/find_id'>아이디 찾기</Link>
              <span>|</span>
              <Link to='/find_pw'>비밀번호 찾기</Link>
            </div>

            <div className='btn_group'>
              <button type="submit" onClick={dataSubmit}>로그인</button>
              <button type="button">회원가입</button>
            </div>
          </fieldset>

        </form>
      </section>
    </>
  );
}

export default Login;
