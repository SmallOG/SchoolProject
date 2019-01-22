import React, {Component} from 'react';
import {connect} from 'react-redux';
import  './carousel.scss';
import {Carousel, WingBlank} from 'antd-mobile';

class Carousels extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return (
            <div className='CrRang'>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                            >
                                <img
                                    src={`http://cimg2.163.com/cnews/2007/1/11/200701111511503f664.jpg`}
                                    alt=""
                                    style={{width: '100%', verticalAlign: 'top',height:'150px'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({imgHeight: 'auto'});
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        );


    }
}

export default connect(null, null)(Carousels);