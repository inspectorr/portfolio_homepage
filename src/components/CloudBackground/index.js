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

export default class CloudBackground extends Component {
    generateRandomData = () => {
        const {width} = this.props;
        const height = this.state.height;

        const x = randInt(0, width);
        const y = randInt(0, height);

        const sR = 0;
        const eR = 0.2*width;

        const colors = [
            {
                r: parseInt('ff', 16),
                g: parseInt('ff', 16),
                b: parseInt('ff', 16)
            },

            {
                r: parseInt('88', 16),
                g: parseInt('B2', 16),
                b: parseInt('E6', 16)
            },

            {
                r: parseInt('ee', 16),
                g: parseInt('ee', 16),
                b: parseInt('ee', 16)
            },

        ];

        const colorIndex = randInt(0, colors.length-1);
        const color = colors[colorIndex];

        const duration = randInt(7000, 15000);

        return [x, y, sR, eR, color, duration];
    }

    state = {
        height: Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        ),
    }

    drawRound(x, y, sR, eR, color, duration) {
        const {width} = this.props;
        const height = this.state.height;
        const ctx = this.refs.canvas.getContext('2d');
        const {r, g, b} = color;
        animate({
            duration,
            timing: (timeFraction) => Math.pow(timeFraction, 2),
            draw: function(progress) {
                const R = sR + (eR - sR)*progress;
                const radGrad = ctx.createRadialGradient(x, y, 1, x, y, R);

                radGrad.addColorStop(0.1, `rgba(${r}, ${g}, ${b}, ${1})`);
                radGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.fillStyle = radGrad;
                ctx.globalAlpha = 0.1;

                // ctx.moveTo(0, -y*progress);
                ctx.fillStyle = radGrad;
                ctx.beginPath();
                ctx.arc(x, y, R, 0, Math.PI*2);
                ctx.fill();

                ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                ctx.fillRect(0, 0, width, height);

            },
        });
    }

    animate() {
        const {width} = this.props;

        let startRoundsData = [];
        for (let i = 0; i < 0.1*width; i++) {
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
            0.1*this.props.width
        );
    }

    updateDimensions() {
        let pageHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        this.setState({ height: pageHeight });
    }

    componentDidMount() {
        this.updateDimensions();
        this.animate();
        this.launchInterval();
    }


    componentDidUpdate() {
        this.launchInterval();
    }

    render() {
        const {width} = this.props;
        const height = this.state.height;
        return (
            <div
                className="CloudBackground container-fluid m-0 p-0"
            >
                <canvas
                    className="h-100 w-100"
                    id="BG"
                    ref='canvas'
                    width={width}
                    height={height}>
                </canvas>
            </div>
        );
    }
}
