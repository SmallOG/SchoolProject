import React,{Component} from 'react';
import {connect} from 'react-redux';
class LearningCar extends Component{
    render(){
        return(
            <div>学车</div>
        )
    }
}
export default connect(null,null)(LearningCar)