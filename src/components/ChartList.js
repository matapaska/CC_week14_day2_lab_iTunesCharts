import React from 'react'
import { render } from '@testing-library/react'
import ChartItem from './ChartItem'

const ChartList = ({data}) => {
    const chartNodes = data.map(item =>{
        return (
    <ChartItem title={item["im:name"].label} key={item.id}>{item["im:artist"].label}</ChartItem>
        )
    })

    return(
        <div className="chart-list">
            <ol>
                {chartNodes}
            </ol>

        </div>
    )
}
export default ChartList;