import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import CopyRight from '../Shared/CopyRight/CopyRight';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
};

export default Root;