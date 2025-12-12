"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import TetrisLoading from "./tetris-loader";

interface TreeNode {
  id: number;
  value: string;
  x: number;
  y: number;
  left?: TreeNode;
  right?: TreeNode;
}

interface NodeState {
  id: number;
  status: "idle" | "active" | "visited";
}

interface BarProps {
  index: number;
  total: number;
  baseHeight: number;
}

const AnimatedBar: React.FC<BarProps> = ({ index, total, baseHeight }) => {
  const [height, setHeight] = useState(baseHeight);
  const angle = (index / total) * 360;
  const radius = 140;

  useEffect(() => {
    const animationSpeed = 800 + Math.random() * 400;
    const phaseOffset = Math.random() * Math.PI * 2;

    const animate = () => {
      const time = Date.now() / animationSpeed;
      const wave = Math.sin(time + phaseOffset);
      const newHeight = baseHeight + wave * baseHeight * 0.6;
      setHeight(Math.max(newHeight, baseHeight * 0.4));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [baseHeight]);

  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
  const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

  return (
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
        transformOrigin: "center",
      }}
    >
      <div
        className="rounded-full transition-all duration-100 ease-out"
        style={{
          width: "4px",
          height: `${height}px`,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.4) 100%)",
          boxShadow:
            "0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(255, 255, 255, 0.15)",
        }}
      />
    </div>
  );
};

interface CenterNumberProps {
  value: number;
}

const CenterNumber: React.FC<CenterNumberProps> = ({ value }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => {
        if (prev === 1) return 0.6;
        return 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="text-9xl font-bold transition-opacity duration-300"
        style={{
          opacity,
          color: "#000000",
          textShadow:
            "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",

          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {value}
      </div>
    </div>
  );
};

const FuturisticCircularWatch = ({ num }: { num: number }) => {
  const totalBars = 60;
  const baseHeights = Array.from({ length: totalBars }, (_, i) => {
    const variation = Math.sin(i * 0.3) * 5 + 15;
    return variation;
  });

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative min-w-[300px] min-h-[300px]  border-none rounded-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {baseHeights.map((baseHeight, index) => (
              <AnimatedBar
                key={index}
                index={index}
                total={totalBars}
                baseHeight={baseHeight}
              />
            ))}
            <CenterNumber value={num} />
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(168, 85, 247, 0.05) 100%)",
          }}
        />
      </div>
    </div>
  );
};

