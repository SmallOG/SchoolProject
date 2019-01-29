import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './LeaningCar.module.scss'
class LearningCar extends Component{
    render(){
        return(
            <div className={style.LernCar}>
                <ul className="clearfix">
                    <li><div>预报名</div></li>
                    <li><div>科目一</div></li>
                    <li><div>科目二</div></li>
                    <li><div>科目三</div></li>
                    <li><div>科目四</div></li>
                    <li><div>驾驶证</div></li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(LearningCar)