import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../asset/nav-home.jpg';
import { CustomedNavBar } from '../styled/bottomNavigation';


function BottomNavigation() {
    return (
        <CustomedNavBar>
            <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={homeIcon} alt="Home" style={{ width: '20px', height: '20px' }} /> {/* 홈 아이콘 이미지 사용 */}
                </Link>
                <Link to="/invest" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={homeIcon} alt="Home" style={{ width: '20px', height: '20px' }} /> {/* 홈 아이콘 이미지 사용 */}
                </Link>
                <Link to="/current-invest" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={homeIcon} alt="Home" style={{ width: '20px', height: '20px' }} /> {/* 홈 아이콘 이미지 사용 */}
                </Link>
                <Link to="/mypage" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={homeIcon} alt="Home" style={{ width: '20px', height: '20px' }} /> {/* 홈 아이콘 이미지 사용 */}
                </Link>
            </nav>
        </CustomedNavBar>
    );
}

export default BottomNavigation;
