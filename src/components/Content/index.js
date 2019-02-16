import React, { Component } from 'react';
import './style.css';

import Item from './Item';
// import Spaceship from './images/Spaceship';
// import BrushImage from './images/BrushImage';

export default class Content extends Component {
    componentDidMount() {
    }

    render() {
        const settings = {
            width: this.props.width,
        }
        
        return (
            <div
                className='List container h-100 mx-auto'
                style={{
                    top: this.props.hatHeight + 'px',
                }}
            >
                <div
                    className='row mx-auto'
                >
                    <div
                        className='col-md-12'
                    >
                        <div className="Tittle card">
                            <nav className="navbar">
                                <a className="navbar-brand" href="#!"><h2>Личные проекты</h2></a>
                            </nav>
                        </div>
                    </div>

                    <div
                        className='col-md-12'
                    >
                        <Item
                            tittle='The Little Spaceship'
                            imageSrc={require('./images/spaceship.JPG')}
                            {...settings}
                        />
                    </div>

                    <div
                        className='col-md-12'
                    >
                        <Item
                            {...settings}
                        />
                    </div>

                </div>
            </div>
        );
    }
}
