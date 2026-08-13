import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

export default async function (pi: ExtensionAPI) {
	const modulePath = join(
		dirname(process.argv[1]),
		"modes",
		"interactive",
		"components",
		"tool-execution.js",
	);
	const { ToolExecutionComponent } = await import(pathToFileURL(modulePath).href);
	const prototype = ToolExecutionComponent.prototype as { render(width: number): string[] };
	const originalRender = prototype.render;
	const hiddenRender = () => [];

	prototype.render = hiddenRender;
	pi.on("session_shutdown", () => {
		if (prototype.render === hiddenRender) prototype.render = originalRender;
	});
}
