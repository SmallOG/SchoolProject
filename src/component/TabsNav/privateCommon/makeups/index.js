import React,{Component} from 'react';
import {connect} from 'react-redux';
import  style from './makeups.module.scss';
class Makeups extends Component{
    render(){
        return(
            <div className={style.mkRg}>
                <ul className="clearfix">
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=3931445672,1392424646&fm=26&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>
                        <div className={style.icon}>
                            <span className="iconfont">&#xe665;</span>
                        </div>
                    </li>
                    <li>
                        <img src="http://img4.imgtn.bdimg.com/it/u=1213760713,2227689303&fm=11&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img3.imgtn.bdimg.com/it/u=3057129396,214552707&fm=15&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img4.imgtn.bdimg.com/it/u=59854469,3620531117&fm=15&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=2552599125,1592202519&fm=15&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=350645827,3661401923&fm=15&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>
                    <li>
                        <img src="http://img1.imgtn.bdimg.com/it/u=4161968825,1239323940&fm=11&gp=0.jpg" alt=""/>
                        <span className={style.title}>兰蔻/Lancome</span>
                        <span>型号：#85</span>
                        <span>产地：法国</span>
                        <span>功效：保湿</span>
                        <span>适合：适合所有肤质</span>
                        <span>价格: <i>￥280元</i></span>
                        <span>代购商：mushroom</span>
                        <span>保质期：36个月</span>

                    </li>

                </ul>
            </div>
        )
    }
}
export default connect(null,null)(Makeups)