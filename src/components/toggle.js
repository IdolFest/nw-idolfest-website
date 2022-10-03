import React, { Component } from 'react'
import ToggleDisplay from 'react-toggle-display'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
class Toggle extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
 
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
 
  render() {
    return (
      <div onClick={ () => this.handleClick() }>
        <span>
          <FontAwesomeIcon icon={['fas', 'caret-right']} style={{ marginRight: '3px' }}/> 
          {!this.state.show ? this.props.title : ''}
        </span>
        <ToggleDisplay show={this.state.show}>
          {this.props.content}
        </ToggleDisplay>
      </div>
    );
  }
}
 
export default Toggle;