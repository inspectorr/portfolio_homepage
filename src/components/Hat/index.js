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

        // const sR = randInt(5, 29);
        // const sR = this.props.height;
        const sR = 0;
        const eR = width;
        // const eR = randInt(30, 60);

        const color = {
            r: randInt(50, 255),
            g: randInt(50, 200),
            b: randInt(50, 255),
        };
        if (color.g > color.b && color.g > color.r) {
            color.g = 0;
        }

        // const duration = randInt(400, 4000);
        const duration = randInt(5000, 10000);

        return [x, y, sR, eR, color, duration];
    }

    drawRound(x, y, sR, eR, color, duration) {
        const {width, height} = this.props;
        const ctx = this.refs.canvas.getContext('2d');
        const {r, g, b} = color;
        animate({
            duration,
            timing: (timeFraction) => timeFraction,
            draw: function(progress) {
                const R = sR + (eR - sR)*progress;
                // let a = progress;
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
        const {width, height} = this.props;

        let startRoundsData = [];
        for (let i = 0; i < 25; i++) {
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
            this.props.width
        );
    }

    componentDidMount() {
        this.animate();
        this.launchInterval();
        // window.addEventListener('scroll', () => this.setState({ scrollTop: document.documentElement.scrollTop }));
    }

    componentDidUpdate() {
        // this.animate();
    }

    render() {
        const {width, height} = this.props;
        const {scrollTop} = this.state;

        // let fixedTop = true;
        // if (scrollTop > height) fixedTop = false;

        return (
            <div
                className={`Hat navbar m-0 p-0`}
                onMouseDown={(event) => event.preventDefault()}
                onDoubleClick={(event) => event.preventDefault()}
                style={{
                    width: width + 'px',
                    height: height + 'px',
                    cursor: 'default',
                }}
            >
                <canvas
                    className='Hat__bg'
                    ref='canvas'
                    width={width}
                    height={height}>
                </canvas>
                <a
                    className='Hat__tittle navbar-brand pl-3'
                >
                    <h1>inspectorr.github.io</h1>
                </a>
            </div>
        );
    }
}

// style={{
//     height: 2*height/3 + 'px',
//     top: height/2 + 'px',
//     marginTop: -2*height/6 + 'px'
// }}

export default Hat;
