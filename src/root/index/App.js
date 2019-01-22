import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Router from './router'
import styles from './App.scss';
import Foot from '../../component/foot';
import TabBar from  './common/TabBar'
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
