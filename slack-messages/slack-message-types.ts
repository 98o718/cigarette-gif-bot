interface SlackImageBlock {
	type: string;
	image_url: string;
	alt_text: string;
}

export const enum SlackResponseType {
	InChannel = 'in_channel',
}

export interface SlackImageMessage {
	response_type: SlackResponseType;
	blocks: SlackImageBlock[];
}
