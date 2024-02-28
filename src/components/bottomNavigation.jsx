import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// function Home() {
//     return <h2>홈</h2>;
// }

// function Invest() {
//     return <h2>투자하기</h2>;
// }

// function CurrentInvest() {
//     return <h2>투자현황</h2>;
// }

// function MyPage() {
//     return <h2>마이페이지</h2>;
// }

function BottomNavigation() {
    return (
        <Router>
            <div style={{ height: '80px' }}>
                <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                    <Link to="/">
                        <span>홈</span>
                    </Link>
                    <Link to="/invest">
                        <span>투자하기</span>
                    </Link>
                    <Link to="/current-invest">

                        <span>투자현황</span>
                    </Link>
                    <Link to="/mypage">

                        <span>마이페이지</span>
                    </Link>
                </nav>
{/* 
                <Route path="/" exact component={Home} />
                <Route path="/invest" component={Invest} />
                <Route path="/current-invest" component={CurrentInvest} />
                <Route path="/mypage" component={MyPage} /> */}
            </div>
        </Router>
    );
}

export default BottomNavigation;
