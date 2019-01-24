import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './headerInfo.module.scss';
import Avt from '../../../../../../statics/img/avt.jpg';
class HeaderInfo extends Component{
    render() {
        return(
            <div className={style.InfonRg}>
                <img src={Avt} alt=""/>
                <div className={style.right}>
                    <span>SmallProject</span>
                    <span>school: <i>广东职业技术学院</i> </span>
                    <span>sex: <i className={style.sex}>男</i> </span>
                    <span>room: <i className={style.room}>1-302</i> </span>

                </div>
                <div className={style.iconR}>
                    <span className="iconfont ">&#xe648;</span>
                </div>
                <div className={style.iconE}>
                    <span className="iconfont ">&#xe638;</span>
                </div>






            </div>
        )
    }
}
export default connect(null,null)(HeaderInfo)