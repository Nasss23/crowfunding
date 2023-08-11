import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"

const SignUpPage = lazy(() => import("./pages/SignUpPage"))
const SignInPage = lazy(() => import("./pages/SignInPage"))
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"))
const CampaignPage = lazy(() => import("module/campaign/CampaignPage"))

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )

}

export default App;
