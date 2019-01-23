import React,{Component} from 'react';
import {connect} from 'react-redux';
class Attention extends Component{
    render(){
        return(
            <div>关注</div>
        )
    }
}
export default connect(null,null)(Attention)