import React, { Component } from 'react';
import ImagesList from 'src/components/ImagesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import imagesListActions from 'src/actions/images-list';
import { selectImages } from 'src/selectors/imagesListSelectors';

import PropTypes from 'prop-types';

class ImagesListContainer extends Component {
  componentDidMount() {
    const {
      actions: { getImages },
    } = this.props;
    getImages();
  }

  render() {
    console.log(this.props);
    const {
      imagesList: { data: images },
    } = this.props;
    return <ImagesList images={images} />;
  }
}

function mapStateToProps(state) {
  return {
    imagesList: selectImages(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...imagesListActions,
      },
      dispatch,
    ),
  };
}

ImagesListContainer.propTypes = {
  actions: PropTypes.shape({
    getImages: PropTypes.func.isRequired,
  }),
  imagesList: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesListContainer);
