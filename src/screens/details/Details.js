import React from 'react';
import PropTypes from 'prop-types';
import data from '../../feed/data.json';
import Picture from '../../components/Picture';

const propTypes = {};

const defaultProps = {};

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params
    const details = data.find((val) => val.id === parseInt(id))
    console.log(details.image)
    this.setState({details: details})
  }

  render() {
    const { tag, image, slug, title } = this.state.details
    return (
      <div className="row">
        <div className="col-auto image-col">
          <div className="image-container">
            <div className="tag">{ tag }</div>
            <Picture img={ image } slug={ slug } />
          </div>
        </div>
        <div className="col offset-lg-1 detail-col">
          <h1>{ title }</h1>
        </div>
      </div>
    );
  }
}

 Details.propTypes = propTypes;
 Details.defaultProps = defaultProps;