'use strict';
import React, { PropTypes } from 'react';

const UserInfo = ({ userInfo }) => {
	return (
		<div className="user-info box-wrapper">
			<img src={userInfo.photo} />
			<div className="wrapper-info">
				<h1>
					<a href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a>
				</h1>
				<h4>{userInfo.login}</h4>
				<ul className="repos-info">
					<li>
						<span>Repositórios</span>
						<span>{userInfo.repos}</span>
					</li>
					<li>
						<span>Seguidores</span>
						<span>{userInfo.followers}</span>
					</li>
					<li>
						<span>Seguindo</span>
						<span>{userInfo.following}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

UserInfo.propTypes = {
	userInfo: PropTypes.shape({
		username: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		repos: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired
	})
};

export default UserInfo;
