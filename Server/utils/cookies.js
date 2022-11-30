const Band = require("../models/band_model");

const attachCookies = ( res, band ) => {
	const token = band.createJWT();
  
	res.cookie('token', token, {
	  httpOnly: true,
	});
  };

module.exports = attachCookies;