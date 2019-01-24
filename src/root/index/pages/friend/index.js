import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './friend.module.scss';

class Friend extends Component{
    render() {
        return(
            <div className={style.myRg}>
                friend
            </div>
        )
    }
}
export default connect(null,null)(Friend)