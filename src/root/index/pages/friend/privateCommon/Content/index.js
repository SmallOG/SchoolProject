import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './content.module.scss';

class Friend extends Component{
    componentDidMount() {

    }

    render() {
        return(
            <div className={style.CtRg}>
                <ul>
                    <li>
                       <span className={style.title}>学校成功举办首期高职教育“名师大讲堂”</span>
                        <span>作者：质量监控中心</span>
                        <p>
                            为进一步学习贯彻落实党的十九大精神、习近平新时代中国特色社会主义思想和习近平总书记在全国教育大会上的重要讲话精神，提高我校教学和管理水平，促进学校教育教学事业的改革发展
                        </p>
                        <div className={style.watch}>
                            <span className="iconfont">&#xe62d;</span>
                            <span>点赞:3</span>
                            <span className="iconfont">&#xe673;</span>
                            <span>阅读量：3000</span>
                        </div>
                    </li>
                    <li>
                        <span className={style.title}>学校成功举办首期高职教育“名师大讲堂”</span>
                        <span>作者：质量监控中心</span>
                        <p>
                            为进一步学习贯彻落实党的十九大精神、习近平新时代中国特色社会主义思想和习近平总书记在全国教育大会上的重要讲话精神，提高我校教学和管理水平，促进学校教育教学事业的改革发展
                        </p>
                        <div className={style.watch}>
                            <span className="iconfont">&#xe62d;</span>
                            <span>点赞:3</span>
                            <span className="iconfont">&#xe673;</span>
                            <span>阅读量：3000</span>
                        </div>
                    </li>
                    <li>
                        <span className={style.title}>学校成功举办首期高职教育“名师大讲堂”</span>
                        <span>作者：质量监控中心</span>
                        <p>
                            为进一步学习贯彻落实党的十九大精神、习近平新时代中国特色社会主义思想和习近平总书记在全国教育大会上的重要讲话精神，提高我校教学和管理水平，促进学校教育教学事业的改革发展
                        </p>
                        <div className={style.watch}>
                            <span className="iconfont">&#xe62d;</span>
                            <span>点赞:3</span>
                            <span className="iconfont">&#xe673;</span>
                            <span>阅读量：3000</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(null,null)(Friend)
