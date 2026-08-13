# pi-dialogue-only

A tiny [Pi](https://github.com/earendil-works/pi) extension that hides tool calls, tool output, and temporary output paths from the interactive transcript. The TUI stays focused on user and assistant messages.

## Install

```bash
pi install git:github.com/Afgkwyp/pi-dialogue-only
```

Restart Pi, or run `/reload`.

## Remove

```bash
pi remove git:github.com/Afgkwyp/pi-dialogue-only
```

Restart Pi, or run `/reload`.

## Important

- Display-only: tools still run, and their results remain available to Pi and in the session history.
- Tool errors are hidden too. Disable this extension while troubleshooting.
- This uses Pi's internal `ToolExecutionComponent`, because Pi currently has no public API for globally hiding every tool row. It was tested with `@earendil-works/pi-coding-agent` 0.84.1 and may require an update after Pi changes its internal TUI structure.

## License

MIT
