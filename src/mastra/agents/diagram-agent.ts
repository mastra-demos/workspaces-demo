// diagram-agent.ts
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { diagramWorkspace } from "../workspace/diagram-workspace";

export const diagramAgent = new Agent({
  id: "diagram-agent",
  name: "Diagram Agent",
  instructions: `You create Mermaid diagrams as SVG files.

Command template:
npx tsx skills/beautiful-mermaid/scripts/render.ts --code "graph TD; A-->B" --output svg/YOUR_NAME --theme dracula

Required parameters:
--theme dracula
--output svg/YOUR_NAME

Flowcharts must use "graph TD" (top-down direction).
Keep diagrams narrow and vertical:
- No side-by-side subgraphs
- No parallel branches - use sequential flow
- Short node labels (max 3-4 words)

Skip all HTML/PNG/agent-browser steps.

Reply only: "Created svg/YOUR_NAME.svg"
`,
  model: "anthropic/claude-sonnet-4-20250514",
  workspace: diagramWorkspace,
  memory: new Memory({
    options: {
      lastMessages: 10
    }
  })
});
