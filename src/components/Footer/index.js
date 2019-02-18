import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer w-100">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col footer-copyright text-center pt-3">
                            <p className="text-muted">{'© 2019 Верхотуров Роман'}</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
