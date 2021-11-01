import React from "react";
import './DemoPage.scss'

import { useSelector } from "react-redux";
import ReactPage from "../React/React";
import { selectDemo } from "../../store/demoSlice";
import ReduxPage from "../Redux/Redux";
import TypescriptPage from "../Typescript/Typescript";
import Login from "../Login/Login";


const DemoPage: React.FC = () => {

    const page = useSelector(selectDemo);    

    function renderPage(): React.ReactElement {        
        switch(page){
            case 0:                
                return <TypescriptPage/>                
            case 1:                
                return <ReactPage/>                
            case 2:
                return <ReduxPage/>      
            case 3: 
                return <Login/>
            default: 
                return <div>NOT FOUND</div>
        }
    }

    return (<div className='demo-page'>
        {renderPage()}
    </div>)
}

export default DemoPage