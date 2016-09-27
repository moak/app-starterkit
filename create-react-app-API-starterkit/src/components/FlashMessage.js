import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {

    const { type, text } = this.props.message;

    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error',
      })}>
        <a href="#" onClick={this.onClick} className="close" data-dismiss="alert" aria-label="close">&times;</a>
        {text}
      </div>
    )
  }

  onClick()  {
    this.props.deleteFlashMessage(this.props.message.id);
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
}

export default FlashMessage;
