import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './buy.module.scss';


class Buy extends Component{
    render() {
        return(
            <div className={style.buyRg}>
                <div className={style.title}>限时抢购</div>
                <ul>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=125453714,2929302400&fm=26&gp=0.jpg" alt=""/>
                        <span>乐家</span>
                        <span>柠檬水果</span>
                        <span>39.50元 <del>49.50元</del></span>
                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=125453714,2929302400&fm=26&gp=0.jpg" alt=""/>
                        <span>乐家</span>
                        <span>柠檬水果</span>
                        <span>39.50元 <del>49.50元</del></span>
                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=125453714,2929302400&fm=26&gp=0.jpg" alt=""/>
                        <span>乐家</span>
                        <span>柠檬水果</span>
                        <span>39.50元 <del>49.50元</del></span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(Buy)