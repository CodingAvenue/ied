import * as React from 'react';
import { connect } from 'react-redux';
import { Employee } from '../models';
import * as actions from '../actions';

class List extends React.Component<{ dispatch: any, employees: Array<Employee>, filter: string }, {}> {
    static getFilteredEmployees(employees: Array<Employee>, filter: string) {
        const sub = new RegExp(filter, 'i');

        const filteredEmployees = employees.filter((e: Employee) => {
            return sub.test(e.firstName) || sub.test(e.lastName);
        });

        return filteredEmployees;
    }

    viewEmployee = (emp: Employee) => this.props.dispatch(actions.viewEmployee(emp));

    render() {
        const { employees, filter } = this.props;

        return (
            <ul className="nav nav-pills nav-stacked">
                {List.getFilteredEmployees(employees, filter).map((e: Employee) => 
                <li role="presentation">
                    <a onClick={evt => this.viewEmployee(e)}>{e.lastName}, {e.firstName}</a>
                </li>)}
            </ul>
        );
    }
}

export default connect(state => ({
    employees: state.employees,
    filter: state.filter
}))(List);