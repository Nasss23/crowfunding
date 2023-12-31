import LayoutDashboard from 'layout/LayoutDashboard';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import LayoutPayment from 'layout/LayoutPayment';
import ShippingPage from 'pages/ShippingPage';
import CheckoutPage from 'pages/CheckoutPage';


const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashBoardPage = lazy(() => import('./pages/DashBoardPage'));
const StartCampaignPage = lazy(() => import('./pages/StartCampaignPage'));
const CampaignPage = lazy(() => import('module/campaign/CampaignPage'));
const CampaignView = lazy(() => import('module/campaign/CampaignView'));


const customStyles = {
  content: {

  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
Modal.defaultStyles = {}
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path='/' element={<DashBoardPage></DashBoardPage>}></Route>
          <Route
            path='/campaign'
            element={<CampaignPage></CampaignPage>}></Route>
          <Route
            path='/start-campaign'
            element={<StartCampaignPage></StartCampaignPage>}></Route>
          <Route
            path='/campaign/:slug'
            element={<CampaignView></CampaignView>}></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
