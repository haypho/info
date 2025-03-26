import { useEffect, useRef } from "react";
import {
  forceCollide,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type SimulationNodeDatum,
} from "d3-force";
import { scaleOrdinal } from "d3-scale";
import { schemeTableau10 } from "d3-scale-chromatic";
import { pointer, select } from "d3-selection";

type Node = SimulationNodeDatum & {
  r: number;
  label: string;
};

const MAX_RADIUS = 250;

const NODES: Node[] = [
  { index: 0, label: "pointer", r: MAX_RADIUS },
  {
    index: 1,
    label: "TypeScript",
    r: MAX_RADIUS,
  },
  {
    index: 2,
    label: "JavaScript",
    r: MAX_RADIUS,
  },
  {
    index: 3,
    label: "HTML",
    r: MAX_RADIUS - 50,
  },
  {
    index: 4,
    label: "CSS",
    r: MAX_RADIUS - 100,
  },
  {
    index: 5,
    label: "Java",
    r: MAX_RADIUS - 100,
  },
  {
    index: 6,
    label: "C#",
    r: MAX_RADIUS - 100,
  },
  {
    index: 7,
    label: "Python",
    r: MAX_RADIUS - 150,
  },
];

export function CodingLanguages() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const { width, height } = canvas.getBoundingClientRect() ?? {};
    if (!width || !height) return;

    const scale = window.devicePixelRatio || 1;
    context.scale(scale, scale);
    canvas.width = width * scale;
    canvas.height = height * scale;

    const color = scaleOrdinal(schemeTableau10);
    const simulation = forceSimulation(NODES)
      .alphaTarget(0.3)
      .velocityDecay(0.1)
      .force("x", forceX().strength(0.01))
      .force("y", forceY().strength(0.01))
      .force(
        "collide",
        forceCollide<Node>()
          .radius((node) => node.r + 1)
          .iterations(3),
      )
      .force(
        "charge",
        forceManyBody().strength((_, index) => (index ? 0 : (-width * 2) / 3)),
      )
      .on("tick", () => {
        context.clearRect(0, 0, width * scale, height * scale);
        context.save();
        context.translate((width / 2) * scale, (height / 2) * scale);
        for (const node of NODES) {
          if (node.index === undefined) continue;
          if (node.index === 0) continue; // NOTE: skip rendering pointer
          if (node.x === undefined) continue;
          if (node.y === undefined) continue;

          context.beginPath();
          context.moveTo(node.x + node.r, node.y);
          context.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
          context.fillStyle = color(node.index.toString());
          context.fill();
          context.font = "bold 42px Arial";
          context.fillStyle = "white";
          context.textAlign = "center";
          context.fillText(node.label, node.x, node.y);
        }
        context.restore();
      });

    select(canvas)
      .on("touchmove", (event) => event.preventDefault())
      .on("pointermove", (event) => {
        const [x, y] = pointer(event);
        NODES[0].fx = x - width / 2;
        NODES[0].fy = y - height / 2;
      });

    return () => {
      simulation.stop();
    };
  }, []);

  return <canvas ref={canvasRef} className="rounded w-full h-full" />;
}
