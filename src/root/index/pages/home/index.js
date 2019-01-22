import React,{Component} from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';
import Search from '../../../../component/search'
class Home extends Component{

    render(){
        return(
            <div>
                <Search/>
                <div className={style.HomeRang}>
                    <div className={style.HomeIndex}>我是主页</div>
                </div>
            </div>
        )
    }
}
export default connect(null,null)(Home);