import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './mechant.module.scss';
import Nav from './privateCommon/nav';
import NavTab from './privateCommon/navTab';
import Buy from './privateCommon/buy';
import List from  './privateCommon/list'


class Merchant extends Component{
    render() {
        return(
            <div className={style.mcRg}>
                <Nav/>
                <NavTab/>
                <Buy/>
                <List/>
            </div>
        )
    }
}
export default connect(null,null)(Merchant)