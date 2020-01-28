import React,{Component} from 'react';
import ChartList from '../components/ChartList';

class ChartBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            chart: []

        }
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(res => res.json())
        .then(itunesChart => this.setState({chart: itunesChart.feed.entry}))
        
    }

    render(){

    
        return(
            <div className="chart-box">
                <h1>UK TOP 20</h1>
                <ChartList data={this.state.chart}/>
            </div>
        )
    }
}

export default ChartBox;
