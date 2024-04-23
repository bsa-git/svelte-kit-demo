import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const GET:RequestHandler = () => {
	const number = Math.floor(Math.random() * 6) + 1;

	return json(number);
}