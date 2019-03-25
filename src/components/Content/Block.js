import React from 'react';

class Block extends React.Component {
  render () {
    return (
      <div className='row mx-auto mt-4'>
        <div className='col-md-12 p-0'>
          <div className="Tittle card">
            <nav className="navbar">
              <a className={`navbar-brand ${this.props.settings.width < this.props.settings.adaptiveStartWidth ? 'mx-auto' : ''}`} href="#!">
                <h2>
                    {this.props.title}
                </h2>
              </a>
            </nav>
          </div>
        </div>
          {this.props.items}
      </div>
    );
  }
}

export default Block;
