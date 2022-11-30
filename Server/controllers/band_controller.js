/*export default class bandController{
    constructor(){
        
    }
    registerBand = async (req,res) => {
        const body = req.body;

        let bandUserName = body.bandUserName;
        let bandName = body.bandName;
        let password = body.password;
        let email = body.email;

        if(!bandUserName || !bandName || !password || !email)
        {
            return res.status(400).json({message: "Nisu poslati svi zahtevi"})
        }
    }
}    */
const Band = require("../models/band_model");
const StatusCodes = require("http-status-codes");

const register = async (req, res) => {
	let band = await band.create(req.body);
  attachCookies(res, band);
  res.status(StatusCodes.CREATED).json({ ok: true, user: { email: band.email, _id: user["_id"],  } })
}


module.exports = {
    register,
    login,
    deleteUser,
    logout,
    showMe
  }