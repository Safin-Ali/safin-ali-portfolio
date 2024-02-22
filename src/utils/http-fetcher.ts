class HttpFetch {
	private base_url:string
	constructor(baseUrl:string) {
		this.base_url = baseUrl;
	}

	public async get (path:string,option?:RequestInit):Promise<Response> {
		const res = (await fetch (`${this.base_url}${path}`,{
			...option,
			method:'GET'
		}))
		return res;
	};
	public async post (path:string,option?:RequestInit):Promise<Response> {
		const res = (await fetch (`${this.base_url}${path}`,{
			...option,
			method:'POST',
		}))
		return res;
	};
}

export const API = new HttpFetch('https://safin-ali-server.vercel.app/api/');