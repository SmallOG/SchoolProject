import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './sf.module.scss';
class SF extends Component{
    render(){
        return(
            <div className={style.sfRg}>
                <ul className="clearfix">
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=1084701344,478894168&fm=26&gp=0.jpg" alt=""/>
                        <div>顺丰</div>
                    </li>
                    <li>
                        <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2983831287,4020193614&fm=58" alt=""/>
                        <div>园通</div>
                    </li>
                    <li>
                        <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1022514261,1855787563&fm=58" alt=""/>
                        <div>中通</div>
                    </li>
                    <li>
                        <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3293467486,1009424027&fm=58" alt=""/>
                        <div>申通</div>
                    </li>
                    <li>
                        <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=996032835,1968172858&fm=58" alt=""/>
                        <div>韵达</div>
                    </li>
                    <li>
                        <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3565506584,540495198&fm=58" alt=""/>
                        <div>天天</div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(SF)