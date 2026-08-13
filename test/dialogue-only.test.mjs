import assert from "node:assert/strict";
import test from "node:test";
import dialogueOnly from "../extensions/dialogue-only.ts";
import { ToolExecutionComponent } from "./modes/interactive/components/tool-execution.js";

test("hides tool rows and restores them on shutdown", async () => {
  const handlers = new Map();
  await dialogueOnly({ on: (event, handler) => handlers.set(event, handler) });

  const component = new ToolExecutionComponent();
  assert.deepEqual(component.render(80), []);

  handlers.get("session_shutdown")();
  assert.deepEqual(component.render(80), ["visible:80"]);
});
