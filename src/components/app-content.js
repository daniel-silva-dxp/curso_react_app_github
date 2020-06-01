'use strict';
import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = () => {
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
						}
					]}
				/>
			</div>
		</div>
	);
};

export default AppContent;
