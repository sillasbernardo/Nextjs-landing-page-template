/* Get calltoaction data */
const getCalltoaction = async (req, res, next) => {
	try {
		const calltoactionData = {
			
		}
	} catch (error) {
		res
		.status(500)
		.send(`Error while fetching data from database. Error: ${error}`);
	}
}