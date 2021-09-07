export interface IGifDataSource {
	get(tag: string): Promise<string>;
}
