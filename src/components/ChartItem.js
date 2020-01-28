import React from 'react';

const ChartItem = (props) => 
    <div className = "chart-item"> 
        
<li>{props.title}{props.children}</li>
        
    </div>


export default ChartItem;