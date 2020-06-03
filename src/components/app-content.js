'use strict';
import React, { PropTypes } from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';
import RenderMessage from './renderMessage';

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarreds, message, isFetching }) => {
	return (
		<div className="app">
			<Search isDisabled={isFetching} handleSearch={handleSearch} />
			<div className="container">
				{isFetching && <div>Carregando...</div>}
				{!!userInfo && <UserInfo userInfo={userInfo} />}
				{!!userInfo && <Actions getRepos={getRepos} getStarreds={getStarreds} />}
				{!!repos.length && <Repos className="repos box-wrapper" title="Repositório:" repos={repos} />}
				{!!starred.length && <Repos className="starred box-wrapper" title="Favoritos:" repos={starred} />}
				{!!!userInfo && <RenderMessage>{message}</RenderMessage>}
			</div>
		</div>
	);
};

AppContent.propType = {
	userInfo: PropTypes.object,
	repos: PropTypes.array.isRequired,
	starred: PropTypes.array.isRequired,
	handleSearch: PropTypes.func.isRequired,
	getRepos: PropTypes.func.isRequired,
	getStarreds: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired
};

export default AppContent;
