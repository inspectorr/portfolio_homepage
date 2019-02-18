import React, { Component } from 'react';
import './style.css';

function randInt(start, end) {
    return Math.floor(start + (end + 1 - start)*Math.random());
}

function animate(options) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / options.duration;

        if (timeFraction > 1) timeFraction = 1;
        if (timeFraction < 0) timeFraction = 0;

        let progress = options.timing(timeFraction);

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

class Hat extends Component {
    state = {
        scrollTop: document.documentElement.scrollTop
    }

    generateRandomData = () => {
        const {width, height} = this.props;

        let x = randInt(0, width);
        let y = randInt(0, height);

        const sR = 0;
        const eR = width;

        const color = {
            r: randInt(50, 255),
            g: randInt(50, 200),
            b: randInt(50, 255),
        };
        if (color.g > color.b && color.g > color.r) {
            color.g = 0;
        }

        const duration = randInt(15000, 20000);

        return [x, y, sR, eR, color, duration];
    }

    drawRound(x, y, sR, eR, color, duration) {
        const ctx = this.refs.canvas.getContext('2d');
        const {r, g, b} = color;
        animate({
            duration,
            timing: (timeFraction) => timeFraction,
            draw: function(progress) {
                const R = sR + (eR - sR)*progress;
                const radGrad = ctx.createRadialGradient(x, y, 1, x, y, R);
                radGrad.addColorStop(0.1, `rgba(${r}, ${g}, ${b}, ${0.5})`);
                radGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.fillStyle = radGrad;
                ctx.beginPath();
                ctx.arc(x, y, R, 0, Math.PI*2);
                ctx.fill();
            },
        });
    }

    animate() {
        const {width} = this.props;

        let startRoundsData = [];
        for (let i = 0; i < 0.02*width; i++) {
            startRoundsData[i] = this.generateRandomData();
        }

        startRoundsData.forEach((data) => {
            this.drawRound(...data);
        });
    }

    launchInterval() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(
            () => this.drawRound(...this.generateRandomData()),
            5*this.props.width
        );
    }

    componentDidMount() {
        this.animate();
        this.launchInterval();

        this.refs.portfolio.addEventListener('click', () => {
            this.refs.portfolio.className = 'nav-link active';
            this.refs.contacts.className = 'nav-link';

            this.props.setTab('portfolio');
        })

        this.refs.contacts.addEventListener('click', () => {
            this.refs.contacts.className = 'nav-link active';
            this.refs.portfolio.className = 'nav-link';

            this.props.setTab('contacts');
        })

    }

    render() {
        let {width, height} = this.props;
        if (height < 100) height = 100;

        const adaptiveStartWidth = 600;

        let tittle;
        if (width >= adaptiveStartWidth) {
            tittle = <div className='Tittle col-md-12 align-self-end p-0'>
                <h1 onMouseDown={(e) => e.preventDefault()} onDoubleClick={(e) => e.preventDefault()} className="font-weight-bold">inspectorr.github.io</h1>
            </div>;
        } else tittle = <div className='Tittle col-md-12 align-self-end text-center p-0'>
            <h1 style={{fontSize: '8vw'}} onMouseDown={(e) => e.preventDefault()} onDoubleClick={(e) => e.preventDefault()} className="font-weight-bold">inspectorr.github.io</h1>
        </div>;

        return (
            <div className='container-fluid m-0 p-0'
                style={{
                    height: height + 'px',
                }}
            >
                <canvas
                    className='Hat__bg'
                    ref='canvas'
                    width={width}
                    height={height}>
                </canvas>

                <div className='row h-100 mx-auto p-0'>

                    {tittle}

                    <div className='Nav col-md-12 align-self-end p-0'>
                        <ul className="nav nav-tabs m-0">
                            <li className="nav-item">
                                <a ref='portfolio' className="nav-link active" href="#!">Портфолио</a>
                            </li>
                            <li className="nav-item">
                                <a ref='contacts' className="nav-link" href="#!">Контакты</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Hat;
