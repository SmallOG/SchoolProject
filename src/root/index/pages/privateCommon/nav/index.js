import React,{Component} from 'react';
import {connect} from  'react-redux';
import style from './nav.module.scss'
class Nav extends Component{
    render(){
        return(
            <div className={style.NavRang}>
                <ul className="clearfix">
                    <li className="clearfix">
                        <span className='iconfont school'>&#xe775;</span>
                        <span>学校</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe614;</span>
                        <span>快递</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe606;</span>
                        <span>商家</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe61e;</span>
                        <span>零食</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe632;</span>
                        <span>美妆</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe612;</span>
                        <span>包车</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe664;</span>
                        <span>学车</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe647;</span>
                        <span>更多</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(Nav);