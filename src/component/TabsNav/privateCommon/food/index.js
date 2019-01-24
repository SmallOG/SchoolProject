import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './food.module.scss';
class Food extends Component{
    render(){
        return(
            <div className={style.foodRg}>
                <div className={style.left}>
                    <span className="iconfont">&#xe643;</span>
                    <span>商家</span>
                </div>
                <div className={style.right}>
                    <div className={style.top}>
                        <img src="http://img4.imgtn.bdimg.com/it/u=4020212995,3784345039&fm=15&gp=0.jpg" alt=""/>
                        <div className={style.produce}>
                            <span>星冰乐抹茶提米苏</span>
                            <span>优惠价格:<i>36元</i></span>
                            <span>规格：超大杯</span>
                        </div>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe663;</span>
                        </div>

                    </div>
                    <div className={style.bottom}>
                        <img src="http://img3.imgtn.bdimg.com/it/u=2772068002,4030940013&fm=15&gp=0.jpg" alt=""/>
                        <div className={style.produce}>
                            <span>草莓奶油夹层蛋糕</span>
                            <span>优惠价格:<i>20元</i></span>
                            <span>规格：1磅</span>
                        </div>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe659;</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default connect(null,null)(Food)