import fetch from 'node-fetch';
import { config } from 'dotenv';

import { IGifDataSource } from './igif-data-source';

interface GiphyRandomGifResponse {
	data: { 
		images: {
			downsized: {
				url: string;
			}
		}
	};
}

config();

export class GiphyGifDataSource implements IGifDataSource {
	public async get(): Promise<string> {
		if (process.env.GIPHY_API_KEY === undefined) {
			throw new Error('Api key is not provided');
		}

		const url = new URL('random', 'https://api.giphy.com/v1/gifs/');
		url.searchParams.append('api_key', process.env.GIPHY_API_KEY);
		url.searchParams.append('tag', 'cigarette');

		const response = await fetch(url.href);
		const json = await response.json() as GiphyRandomGifResponse;

		return json.data.images.downsized.url;
	}
}
