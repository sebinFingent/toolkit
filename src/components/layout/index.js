import { useState } from 'react';
import'./style.scss'
import Nav from './nav';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    const {withHeader=true} = props;
    const [isExpanded,setExpand] =  useState(true);
    return (
        <div className={`${isExpanded?'expanded':''}`}>
            {withHeader &&<header className={`header`}></header>}
           <Nav setExpand={()=>setExpand(isExpanded)}></Nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;