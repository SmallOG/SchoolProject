import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './list.module.scss';


class List extends Component {
    render() {
        return (
            <div className={style.ListRg}>
                <div className={style.title}>为你定制</div>
                <ul>
                    <li>
                        <img src="http://img5.imgtn.bdimg.com/it/u=2713908755,4202170852&fm=26&gp=0.jpg" alt=""/>
                        <div>
                            <span>星巴克</span>
                            <span>人气98
                                <span className="iconfont">&#xe67c;</span>
                                <span className="iconfont">&#xe67c;</span>
                                <span className="iconfont">&#xe67c;</span>
                            </span>
                            <span>广东职业技术学院排第1名</span>
                            <span>30元 <i> |</i>中杯新冰乐</span>
                        </div>

                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=3429804895,2434401867&fm=26&gp=0.jpg" alt=""/>
                        <div>
                            <span>喜茶</span>
                            <span>人气98
                                <span className="iconfont">&#xe67c;</span>
                                <span className="iconfont">&#xe67c;</span>
                                <span className="iconfont">&#xe67c;</span>
                            </span>
                            <span>广东职业技术学院排第1名</span>
                            <span>30元 <i> |</i>中杯新冰乐</span>
                        </div>
                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=509080071,4219942459&fm=15&gp=0.jpg" alt=""/>
                        <div>
                            <span>奈雪の茶</span>
                            <span>人气98
                                <span className="iconfont">&#xe67c;</span>
                                <span className="iconfont">&#xe67c;</span>
                                <span className="iconfont">&#xe67c;</span>
                            </span>
                            <span>广东职业技术学院排第1名</span>
                            <span>30元 <i> |</i>中杯新冰乐</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(null, null)(List)