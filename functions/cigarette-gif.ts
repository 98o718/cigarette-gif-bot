import { Handler } from "@netlify/functions";

import { GiphyGifDataSource } from '../gif-data-source/giphy-gif-data-source';

const handler: Handler = async (event, context) => {
	try {
		const src = await new GiphyGifDataSource().get();
	
		return {
			statusCode: 200,
			body: JSON.stringify({ src: src }),
		};
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';

		return {
			statusCode: 500,
			body: JSON.stringify({ error: message }),
		}
	}
};

export { handler };
