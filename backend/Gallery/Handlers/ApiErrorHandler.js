const ApiError = require("./ApiError")

const apiErrorHandler = (err, req, res, next) => {
	if (err instanceof ApiError){
		res.status(err.code).json(err.message)
	}
}

module.exports = apiErrorHandler;