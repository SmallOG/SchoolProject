import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SearchBar, WhiteSpace, WingBlank} from 'antd-mobile';
import style from './search.module.scss';

class Search extends Component {
    render() {
        return (
            <div className={style.searchIp}>
                <SearchBar placeholder="请输入您要搜索的内容" maxLength={8}/>
            </div>
        )
    }
}

export default connect(null, null)(Search);