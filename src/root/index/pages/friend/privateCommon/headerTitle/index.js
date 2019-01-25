import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './haderTitle.module.scss';

class Friend extends Component{
    render() {
        return(
            <div className={style.headerRg}>
                <span className="iconfont">&#xe699;</span>
                <span>每天一条</span>
                <span className="iconfont">&#xe605;</span>
            </div>
        )
    }
}
export default connect(null,null)(Friend)
