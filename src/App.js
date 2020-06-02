'use strict';
import React from 'react';
import AppContent from './components/app-content';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInfo: null,
			repos: [],
			starred: []
		};
	}
	handleSearch(e) {
		const value = e.target.value;
		const keyCode = e.which || e.keyCode;
		const ENTER = 13;

		if (keyCode === ENTER) {
			if (value) {
				fetch(`https://api.github.com/users/${value}`).then((data) => data.json()).then((data) => {
					this.setState({
						userInfo: {
							username: data.name,
							photo: data.avatar_url,
							login: data.login,
							repos: data.public_repos,
							followers: data.followers,
							following: data.following
						}
					});
				});
			} else {
				this.setState({ userInfo: null });
			}
		}
	}
	render() {
		return (
			<AppContent
				userInfo={this.state.userInfo}
				repos={this.state.repos}
				starred={this.state.starred}
				handleSearch={(e) => this.handleSearch(e)}
			/>
		);
	}
}

export default App;
