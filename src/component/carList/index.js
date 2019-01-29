import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './carList.module.scss';

class  CardList extends Component{
    render() {
        return(
            <div className={style.ListCt}>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
                <div className={style.carListC}>
                    <div>
                        <span>10:00</span>
                        <span>广职院</span>
                    </div>
                    <div>
                        <span>1小时：30分</span>
                        <span>-------------></span>
                        <span>粤A：12456C</span>
                    </div>
                    <div>
                        <span>11:30</span>
                        <span>三元里</span>
                    </div>
                    <div>
                        <span>票价：36元</span>
                        <span>座位：<i>30张</i></span>
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(null,null)(CardList);