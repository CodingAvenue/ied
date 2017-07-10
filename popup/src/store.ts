import { createStore, combineReducers } from 'redux';
import { employeeFilterReducer, employeesReducer, employeeReducer } from './reducers';

export const configure = () => 
    createStore(combineReducers({
        filter: employeeFilterReducer,
        employees: employeesReducer,
        employee: employeeReducer
    }));