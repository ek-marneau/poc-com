import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'styles/pictures/personne-1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '../styles/pictures/personne-2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'styles/pictures/personne-3.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'styles/pictures/personne-4.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'styles/pictures/personne-5.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'styles/pictures/personne-6.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
];


class ComingBox extends Component {

  render() {
    return (
        <div style={styles.root}>
          <GridList
              cellHeight={180}
              style={styles.gridList}
          >
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
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
