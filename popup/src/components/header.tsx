import * as React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Header extends React.Component<{ back: Function }, {}> {
    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" onClick={e => this.props.back()}>
                       Back 
                    </a>
                </div>
            </div>
        </nav>;
    }
}

export default connect(
    state => state,
    dispatch => ({ back: () => dispatch(actions.clearEmployee())})
)(Header)