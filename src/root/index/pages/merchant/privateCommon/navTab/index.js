import React,{Component} from 'react';
import {connect} from  'react-redux';
import style from './navTab.module.scss'
class NavTab extends Component{
    render(){
        return(
            <div className={style.NavRang}>
                <div className={style.title}>最新资讯</div>
                <ul className="clearfix">
                    <li className="clearfix">
                        <span className='iconfont school'>&#xe67a;</span>
                        <span>水果</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe678;</span>
                        <span>咖啡</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe6cc;</span>
                        <span>面食</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe675;</span>
                        <span>烤鱼</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe6ae;</span>
                        <span>烧烤</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe611;</span>
                        <span>奶茶</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe724;</span>
                        <span>茶点</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe67e;</span>
                        <span>美妆</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe677;</span>
                        <span>剪发</span>
                    </li>
                    <li className="clearfix">
                        <span className='iconfont'>&#xe67d;</span>
                        <span>更多</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(NavTab);