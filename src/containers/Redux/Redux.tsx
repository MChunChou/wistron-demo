import React from 'react'
import {intro, toolKit} from './content'
import IntroPng from './redux-intro.png'
import './Redux.scss'


const ReduxPage:React.FC = () => {
    return (<div className='redux-page'>
    <section>
        <div className='tittle'> 介紹 </div>
        <div className='content'>
            <pre>{intro}</pre>
            <img src={IntroPng} width={600} />
        </div>
    </section>
    <section>
        <div className='tittle'>ToolKit createSlice</div>
        <div className='content'>
            <pre>{toolKit}</pre>
        </div>
    </section>


</div>)
}

export default ReduxPage;