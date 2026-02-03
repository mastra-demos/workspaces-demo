# workspaces-demo

A demo project showcasing Mastra workspaces and skills with different capability levels. Uses Anthropic's Claude models.

## Getting Started

1. Install dependencies:

```shell
npm install
```

2. Copy the example environment file and add your Anthropic API key:

```shell
cp .env.example .env
```

Then edit `.env` and add your [Anthropic API key](https://console.anthropic.com/).

3. Start the development server:

```shell
npm run dev
```

Open [http://localhost:4111](http://localhost:4111) in your browser to access [Mastra Studio](https://mastra.ai/docs/getting-started/studio).

## Agents

This project includes two agents that demonstrate how workspace capabilities affect what an agent can do.

### diagram-agent.ts (Full Capabilities)

- **Workspace:** `diagram-workspace`
- **Skills:** `mastra`, `beautiful-mermaid`
- **Filesystem:** ✅ Can read/write files
- **Sandbox:** ✅ Can execute scripts

This agent has full capabilities. It can create Mermaid diagrams, write `.mmd` files, and run the render script to produce SVG output.

### no-sandbox-agent.ts (Limited Capabilities)

- **Workspace:** `no-sandbox-workspace`
- **Skills:** `mastra`, `beautiful-mermaid`
- **Filesystem:** ✅ Can read/write files
- **Sandbox:** ❌ Cannot execute scripts

This agent can access skills and write files, but cannot execute scripts. When asked to render a diagram, it can only write the `.mmd` file—it cannot run the render script to produce an SVG.

## Example Prompt

Try this prompt with both agents to see the difference:

> Create a diagram explaining how Mastra workspace skills can be used

- **diagram-agent:** Will render the diagram directly to SVG
- **no-sandbox-agent:** Can only write the `.mmd` file, cannot run the render script to produce SVG

To clean up generated SVG files between tests:

```shell
npm run clean
```

## Skills

Both agents have access to the same skills in `/skills`:

- [**mastra**](https://skills.sh/mastra-ai/skills/mastra) - Knowledge about Mastra framework concepts
- [**beautiful-mermaid**](https://skills.sh/intellectronica/agent-skills/beautiful-mermaid) - Tools and instructions for rendering Mermaid diagrams to SVG