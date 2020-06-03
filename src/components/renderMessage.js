'use strict';
import React, { PropTypes } from 'react';

const RenderMessage = ({ children }) => {
	return <div className="box-wrapper box-padding">{children}</div>;
};

RenderMessage.propType = {
	children: PropTypes.string.isRequired
};

export default RenderMessage;
