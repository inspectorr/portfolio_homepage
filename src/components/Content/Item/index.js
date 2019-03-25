import React, { Component } from 'react';
import './style.css';

export default class Item extends Component {
    state = {
        defaultSide: this.props.side,
    }

    render() {
        const adaptiveStartWidth = 600;

        let imgSide, titleTop, titleRight;
        if (this.props.width >= adaptiveStartWidth) {
            imgSide = 200;
            titleRight = <div className='Element p-0'><h3 className='card-title font-weight-bold'>{this.props.title}</h3></div>;
            titleTop = null;
        } else {
            imgSide = 300;
            titleTop = <div className='Element card-header col-md-auto rounded-0'><h3 className='card-title font-weight-bold text-center'>{this.props.title}</h3></div>;
            titleRight = null;
        }

        return (
          <div className='col-md-12 p-0'>
            <a href={this.props.href}>
                <div
                    className='card border-top-0 rounded-0'
                >
                    <div className='row'>
                        <div className='col'>

                            {titleTop}

                            <div className='card-body rounded-0'
                            >

                            <div
                                className='container h-100'
                            >

                                <div className='Element row h-100 justify-content-center'>

                                    <div
                                        className={
                                            titleTop ? 'Element Img col-md-auto text-center py-3' : 'Element Img text-center'
                                        }
                                    >

                                        <img
                                            alt=''
                                            className='Item__img img-thumbnail'
                                            width={imgSide ? imgSide : null}
                                            src={this.props.imageSrc}

                                        />
                                    </div>

                                    <div className='Element col'>
                                        {titleRight}

                                        <p className='card-text font-weight-light'>
                                            {this.props.text}
                                        </p>


                                        <form action={this.props.buttonHref}>
                                            <button
                                                type='submit'
                                                className='btn btn-lg btn-block btn-primary rounded'
                                                style={{bottom: 0}}
                                            >
                                                {this.props.buttonText}
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </a>
          </div>
        );
    }
}
