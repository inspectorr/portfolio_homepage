import React, { Component } from 'react';
import './style.css';

import data from './data.js';

import Block from './Block';
import Item from './Item';

export default class Content extends Component {

  render() {
    const settings = {
      width: this.props.width,
      adaptiveStartWidth: 600,
    }

    const text = this.props.text;

    const blocks = data.map((block, i) => {
      const items = block.items.map((item, j) => {
        const itemText = text.blocks[i].items[j];
        return (
          <Item
            title={itemText.title}
            key={itemText.title}
            text={itemText.brief}
            imageSrc={item.img}
            buttonHref={item.href}
            buttonText={text.button}
            {...settings}
          />
        );
      });
      return (
        <Block
          title={text.blocks[i].title}
          key={text.blocks[i].title}
          items={items}
          settings={settings}
        />
      );
    });

    return (
      <div className='List container-fluid m-0 h-100 mx-auto'>
        {blocks}
      </div>
    );
  }
}
