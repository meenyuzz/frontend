import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CurrentInvest from "./pages/current/CurrentInvest";
import Invest from "./pages/invest/Invest";
import InvestDetail from "./pages/invest/InvestDetail";
import MyPage from "./pages/myPage/MyPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invest" element={<Invest />}/>
            <Route path="/current-invest" element={<CurrentInvest />}/>
            <Route path="/mypage" element={<MyPage />}/>
            <Route path="/invest-detail" element={<InvestDetail />}/>
        </Routes>
    );
};

export default Router;