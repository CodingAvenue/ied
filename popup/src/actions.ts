import * as types from './types';
import { Employee } from './models';

export const filter = (key: string) => ({ 
    type: types.SET_FILTER, 
    payload: key
});

export const viewEmployee = (emp: Employee) => ({
    type: types.SET_EMPLOYEE,
    payload: emp
});

export const clearEmployee = () => ({ type: types.CLEAR_EMPLOYEE });