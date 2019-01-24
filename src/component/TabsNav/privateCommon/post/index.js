import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './post.module.scss';
class Post extends Component{
    render(){
        return(
            <div className={style.postRG}>
                <div className={style.cardRG}>
                    <div className={style.left}>
                        <img src="http://admin.gdpt.edu.cn//uploads/images/20180701/b207b61e4df4f6e6b6245076a52bf4d1.jpg" alt=""/>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>我校2018年度职称自主评审工作顺利完成</div>
                        <div className={style.info}>
                            <span>作者：黄冬天</span>
                            <span>阅读次数：2019次</span>

                        </div>
                        <div className={style.time}>
                            <span>时间：2019-01-23</span>
                            <span>部门：人事部</span>
                        </div>
                        <div className={style.icf}>
                            <span className="iconfont">&#xe671;</span>
                        </div>
                    </div>
                </div>
                <div className={style.cardRG}>
                    <div className={style.left}>
                        <img src="http://admin.gdpt.edu.cn/uploads/images%20/20190118/29197c09d3554e3033e9d5aff53be523.JPG" alt=""/>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>吴教育校长带队赴广东省工业贸易职业技术学校考察交流</div>
                        <div className={style.info}>
                            <span>作者：黄冬天</span>
                            <span>阅读次数：200次</span>

                        </div>
                        <div className={style.time}>
                            <span>时间：2019-01-23</span>
                            <span>部门：校长办公室</span>
                        </div>
                    </div>
                </div>
                <div className={style.cardRG}>
                    <div className={style.left}>
                        <img src="http://admin.gdpt.edu.cn/uploads/images%20/20190119/5e5508d29a99052b60b30455f60868f8.JPG" alt=""/>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>广东纺织职业教育集团换届筹备会议在我校召开</div>
                        <div className={style.info}>
                            <span>作者：黄冬天</span>
                            <span>阅读次数： 206次</span>

                        </div>
                        <div className={style.time}>
                            <span>时间：2019-01-23</span>
                            <span>部门：科技中心</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default connect(null,null)(Post)