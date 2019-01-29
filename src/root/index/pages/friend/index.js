import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './friend.module.scss';
import HeaderTitle from './privateCommon/headerTitle';
import Content from './privateCommon/Content';

class Friend extends Component{
    render() {
        return(
            <div className={style.FrRg}>
              <HeaderTitle/>
              <Content/>

            </div>
        )
    }
}
export default connect(null,null)(Friend)