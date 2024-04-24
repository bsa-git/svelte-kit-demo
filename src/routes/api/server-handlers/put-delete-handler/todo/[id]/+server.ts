import { json } from '@sveltejs/kit';
import * as database from '$lib/service-helpers/database2';
import type { RequestHandler } from './$types';
import { inspector } from '$lib/sys/util'

const isDebug = false;

export const POST: RequestHandler = async ({ request, cookies }) => {
	
  if(cookies && true) console.log("Server.ts (api/server-handlers/put-delete-handler/todo/[id]).put: OK");
  
  const { description } = await request.json();

	const userid = cookies.get('userid');
	const { id } = database.createTodo({ userid, description });

  const todos = database.getTodos(userid);

  if(cookies && isDebug) inspector("Server.ts (api/server-handlers/post-handler/todo).post.todos:", todos);

	return json({ id }, { status: 201 });
}

export const PUT: RequestHandler = async ({ params, request, cookies }) => {

  if(cookies && true) console.log("Server.ts (api/server-handlers/put-delete-handler/todo/[id]).put: OK");

	const { done } = await request.json();
	const userid = cookies.get('userid');

	database.toggleTodo({ userid, id: params.id, done });

  const todos = database.getTodos(userid);
  if(cookies && isDebug) inspector("Server.ts (api/server-handlers/put-delete-handler/todo/[id]).put.todos:", todos);

	return new Response(null, { status: 204 });
}

export const DELETE: RequestHandler = async ({ params, cookies }) => {

  if(cookies && true) console.log("Server.ts (api/server-handlers/put-delete-handler/todo/[id]).delete: OK");

	const userid = cookies.get('userid');

	database.deleteTodo({ userid, id: params.id });

  const todos = database.getTodos(userid);
  if(cookies && isDebug) inspector("Server.ts (api/server-handlers/put-delete-handler/todo/[id]).delete.todos:", todos);

	return new Response(null, { status: 204 });
}
