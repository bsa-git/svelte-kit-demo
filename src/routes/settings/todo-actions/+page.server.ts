import { fail } from "@sveltejs/kit";
import * as db from "$lib/service-helpers/database";
import type { PageServerLoad, Actions } from "./$types";
import { inspector } from "$lib/sys/util";
export const prerender = false;

const isDebug = false;

/**
 * @type {import('./$types').PageServerLoad}
 */
export const load: PageServerLoad = ({ cookies }) => {
  let id = cookies.get("userid");

  if (!id) {
    id = crypto.randomUUID();
    cookies.set("userid", id, { path: "/" });
  }
  if (id && true) console.log("PageServer.ts (setting/todo-actions).load: OK");

  const todos = db.getTodos(id);
  if (todos && isDebug)
    inspector("PageServer.ts (setting/todo-actions).load:", todos);

  return { todos };
};

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  create: async ({ cookies, request }) => {
    if (request && true)
      console.log("PageServer.ts (setting/todo-actions).actions.create: OK");
    const data = await request.formData();
    const userid = cookies.get("userid");
    let description = data.get("description")?.toString();

    try {
      if (userid && description) {
        db.createTodo(userid, description);
        if (userid && isDebug)
          inspector(
            "PageServer.ts (setting/todo-actions).actions.create:",
            db.getTodos(userid)
          );
      }
    } catch (error: any) {
      return fail(422, {
        description: data.get("description"),
        error: error?.message,
      });
    }
  },
  delete: async ({ cookies, request }) => {
    if (request && true)
      console.log("PageServer.ts (setting/todo-actions).actions.delete: OK");
    const data = await request.formData();
    const userid = cookies.get("userid")?.toString();
    const id = data.get("id")?.toString();
    if (userid && id) {
      db.deleteTodo(userid, id);
      if (userid && isDebug)
        inspector(
          "PageServer.ts (setting/todo-actions).actions.delete:",
          db.getTodos(userid)
        );
    }
  },
};
