import React from 'react'
import './SideBar.scss'
import { useDispatch } from 'react-redux'
import { changeDemo } from '../../store/demoSlice'

const LinkStr: string[] = [
    'Typescrpt',
    'React Hook',
    'Redux ToolKit',
    'Example: Login'
]

const SideBar: React.FC = () => {    
    const dispatch = useDispatch();

    function handleDemoChange(evt: React.MouseEvent): void {                
        const target = evt.target as HTMLButtonElement       
        dispatch(changeDemo( parseInt(target.value) ))
    }

    return (<div className='side-bar'> 
        {
            LinkStr.map((name, i)=>{
                return <button className='row-btn radius-btn shadow-btn' value={i} key={'link-'+i} onClick={handleDemoChange}>{name}</button>
            })
        }
    </div>)
}

export default SideBar