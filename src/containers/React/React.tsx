import React from 'react'
import {stateCtn, effectCtn, intro} from './content'
import './React.scss'

const ReactPage:React.FC = () => {
    return (<div className='react-page'>
    <section>
        <div className='tittle'> 介紹 </div>
        <div className='content'>
            <pre>{intro}</pre>
        </div>
    </section>
    
    <section>
        <div className='tittle'> useState </div>
        <div className='content'>
            <pre>{stateCtn}</pre>
        </div>
    </section>
    <section>
        <div className='tittle'> useEffect </div>
        <div className='content'>
            <pre>{effectCtn}</pre>
        </div>
    </section>

</div>)
}

export default ReactPage;