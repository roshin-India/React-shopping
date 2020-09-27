import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.style.scss';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
        
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div style ={{
            backgroundImage:`url(${imageUrl})`
        }} className="background-image"/>
        <div>
       </div>
        <div className='content'>
        
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now 
       
        </span>
        </div>
    </div>
)
/**
 * withRouter used for accessing 'history,match' of routes in component
 */
export default withRouter(MenuItem);