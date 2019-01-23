import React,{Component} from 'react';
import {connect} from 'react-redux';
class School extends Component{
   render(){
       return(
           <div>学校</div>
       )
   }
}
export default connect(null,null)(School)