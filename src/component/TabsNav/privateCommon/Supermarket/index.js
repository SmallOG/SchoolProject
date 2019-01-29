import React,{Component} from 'react';
import {connect} from 'react-redux';
import  style from './supermarket.module.scss';
class SuperMakeups extends Component{
    render(){
        return(
            <div className={style.mkRg}>
                <ul className="clearfix">
                    <li>
                        <img src="http://img4.imgtn.bdimg.com/it/u=928032786,1613790106&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe665;</span>
                        </div>
                    </li>
                    <li>
                        <img src="http://img5.imgtn.bdimg.com/it/u=2957156203,387842560&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img3.imgtn.bdimg.com/it/u=186792290,1656885481&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img1.imgtn.bdimg.com/it/u=4058172988,2001289681&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=423965442,355158552&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img3.imgtn.bdimg.com/it/u=2188582196,353392729&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=2137110272,4044246020&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>产地：法国</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>

                </ul>
            </div>
        )
    }
}
export default connect(null,null)(SuperMakeups)