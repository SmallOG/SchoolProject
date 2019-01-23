import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './TabsNav.module.scss';
import { Tabs, WhiteSpace } from 'antd-mobile';
import School from './privateCommon/school';
import Post from  './privateCommon/post';
import Food from './privateCommon/food';
import SF from './privateCommon/sf';
import Makeups from './privateCommon/makeups';
import Car from './privateCommon/car';
import LearningCar from './privateCommon/LearningCar';
import Supermarket from './privateCommon/Supermarket';
import Attention from  './privateCommon/attention';
class TabsNav extends Component{
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <p>Content of {tab.common}</p>
        </div>);

    render() {
        const tabs = [
            { title: '学校',id:1,common:<School/> },
            { title: '公告',id:2,common:<Post/>},
            { title: '美食',id:3,common:<Food/> },
            { title: '快递',id:4,common:<SF/> },
            { title: '美妆',id:5,common:<Makeups/> },
            { title: '包车',id:6,common:<Car/>},
            { title: '学车',id:7,common:<LearningCar/>},
            { title: '超市',id:8,common:<Supermarket/>},
            { title: '关注',id:9,common:<Attention/>}
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}
export default connect(null,null)(TabsNav)