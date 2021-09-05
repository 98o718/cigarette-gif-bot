import { Handler } from "@netlify/functions";

import { GiphyGifDataSource } from '../gif-data-source/giphy-gif-data-source';
import { makeSlackImageMessage } from '../slack-messages/slack-message-maker';

const handler: Handler = async () => {
	try {
		const src = await new GiphyGifDataSource().get();

		const message = makeSlackImageMessage(src);
	
		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(message),
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
