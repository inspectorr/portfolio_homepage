import React, { Component } from 'react';
import './style.css';

export default class Contacts extends Component {
    render() {
        const adaptiveStartWidth = 600;
        let mobile;
        if (this.props.width <= adaptiveStartWidth) {
            mobile = {
                fontSize: '5vw',
            }
        }

        return (
            <div
                className='container align-items-center'
                style={{
                    height: this.props.height + 'px'
                }}
            >
                <div className='Contacts mx-auto row h-100 align-items-center justify-content-center'>
                    <div className='Contacts col-md-auto card align-items-center p-3'>
                        <div className='mx-auto row align-items-center'>
                            <div className='col p-0 mr-1'><img height={36} src={require('./email.png')} /></div>
                            <div className='col p-0 m-0'><h4 className='m-0 p-0' style={mobile}>hmrfins@gmail.com</h4></div>
                        </div>
                        <div className='mx-auto row align-items-center'>
                            <div className='col p-0 mr-1'><img height={28} src={require('./telegram.png')} /></div>
                            <div className='col p-0 m-0'><h4 className='m-0 p-0' style={mobile}>@inspectorrrr</h4></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
