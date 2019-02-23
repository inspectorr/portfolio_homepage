import React, { Component } from 'react';
import './style.css';

import Item from './Item';

export default class Content extends Component {
    render() {
        const adaptiveStartWidth = 600;
        const settings = {
            width: this.props.width,
        }
        let ownProjectsTittle = <a className="navbar-brand" href="#!">
            <h2>
                {this.props.text.title}
            </h2>
        </a>;
        if (settings.width < adaptiveStartWidth) ownProjectsTittle = <a className="navbar-brand mx-auto" href="#!">
            <h2>
                {this.props.text.title}
            </h2>
        </a>

        return (
            <div
                className='List container-fluid pt-4 m-0 h-100 mx-auto'
            >
                <div
                    className='row mx-auto'
                >
                    <div
                        className='col-md-12 p-0'
                    >
                        <div className="Tittle card">
                            <nav className="navbar">
                                {ownProjectsTittle}
                            </nav>
                        </div>
                    </div>

                    <div
                        className='col-md-12 p-0'
                    >
                        <Item
                            tittle='The Little Spaceship'
                            text={this.props.text.theLittleSpaceShip}
                            imageSrc={require('./images/spaceship.JPG')}
                            buttonHref='/thelittlespaceship'
                            buttonText={this.props.text.button}
                            {...settings}
                        />
                    </div>

                    <div
                        className='col-md-12 p-0 last-item'
                    >
                        <Item
                            tittle='Simple Draw'
                            text={this.props.text.simpleDraw}
                            imageSrc={require('./images/simpledraw.JPG')}
                            buttonHref='/simpledraw'
                            buttonText={this.props.text.button}
                            {...settings}
                        />
                    </div>


                </div>
            </div>
        );
    }
}
