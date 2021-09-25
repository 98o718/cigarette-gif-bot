import { SlackImageMessage, SlackResponseType } from './types';

export function makeSlackImageMessage(imageSrc: string, altText: string): SlackImageMessage {
	return {
		response_type: SlackResponseType.InChannel,
		blocks: [
			{
				type: 'image',
				image_url: imageSrc,
				alt_text: altText,
			}
		]
	};
}
