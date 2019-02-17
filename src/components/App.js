import React, { Component } from 'react';

import Hat from './Hat';
import Content from './Content';
import CloudBackground from './CloudBackground';
import Contacts from './Contacts';
import Footer from './Footer';

class App extends Component {
    state = {
        window: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        },

        tab: 'portfolio',
    }

    setTab(name) {
        this.setState({ tab: name });
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
        const hatHeight = Math.floor(this.state.window.height*0.15);

        let tabContent;
        if (this.state.tab === 'portfolio') {
            tabContent = <Content
                width={this.state.window.width}
                height={this.state.window.height - hatHeight}
                hatHeight={hatHeight}
            />;
        }

        if (this.state.tab === 'contacts') {
            tabContent = <Contacts
                width={this.state.window.width}
                height={this.state.window.height-hatHeight}
            />;
        }

        return (
            <div className="App m-0 p-0">
                <Hat
                    width={this.state.window.width}
                    height={hatHeight}
                    setTab={(name) => this.setTab(name)}
                />

                {tabContent}

                <CloudBackground
                    width={this.state.window.width}
                />

                <Footer/>
            </div>
        );
    }
}

export default App;
