import React,{Component} from 'react';
import {connect} from 'react-redux';
import CarList from '../../../carList';
import style from './car.module.scss';
class Food extends Component{
    render(){
        return(
            <div className={style.List}>
                <CarList/>
            </div>
        )
    }
}
export default connect(null,null)(Food)