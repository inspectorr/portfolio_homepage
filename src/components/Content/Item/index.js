import React, { Component } from 'react';
import './style.css';

export default class Item extends Component {
    state = {
        defaultSide: this.props.side,
    }

    render() {
        const adaptiveStartWidth = 600;

        let imgSide, tittleTop, tittleRight;
        if (this.props.width >= adaptiveStartWidth) {
            imgSide = 200;
            tittleRight = <div className='Element p-0'><h3 className='card-tittle font-weight-bold'>{this.props.tittle}</h3></div>;
            tittleTop = null;
        } else {
            imgSide = 300;
            tittleTop = <div className='Element card-header col-md-auto rounded-0'><h3 className='card-tittle font-weight-bold text-center'>{this.props.tittle}</h3></div>;
            tittleRight = null;
        }

        return (
            <a href={this.props.href}>
                <div
                    className='card border-top-0 rounded-0'
                >
                    <div className='row'>
                        <div className='col'>

                            {tittleTop}

                            <div className='card-body rounded-0'
                            >

                            <div
                                className='container h-100'
                            >

                                <div className='Element row h-100 justify-content-center'>

                                    <div
                                        className={
                                            tittleTop ? 'Element Img col-md-auto text-center py-3' : 'Element Img text-center'
                                        }
                                    >

                                        <img
                                            className='Item__img img-thumbnail'
                                            width={imgSide ? imgSide : null}
                                            src={this.props.imageSrc}

                                        />
                                    </div>

                                    <div className='Element col'>
                                        {tittleRight}

                                        <p className='card-text'>
                                            Some quick example text to build on the card title
                                            and make up the bulk of the card's content.
                                        </p>

                                    
                                        <button
                                            className='btn btn-lg btn-block btn-primary rounded'
                                            style={{bottom: 0}}
                                        >открыть</button>
                                    </div>
                                </div>
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

// {
//     <canvas
//         ref='canvas'
//         width={this.props.side}
//         height={this.props.side}
//     ></canvas>
// }
