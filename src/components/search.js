'use strict';
import React from 'react';

const Search = () => {
	return (
		<div className="search box-wrapper">
			<input
				type="search"
				placeholder="Digite o nome do usuário do Github"
				onKeyUp={(e) => {
					const value = e.target.value;
					const keyCode = e.which || e.keyCode;
					const ENTER = 13;

					if (keyCode === ENTER) {
						fetch(`https://api.github.com/users/${value}`).then((data) => data.json()).then((data) => {
							console.log(data.login);
						});
					}
				}}
			/>
		</div>
	);
};

export default Search;
