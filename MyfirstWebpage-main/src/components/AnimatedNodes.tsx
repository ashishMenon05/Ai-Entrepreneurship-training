import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
}

export const AnimatedNodes = () => {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(217, 91%, 60%)", // blue
      "hsl(270, 60%, 55%)", // purple
      "hsl(185, 85%, 50%)", // cyan
      "hsl(45, 100%, 60%)", // gold
    ];

    const newNodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            backgroundColor: node.color,
            boxShadow: `0 0 ${node.size * 3}px ${node.color}`,
            animationDelay: `${node.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="100%" stopColor="hsl(270, 60%, 55%)" />
          </linearGradient>
        </defs>
        {nodes.slice(0, 6).map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <line
              key={`line-${node.id}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode?.x || 50}%`}
              y2={`${nextNode?.y || 50}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
            />
          );
        })}
      </svg>
    </div>
  );
};
