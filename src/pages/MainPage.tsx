import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const MainPage = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainPage;