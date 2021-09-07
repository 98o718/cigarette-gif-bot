import { SlackImageMessage, SlackResponseType } from './slack-message-types';

export function makeSlackImageMessage(imageSrc: string, tag: string): SlackImageMessage {
	return {
		response_type: SlackResponseType.InChannel,
		blocks: [
			{
				type: 'image',
				image_url: imageSrc,
				alt_text: `${tag} gif`,
			}
		]
	};
}
