import React,{Component} from 'react';
import {connect} from 'react-redux';
import  style from './end.module.scss';
class END extends Component{
    render(){
        return(
            <div className={style.endRg}>----The END----</div>
        )
    }
}
export default connect(null,null)(END)