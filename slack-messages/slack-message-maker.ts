import { SlackImageMessage } from './slack-message-types';

export function makeSlackImageMessage(imageSrc: string): SlackImageMessage {
	return {
		blocks: [
			{
				type: 'image',
				image_url: imageSrc,
				alt_text: 'Cigarette gif'
			}
		]
	};
}
