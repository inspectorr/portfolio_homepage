import React, { Component } from 'react';

import Hat from './Hat';
import Content from './Content';
import CloudBackground from './CloudBackground';

class App extends Component {
    state = {
        window: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        }
    }

    updateDimensions() {
        let window = Object.assign({}, this.state.window);
        window.width = document.documentElement.clientWidth;
        window.height = document.documentElement.clientHeight;
        console.log(window);
        this.setState({ window });
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
    }

    render() {
        let pageHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        const hatHeight = Math.floor(this.state.window.height*0.1);

        return (
            <div className="App">

                <CloudBackground
                    width={this.state.window.width}
                    height={pageHeight}
                />

                <Hat
                    width={this.state.window.width}
                    height={hatHeight}
                />

                <Content
                    width={this.state.window.width}
                    height={this.state.window.height - hatHeight}
                    hatHeight={hatHeight}
                />
            </div>
        );
    }
}

export default App;
