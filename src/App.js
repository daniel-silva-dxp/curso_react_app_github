'use strict';
import React from 'react';
import AppContent from './components/app-content';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInfo: {
				username: 'Daniel Silva',
				photo: 'https://avatars1.githubusercontent.com/u/16245261?v=4',
				login: 'daniel-silva-dxp',
				repos: 45,
				followers: 4,
				following: 15
			},
			repos: [ { name: 'Nome do repositório', link: '#' } ],
			starred: [ { name: 'Nome do repositório', link: '#' } ]
		};
	}
	render() {
		return <AppContent userInfo={this.state.userInfo} repos={this.state.repos} starred={this.state.starred} />;
	}
}

export default App;
