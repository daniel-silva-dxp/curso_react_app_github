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
	getRepos(type) {
		return (e) => {
			fetch(`https://api.github.com/users/daniel-silva-dxp/${type}`).then((data) => data.json()).then((repo) => {
				this.setState({
					[type]: repo.map((data) => {
						return {
							name: data.name,
							id: data.id,
							link: data.html_url
						};
					})
				});
			});
		};
	}
	render() {
		return (
			<AppContent
				userInfo={this.state.userInfo}
				repos={this.state.repos}
				starred={this.state.starred}
				handleSearch={(e) => this.handleSearch(e)}
				getRepos={this.getRepos('repos')}
				getStarreds={this.getRepos('starred')}
			/>
		);
	}
}

export default App;
