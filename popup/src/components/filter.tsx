import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Filter extends React.Component<{ dispatch: any }, {}> {
    onComponentChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.props.dispatch(actions.filter(e.currentTarget.value));
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
                    <div className="input-group">
                        <div className="input-group-addon"></div>
                        <input type="text" className="form-control" onChange={this.onComponentChange} id="exampleInputAmount" placeholder="Look for..." />
                        <div className="input-group-addon"></div>
                    </div>
                </div>
            </form>
        )
    }
}

export default connect()(Filter);