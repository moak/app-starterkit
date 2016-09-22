import React from 'react';

import classnames from 'classnames';
import map from 'lodash/map';
import timezones from '../data/timezones';
import validateInput from '../../server/shared/validations/register'
import TextFieldGroup from './common/TextFieldGroup';

import { browserHistory } from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value});
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if  (!isValid) {
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()){
      this.setState({errors : {}, isLoading: true})

      this.props.userRegisterRequest(this.state).then(
        (res) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have regisred ! welcome'
          })
          browserHistory.push('/');
        },
        (err) => {

          this.setState({errors : err.response.data, isLoading: false})
        }
      );
    }
  }

  render() {

    const { errors } = this.state;

    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    )

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register</h1>

        <TextFieldGroup
          field="email"
          value={this.state.email}
          error={errors.email}
          label="Email"
          type="text"
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          value={this.state.password}
          error={errors.password}
          label="Password"
          type="password"
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="passwordConfirmation"
          value={this.state.passwordConfirmation}
          error={errors.passwordConfirmation}
          label="password confirmation"
          type="password"
          onChange={this.onChange}
        />

        <div className={classnames("form-group", { 'has-error': errors.timezone})}>
          <label className="control-label">Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className="form-control"
          >
          <option value="" disabled>Choose your timeone</option>
          {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>
        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default SignupForm;
