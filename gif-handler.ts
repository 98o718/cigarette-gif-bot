import { Handler } from '@netlify/functions';

import { GiphyGifDataSource } from './gif-data-source/giphy-gif-data-source';
import { makeSlackImageMessage } from './slack-messages/slack-message-maker';

export function makeGifHandler(tag: string): Handler {
	return async () => {
		try {
			const src = await new GiphyGifDataSource().get(tag);
	
			const message = makeSlackImageMessage(src, tag);
		
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
}
