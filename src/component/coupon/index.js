import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from  './coupon.module.scss';
class Coupon extends  Component{
    render(){
        return(
           <div className={style.CouponRG}>
               <div className={style.title}>优惠付</div>
               <div className={style.couponCt}>
                   <div className={style.left}>
                       <span className='iconfont'>&#xe698;</span>
                       <span>优惠红包领取</span>
                       <span>到店支付优惠多</span>
                   </div>
                   <div className={style.right}>
                       <span className="iconfont">&#xe882;</span>
                       <span>学生证绑定</span>
                       <span>实时查询成绩</span>
                   </div>
               </div>
           </div>
        )
    }
}
export  default connect(null,null)(Coupon)