import * as React from 'react';
import { connect } from 'react-redux';
import { Employee } from '../models';
import * as actions from '../actions';
import Header from './header';

class Detail extends React.Component<{ dispatch: any, employee: Employee, back: Function}, {}> {
    render() {
        const { employee } = this.props;

        return (
            <div>
                <Header />
                <address style={{margin: '20px'}}>
                    <strong>{employee.firstName} {employee.lastName}</strong><br />
                    <span className="lead">Software Engineer - Data Team</span><br />
                    <abbr title="Phone">P:</abbr>{employee.phone}<br />
                    <a href={`mailto:${employee.email}`}>{employee.email}</a><br />
                    <a href={`https://illuminate.slack.com/messages/${employee.slack}/`}><img src="img/slack.png" height="24" width="24" /></a>
                    <a href="#"><img src="img/hangout.png" height="20" width="20" /></a>
                    <blockquote>
                        <p>If then else then if.</p>
                        <footer>Inspiring quote from someone in <cite>Illuminate</cite></footer>
                    </blockquote>
                </address>
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        back: () => dispatch(actions.clearEmployee())
    }))(Detail)
