import React,{Component} from 'react';
import {connect} from 'react-redux';
import HeaderInfo from './privateCommon/headerInfo';
import style from './my.module.scss';
import  List from './privateCommon/list';

class My extends Component{
    render() {
        return(
            <div className={style.myRg}>
                <HeaderInfo/>
                <List/>
            </div>
        )
    }
}
export default connect(null,null)(My)