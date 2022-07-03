import React, {Fragment} from 'react';
import { Outlet } from "react-router-dom";


const UILayout = () => {
    return <Fragment>
        UI Layout
        <Outlet/>
    </Fragment>;
}


export default UILayout;