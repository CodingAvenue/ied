import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure }from './store';
import Main from './components/main';

const store = configure();

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Main />
		</div>
	</Provider>,
	document.getElementById('app-entry')
);
