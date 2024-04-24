// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const database = new Map();
/**
 * @type Todo
 */
type Todo = {
  userid?: string,
  id?: string,
  description?:string,
  done?: boolean
}

/**
 * @method getTodos
 * @param userid {String}
 * @returns any[]
 */
export function getTodos(userid: string|undefined): any[] {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}

	return Array.from(database.get(userid).values());
}

/**
 * @method createTodo
 * @param todo {Todo} // { userid, description }
 * @returns {Object}  // { id }
 */
export function createTodo(todo: Todo): Todo {  
	if (!database.has(todo.userid)) {
		database.set(todo.userid, new Map());
	}

	const todos = database.get(todo.userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description: todo.description,
		done: false
	});

	return {
		id
	};
}

/**
 * @method toggleTodo
 * @param todo {Todo} // { userid, id, done }
 */
export function toggleTodo(todo: Todo) {
	const todos = database.get(todo.userid);
	todos.get(todo.id).done = todo.done;
}

/**
 * @method deleteTodo
 * @param todo {Todo} // { userid, id }
 */
export function deleteTodo(todo: Todo) {
	const todos = database.get(todo.userid);
	todos.delete(todo.id);
}