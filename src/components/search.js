'use strict';
import React, { PropTypes } from 'react';

const Search = ({ handleSearch, isDisabled }) => {
	return (
		<div className="search box-wrapper">
			<input
				type="search"
				placeholder="Digite o nome do usuário do Github"
				onKeyUp={handleSearch}
				disabled={isDisabled}
			/>
		</div>
	);
};

Search.propType = {
	handleSearch: PropTypes.func.isRequired
};
export default Search;
