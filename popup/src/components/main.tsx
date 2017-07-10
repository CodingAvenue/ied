import * as React from 'react';
import { connect } from 'react-redux';
import List from './list';
import Filter from './filter';
import Detail from './detail';
import { Employee } from '../models';

class Main extends React.Component<{ dispatch: any, employee: Employee }, {}> {
    render() {
        if (this.props.employee !== null) {
            return <Detail />;
        } else {
            return (
                <div>
                    <Filter />
                    <List />
                </div>
            );
        }
    }
}

export default connect(state => state)(Main);