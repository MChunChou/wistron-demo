import React from 'react'
import {intro, typesCtn, interfacesCtn, enumCtn, genericsCtn} from './content'

import './Typescript.scss'

const TypescriptPage: React.FC = () => {

    return (<div className='typescript-page'>
        <section>
            <div className='tittle'>介紹</div>
            <div className='content'>
                <pre>
                    {intro}
                </pre>
            </div>
        </section>
        <section>
            <div className='tittle'>型別 (Types)</div>
            <div className='content'>
               <pre>{typesCtn}</pre>                
            </div>
        </section>
        <section>
            <div className='tittle'>介面 (Interfaces)</div>
            <div className='content'>
                <pre>{interfacesCtn}</pre>
            </div>
        </section>
        <section>
            <div className='tittle'>列舉 (enum)</div>
            <div className='content'>
                <pre>{enumCtn}</pre>
            </div>
        </section>
        <section>
            <div className='tittle'> 泛型 (Generics) </div>
            <div className='content'>
                <pre>{genericsCtn}</pre>
            </div>
        </section>
    </div>)
}

export default TypescriptPage;