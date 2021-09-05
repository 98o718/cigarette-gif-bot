interface SlackImageBlock {
	type: string;
	image_url: string;
	alt_text: string;
}

export interface SlackImageMessage {
	blocks: SlackImageBlock[];
}
