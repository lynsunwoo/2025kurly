import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css'; //서식 css
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Login from './component/Login';
import Map from './component/Map';
import NotFound from './component/NotFound';
import Signup from './component/Signup';


function App() {
  return (
    <BrowserRouter> {/* html문서에서 브라우저 주소를 감지할 영역 */}
      <Header />  {/* url 주소가 변경될 때 고정되는 영역 */}

      <main>
        <Routes> {/* 페이지 이동할 때 변경될 콤포넌트 묶음 */}
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='map' element={<Map />} />
          <Route path='*' element={<NotFound />} />
        </Routes >
      </main>

      <Footer /> {/* url 주소가 변경될 때 고정되는 영역 */}
    </BrowserRouter >
  );
}

export default App;
