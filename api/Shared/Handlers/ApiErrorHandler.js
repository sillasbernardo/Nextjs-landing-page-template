const ApiError = require("./ApiError")

const apiErrorHandler = (err, req, res, next) => {
	if (err instanceof ApiError){
		res.status(err.code).json(err.message)
	}

	res.status(500).json('Something went wrong')
}

module.exports = apiErrorHandler;