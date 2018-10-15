import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import templates
import { Home } from '../templates/Home';
import { _404 } from '../templates/Errors';
import { Header } from '../templates/Header';
import { Footer } from '../templates/Footer';

// import components
import { Government } from './Government';
import { Vehicle } from './Vehicle';
import { Journey } from './Journey';

export class App extends React.Component {
	render() {
		return (
			<div>
				<Header />

				{/* TODO: refactor below in Main component */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/government" component={Government} />
					<Route exact path="/vehicle" component={Vehicle} />
					<Route exact path="/journey" component={Journey} />

					{/* default route: page not found */}
					<Route component={_404} />
				</Switch>

				<Footer />
			</div>
		);
	}
}
