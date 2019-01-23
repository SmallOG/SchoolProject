import React,{Component} from 'react';
import {connect} from 'react-redux';
class Supermarket extends Component{
    render(){
        return(
            <div>超市</div>
        )
    }
}
export default connect(null,null)(Supermarket)