import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import "../App.css";
import { Helmet } from 'react-helmet-async';
import imgUrl from '../../assets/coffee/coffee1.jpg';

const MainPage = () => {

  return (
    <>
      <Helmet>
        <title>{`핑거오더-test`}</title>
        {/* <link href={imgUrl} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://fingeroreder-order.netlify.app/`} />
        <meta name="og:title" content={`핑거오더-test`} />
        <meta name="og:description" content={`test 매장의 메뉴입니다.`} />
        <meta name="description" content={`test 매장의 메뉴입니다.`} />
        {/* <meta property="og:image" content={imgUrl} /> */}
        {/* <meta property="og:image:width" content={'150px'} />
    <meta property="og:image:height" content={'150px'} /> */}
      </Helmet>
      <Header />
      <div className='mainMargin'>
        {/* <Outlet /> */}
        hi
      </div>
      <Footer />
    </>
  );
};

export default MainPage;