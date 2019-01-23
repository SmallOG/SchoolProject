import React,{Component} from 'react';
import {connect} from 'react-redux';
class Post extends Component{
    render(){
        return(
            <div>公告</div>
        )
    }
}
export default connect(null,null)(Post)