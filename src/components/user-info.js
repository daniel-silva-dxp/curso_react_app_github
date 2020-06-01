'use strict';
import React from 'react';

const UserInfo = () => {
	return (
		<div className="user-info box-wrapper">
			<img src="https://avatars1.githubusercontent.com/u/16245261?v=4" />
			<div className="wrapper-info">
				<h1>
					<a href="https://github.com/daniel-silva-dxp">Daniel Silva</a>
				</h1>
				<h4>daniel-silva-dxp</h4>
				<ul className="repos-info">
					<li>
						<span>Repositórios</span>
						<span>41</span>
					</li>
					<li>
						<span>Seguidores</span>
						<span>4</span>
					</li>
					<li>
						<span>Seguindo</span>
						<span>5</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserInfo;
