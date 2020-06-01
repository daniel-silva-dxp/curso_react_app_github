'use strict';
import React from 'react';
import AppContent from './components/app-content';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInfo: {
				username: 'Daniel Silva',
				userimg: 'https://avatars1.githubusercontent.com/u/16245261?v=4',
				userlogin: 'daniel-silva-dxp',
				userrepos: 45,
				userfollowers: 4,
				userfollowing: 15
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
