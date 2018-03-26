import request from '../utils/request';

/*登陆*/
export async function Userlogin(params) {
	return request(`/user/login`, {
		method: 'POST',
		body: params
	});
}