import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './foot.module.scss'

class Foot extends Component {
    render() {
        return (
            <div className={style.foot}>
               物联网校园联网通出品
            </div>
        )
    }
}

export default connect(null, null)(Foot);