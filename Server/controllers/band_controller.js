const Band = require("../models/band_model");
const StatusCodes = require("http-status-codes");
const attachCookies = require("../utils/cookies");

const login = async (req, res) => {
	const { email, password } = req.body;
  
  /********** CHECK FOR PRESSENTS OF ALL FEILDS **********/
  if (!email ) {
    throw new BadRequestError("Email is required")
  }

  if (!password) {
    throw new BadRequestError("Password is required")
  }
  
  /********** BAND WITH THIS EMAIL EXIST **********/
  const band = await Band.findOne({ email })
  if (!band) {
    throw new UnauthenticatedError('Invalid email')
  }
  
  /********** PASSWORDS MUST MATCH **********/
  const isPasswordCorrect = await band.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid password')
  }
  attachCookies(res, user);
  res.status(StatusCodes.OK).json({ ok: true, user: { username: band.bandUserName,email: band.email, _id: band["_id"],  } })
}

/********  CREATE BAND  *********/ 
const register = async (req, res) => {
	let band = await Band.create(req.body);
  attachCookies(res, band);
  res.status(StatusCodes.CREATED).json({ ok: true, band: { email: band.email, _id: user["_id"],  } })
}

const logout = async (req, res) => {
    res.cookie('token', 'logout', {
      httpOnly: true,
    });
    res.status(StatusCodes.OK).json({ ok: true });
  }
module.exports = {
    register,
    login,
    // deleteUser,
    logout,
    // showMe
  }