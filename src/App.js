'use strict';
import React from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

// Renderizando componentes utilizando Classes
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Search />
				<div className="container">
					<UserInfo />
					<Actions />
					<Repos
						className="repos box-wrapper"
						title="Repositório:"
						repos={[
							{
								name: 'Nome do repositório',
								link: '#'
							},
							{
								name: 'Nome do repositório',
								link: '#'
							},
							{
								name: 'Nome do repositório',
								link: '#'
							},
							{
								name: 'Nome do repositório',
								link: '#'
							}
						]}
					/>
					<Repos
						className="starred box-wrapper"
						title="Favoritos:"
						repos={[
							{
								name: 'Nome do repositório',
								link: '#'
							},
							{
								name: 'Nome do repositório',
								link: '#'
							},
							{
								name: 'Nome do repositório',
								link: '#'
							},
							{
								name: 'Nome do repositório',
								link: '#'
							}
						]}
					/>
				</div>
			</div>
		);
	}
}

export default App;
