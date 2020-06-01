'use strict';
import React, { PropTypes } from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userInfo, repos, starred }) => {
	return (
		<div className="app">
			<Search />
			<div className="container">
				{!!userInfo && <UserInfo userInfo={userInfo} />}
				{!!userInfo && <Actions />}

				{!!repos.length && <Repos className="repos box-wrapper" title="Repositório:" repos={repos} />}

				{!!starred.length && <Repos className="starred box-wrapper" title="Favoritos:" repos={starred} />}
			</div>
		</div>
	);
};

AppContent.propType = {
	userInfo: PropTypes.object,
	repos: PropTypes.array.isRequired,
	starred: PropTypes.array.isRequired
};

export default AppContent;
