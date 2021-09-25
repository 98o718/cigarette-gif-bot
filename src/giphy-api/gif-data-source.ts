import fetch from 'node-fetch';
import { config } from 'dotenv';

import { GiphyRandomGifResponse } from './types';

config();

export async function fetchRandomGiphyGif(tag: string): Promise<string> {
	if (process.env.GIPHY_API_KEY === undefined) {
		throw new Error('GIPHY api key is not provided');
	}

	if (process.env.GIPHY_BASE_URL === undefined) {
		throw new Error('GIPHY base url is not provided');
	}

	const url = new URL('random', process.env.GIPHY_BASE_URL);
	url.searchParams.append('api_key', process.env.GIPHY_API_KEY);
	url.searchParams.append('tag', tag);

	const response = await fetch(url.href);
	const json = (await response.json()) as GiphyRandomGifResponse;

	return json.data.images.downsized.url;
}
