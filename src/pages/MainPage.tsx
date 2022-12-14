import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import "../App.css";

const MainPage = () => {

  return (
    <>
      <Header />
      <div className='mainMargin'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;