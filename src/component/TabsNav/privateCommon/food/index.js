import React,{Component} from 'react';
import {connect} from 'react-redux';
class Food extends Component{
    render(){
        return(
            <div>美食</div>
        )
    }
}
export default connect(null,null)(Food)