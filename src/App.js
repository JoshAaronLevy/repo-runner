import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import RepositoryState from './services/repository';

import './App.css';

const App = () => {
	return (
		<RepositoryState>
			<Router>
				<div className="App">
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
						</Switch>
					</div>
				</div>
			</Router>
		</RepositoryState>
	);
};

export default App;
