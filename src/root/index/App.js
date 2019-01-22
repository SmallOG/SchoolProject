import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Router from './router'
import styles from './App.scss';
import TabBar from  './common/TabBar';
import '../../statics/iconfont/iconfont.css';
import '../../statics/base.scss';
console.log(styles)
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router/>
                    <TabBar/>
                </div>
            </Provider>
        );
    }
}

export default App;
