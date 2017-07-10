import * as types from './types';
import { Employee } from './models';

//todo: Should be coming from API
const employees: Array<Employee> = [
    { lastName: 'Macalalag', firstName: 'Sandae', id: 3, slack: '@sandaemc', phone: '123-456-789', email: 'sandae.macalalag@codingavenue.com' },
    { lastName: 'Suarez', firstName: 'Jerome', id: 2, slack: '@jsuarez', phone: '234-567-890', email: 'jerome.suarez@codingavenue.com' },
    { lastName: 'Labrador', firstName: 'Nino', id: 4, slack: '@nlabrador', phone: '345-678-901', email: 'nino.labrador@codingavenue.com' },
    { lastName: 'Basilio', firstName: 'Taylor', id: 1, slack: '@tbasilio', phone: '456-789-012', email: 'taylor.basilio@codingavenue.com' },
];

interface Action {
    type: string;
    payload: any;
}

export const employeesReducer = (state: Array<Employee> = employees, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const employeeReducer = (state: Employee = null, action: Action) => {
    switch (action.type) {
        case types.SET_EMPLOYEE:
            return action.payload;
        case types.CLEAR_EMPLOYEE:
            return null;
        default:
            return state;
    }
}

export const employeeFilterReducer = (state: string = '', action: Action) => {
    switch (action.type) {
        case types.SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}