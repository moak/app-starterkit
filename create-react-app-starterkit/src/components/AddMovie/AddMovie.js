import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // this.props.handleAddMovie()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }
  render() {
    const { handleAddMovie } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input type="text" name="title" onChange={this.handleChange} />
          Description:
          <input type="text" name="description" onChange={this.handleChange} />

          <button type="submit" >Add</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  handleAddMovie: React.PropTypes.func,
};


export default AddMovie;