const Loader: React.FC = () => {
  const [nodeStates, setNodeStates] = useState<Map<number, NodeState>>(
    new Map()
  );
  const [currentNodeId, setCurrentNodeId] = useState<number | null>(null);
  const [searchPath, setSearchPath] = useState<number[]>([]);
  const [pathIndex, setPathIndex] = useState(0);

  const createBinaryTree = (): TreeNode => {
    const tree: TreeNode = {
      id: 1,
      value: "",
      x: 400,
      y: 80,
      left: {
        id: 2,
        value: "",
        x: 250,
        y: 180,
        left: {
          id: 4,
          value: "",
          x: 150,
          y: 280,
        },
        right: {
          id: 5,
          value: "",
          x: 350,
          y: 280,
        },
      },
      right: {
        id: 3,
        value: "",
        x: 550,
        y: 180,
        left: {
          id: 6,
          value: "",
          x: 450,
          y: 280,
        },
        right: {
          id: 7,
          value: "",
          x: 650,
          y: 280,
        },
      },
    };
    return tree;
  };

  const tree = createBinaryTree();

  const getAllNodes = (node: TreeNode | undefined): TreeNode[] => {
    if (!node) return [];
    return [node, ...getAllNodes(node.left), ...getAllNodes(node.right)];
  };

  const allNodes = getAllNodes(tree);

  const getSearchPath = (root: TreeNode): number[] => {
    const path: number[] = [];
    const traverse = (node: TreeNode | undefined) => {
      if (!node) return;
      path.push(node.id);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(root);
    return path;
  };

  useEffect(() => {
    const path = getSearchPath(tree);
    setSearchPath(path);

    const initialStates = new Map<number, NodeState>();
    allNodes.forEach((node) => {
      initialStates.set(node.id, { id: node.id, status: "idle" });
    });
    setNodeStates(initialStates);
  }, []);

  useEffect(() => {
    if (searchPath.length === 0) return;

    const interval = setInterval(() => {
      setPathIndex((prev) => {
        const nextIndex = (prev + 1) % searchPath.length;

        if (nextIndex === 0) {
          const resetStates = new Map<number, NodeState>();
          allNodes.forEach((node) => {
            resetStates.set(node.id, { id: node.id, status: "idle" });
          });
          setNodeStates(resetStates);
          setCurrentNodeId(null);
          return 0;
        }

        const currentId = searchPath[prev];
        const nextId = searchPath[nextIndex];

        setNodeStates((prevStates) => {
          const newStates = new Map(prevStates);
          if (currentId) {
            newStates.set(currentId, { id: currentId, status: "visited" });
          }
          newStates.set(nextId, { id: nextId, status: "active" });
          return newStates;
        });

        setCurrentNodeId(nextId);
        return nextIndex;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [searchPath]);

  const getNodeColor = (nodeId: number): string => {
    const state = nodeStates.get(nodeId);
    if (!state) return "hsl(var(--muted))";

    switch (state.status) {
      case "active":
        return "hsl(var(--destructive))";
      case "visited":
        return "hsl(160, 84%, 39%)";
      default:
        return "hsl(var(--muted))";
    }
  };

  const renderEdge = (from: TreeNode, to: TreeNode | undefined) => {
    if (!to) return null;

    const isActive = currentNodeId === to.id;
    const isVisited = nodeStates.get(to.id)?.status === "visited";

    return (
      <motion.line
        key={`edge-${from.id}-${to.id}`}
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={
          isActive
            ? "hsl(var(--destructive))"
            : isVisited
            ? "hsl(160, 84%, 39%)"
            : "hsl(var(--border))"
        }
        strokeWidth={isActive ? 3 : 2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: isActive ? 1 : isVisited ? 0.8 : 0.4,
        }}
        transition={{
          duration: 0.8,
          pathLength: { duration: 0.8 },
          opacity: { duration: 0.3 },
        }}
      />
    );
  };

  const renderEdges = (node: TreeNode | undefined): React.ReactElement[] => {
    if (!node) return [];

    const edges: React.ReactElement[] = [];

    if (node.left) {
      //@ts-ignore
      edges.push(renderEdge(node, node.left));
      edges.push(...renderEdges(node.left));
    }

    if (node.right) {
      //@ts-ignore
      edges.push(renderEdge(node, node.right));
      edges.push(...renderEdges(node.right));
    }

    return edges;
  };

  const renderNode = (node: TreeNode) => {
    const state = nodeStates.get(node.id);
    const isActive = state?.status === "active";
    const isVisited = state?.status === "visited";

    return (
      <g key={`node-${node.id}`}>
        <AnimatePresence>
          {isActive && (
            <>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={35}
                fill="none"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={8}
                fill="hsl(var(--destructive))"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.3, 0.8],
                  rotate: [0, 360],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />
            </>
          )}
        </AnimatePresence>

        <motion.circle
          cx={node.x}
          cy={node.y}
          r={25}
          fill={getNodeColor(node.id)}
          initial={{ scale: 0 }}
          animate={{
            scale: isActive ? [1, 1.15, 1] : 1,
            boxShadow: isActive
              ? "0 0 20px rgba(239, 68, 68, 0.5)"
              : isVisited
              ? "0 0 15px rgba(16, 185, 129, 0.3)"
              : "none",
          }}
          transition={{
            scale: { duration: 0.4 },
            boxShadow: { duration: 0.3 },
          }}
          style={{
            filter: isActive
              ? "drop-shadow(0 0 10px hsl(var(--destructive)))"
              : isVisited
              ? "drop-shadow(0 0 8px hsl(160, 84%, 39%))"
              : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        />

        <motion.text
          x={node.x}
          y={node.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="hsl(var(--background))"
          fontSize="16"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {node.value}
        </motion.text>
      </g>
    );
  };

  const renderNodes = (node: TreeNode | undefined): React.ReactElement[] => {
    if (!node) return [];
    return [
      renderNode(node),
      ...renderNodes(node.left),
      ...renderNodes(node.right),
    ];
  };

  const getProgressPercentage = (): number => {
    return Math.round((pathIndex / searchPath.length) * 100);
  };
  const tetrisControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const watchControls = useAnimationControls();

  useEffect(() => {
    async function runSequence() {
      await tetrisControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      await svgControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
      await watchControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }

    runSequence();
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center overflow-clip justify-evenly">
      <motion.div
        className="relative w-1/3 h-full mx-auto flex flex-col overflow-hidden"
        initial={{ y: -200, opacity: 0 }}
        animate={tetrisControls}
      >
        <div className="w-full h-full grid place-items-center">
          <TetrisLoading size="xl" speed="normal" />
        </div>
      </motion.div>
      <div className="flex flex-col-reverse w-1/2 border-l-2 border-black min-h-full">
        <motion.div
          className="relative w-full h-1/3 border-t-2 border-black mx-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={svgControls}
        >
          <svg
            viewBox="0 0 800 400"
            className="relative z-10 rounded-2xl h-1/2"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient
                id="activeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="hsl(var(--destructive))" />
                <stop offset="100%" stopColor="#ff6b6b" />
              </linearGradient>

              <linearGradient
                id="visitedGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="hsl(160, 84%, 39%)" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>

            <g>{renderEdges(tree)}</g>
            <g>{renderNodes(tree)}</g>
          </svg>
        </motion.div>
        <motion.div
          className="h-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={watchControls}
        >
          <FuturisticCircularWatch num={getProgressPercentage()} />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
