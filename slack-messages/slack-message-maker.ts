import { SlackImageMessage, SlackResponseType } from './slack-message-types';

export function makeSlackImageMessage(imageSrc: string): SlackImageMessage {
	return {
		response_type: SlackResponseType.InChannel,
		blocks: [
			{
				type: 'image',
				image_url: imageSrc,
				alt_text: 'Cigarette gif'
			}
		]
	};
}
