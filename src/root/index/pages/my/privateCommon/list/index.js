import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './list.module.scss';

class List extends Component{
    render() {
        return(
            <div className={style.ListRg}>
                <ul>
                    <li>
                        <span className="iconfont">&#xe669;</span>
                        <span>支付账单</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe66d;</span>
                        <span>我的卡包</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe607;</span>
                        <span>外卖订单</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe634;</span>
                        <span>快递状态</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe626;</span>
                        <span>购物订单</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe62f;</span>
                        <span>包车预约</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe664;</span>
                        <span>学车报名</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                    <li>
                        <span className="iconfont">&#xe6c5;</span>
                        <span>系统设置</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe648;</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(List)