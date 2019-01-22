import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SearchBar, WhiteSpace, WingBlank} from 'antd-mobile';

class Search extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder="请输入您要搜索的内容" maxLength={8}/>
            </div>
        )
    }
}

export default connect(null, null)(Search);