import React from 'react'
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../actions/registerActions';
import { addFlashMessage } from '../actions/flashMessages';

class SignupPage extends React.Component {

  render() {

    const { userRegisterRequest, addFlashMessage } = this.props;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userRegisterRequest={userRegisterRequest} addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}


export default connect(null, { userRegisterRequest, addFlashMessage }) (SignupPage);
