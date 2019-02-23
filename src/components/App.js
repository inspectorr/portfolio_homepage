import React, { Component } from 'react';

import Hat from './Hat';
import Content from './Content';
import CloudBackground from './CloudBackground';
import Contacts from './Contacts';
import Footer from './Footer';
import texts from './texts';

class App extends Component {
    constructor(props) {
        super(props);
        let text;
        if (this.props.lang === 'ru-RU') text = texts.ru;
        else text = texts.en;
        this.text = text;
    }

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
                text={this.text}
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
                <div className='main' style={{marginBottom: hatHeight*2 + 'px'}}>
                    <Hat
                        text={this.text}
                        width={this.state.window.width}
                        height={hatHeight}
                        setTab={(name) => this.setTab(name)}
                    />

                    {tabContent}

                    <CloudBackground
                        text={this.text}
                        width={this.state.window.width}
                    />
                </div>

                <Footer text={this.text}/>
            </div>
        );
    }
}

export default App;
