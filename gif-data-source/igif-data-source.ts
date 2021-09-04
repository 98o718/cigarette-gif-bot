export interface IGifDataSource {
	get(): Promise<string>;
}
