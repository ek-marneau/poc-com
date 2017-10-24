import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import '../styles/ComingBox.css';
import { getRandomImage, getRandomName, getRandomCity } from '../helpers/faker-helper';

const tilesData = [
  {
    img: getRandomImage(),
    title: getRandomCity(),
    author: getRandomName(),
  },
  {
    img: getRandomImage(),
    title: getRandomCity(),
    author: getRandomName(),
  },
  {
    img: getRandomImage(),
    title: getRandomCity(),
    author: getRandomName(),
  },
  {
    img: getRandomImage(),
    title: getRandomCity(),
    author: getRandomName(),
  },
  {
    img: getRandomImage(),
    title: getRandomCity(),
    author: getRandomName(),
  },
  {
    img: getRandomImage(),
    title: getRandomCity(),
    author: getRandomName(),
  },
];


class ComingBox extends Component {

  render() {
    return (
        <div className="coming-box">
          <GridList
              cellHeight={180}
              className="grid-list"
          >
            <Subheader>Novembre</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span><b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={tile.img} />
                </GridTile>
            ))}

            <Subheader>Décembre</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span><b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={tile.img} />
                </GridTile>
            ))}
          </GridList>
        </div>
    );
  }
}

export default ComingBox;
