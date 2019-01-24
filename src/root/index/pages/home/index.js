import React,{Component} from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';
import Search from '../../../../component/search';
import Nav from './privateCommon/nav';
import Carousels from './privateCommon/carousel';
import Coupon from '../../../../component/coupon';
import TabsNav from '../../../../component/TabsNav';
import END from '../../../../component/end';
class Home extends Component{
    render(){
        return(
            <div className={style.HomeDiv}>
                <Search/>
                <Nav/>
                <Carousels/>
                <Coupon/>
                <TabsNav/>
                <END/>
            </div>
        )
    }
}
export default connect(null,null)(Home);