"use client";

import { COMMAND_MAP } from "@/utils/commands";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Terminal() {
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState({ width: 800, height: 450 });
  const [position, setPosition] = useState({ x: 360, y: 250 });
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<React.ReactNode[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!command.trim()) return;

    const input = command.trim();
    const lowerInput = input.toLowerCase();

    setCommandHistory((prev) => [
      ...prev,
      <div key={`input-${prev.length}`} className="flex gap-2">
        <span className="text-green-400 font-semibold">P</span>
        <span>{input}</span>
      </div>,
    ]);

    // Commands
    switch (true) {
      case lowerInput === "help":
        setCommandHistory((prev) => [
          ...prev,
          <div key={`help-${prev.length}`} className="ml-6">
            <div>Available commands:</div>
            <div className="text-white/80">
              help, clear, echo [text], {Object.keys(COMMAND_MAP).join(", ")}
            </div>
          </div>,
        ]);
        break;

      case lowerInput === "clear":
        setCommandHistory([]);
        break;

      case lowerInput.startsWith("echo "):
        setCommandHistory((prev) => [
          ...prev,
          <div key={`echo-${prev.length}`} className="ml-6">
            {input.slice(5)}
          </div>,
        ]);
        break;
      case Boolean(COMMAND_MAP[lowerInput]):
        setCommandHistory((prev) => [
          ...prev,
          <div key={`cmd-${prev.length}`} className="ml-6">
            {COMMAND_MAP[lowerInput]}
          </div>,
        ]);
        break;

      default:
        setCommandHistory((prev) => [
          ...prev,
          <div key={`err-${prev.length}`} className="ml-6 text-red-400">
            Unknown command: {input} use '/help' for knowing the commands
          </div>,
        ]);
    }

    setCommand("");
  };

  return (
    <>
      {hovered ? (
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.1}
          style={{
            width: size.width,
            height: size.height,
            x: position.x,
            y: position.y,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onDragEnd={(e, info) => {
            setPosition({ x: info.point.x, y: info.point.y });
          }}
          className="absolute z-50 rounded-xl bg-neutral-900 shadow-2xl border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-white/10 cursor-move">
            <div className="flex gap-2">
              <span
                onClick={() => {
                  setCommandHistory([]);
                  setHovered(false);
                }}
                className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"
              />
              <span
                onClick={() => {
                  setHovered(false);
                  setPosition({ x: 360, y: 250 });
                  setSize({
                    width: 800,
                    height: 450,
                  });
                }}
                className="h-3 w-3 rounded-full cursor-pointer bg-yellow-400"
              />
              <span
                onClick={() => {
                  setPosition({ x: 0, y: 0 });
                  setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                  });
                }}
                className="h-3 w-3 cursor-pointer rounded-full bg-green-500"
              />
            </div>

            <div className="text-sm font-semibold text-white/80 tracking-wide">
              Interact With Me
            </div>

            <div className="w-12" />
          </div>

          {/* Terminal Content */}
          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              //@ts-ignore
              WebkitScrollbar: { display: "none" },
            }}
            className="flex no-scrollbar flex-col h-[90%] relative p-4 text-white/70"
          >
            {/* Output */}
            <div
              ref={outputRef}
              className="flex-1 overflow-y-auto mb-12 pr-2 font-mono text-sm space-y-1"
            >
              {commandHistory.map((cmd, index) => (
                <div key={index}>{cmd}</div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="absolute flex gap-2 bottom-4 left-4 right-4"
            >
              <span className="text-green-400 font-semibold">P</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="w-full rounded-md bg-neutral-800 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 font-mono"
                placeholder="Use 'help' for available commands..."
              />
            </form>
          </div>

          {/* Resize handle */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.2}
            dragConstraints={{ left: 0, top: 0 }}
            onDrag={(e, info) => {
              setSize((prev) => ({
                width: Math.max(300, prev.width + info.delta.x),
                height: Math.max(200, prev.height + info.delta.y),
              }));
            }}
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-white/20"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute top-0 left-0 h-screen w-full grid place-items-center"
        >
          <button
            onClick={() => setHovered(true)}
            className="z-20 border-2 border-white rounded-md bg-black text-white px-4 py-2"
          >
            Open Terminal
          </button>
        </motion.div>
      )}
    </>
  );
}

export default Terminal;
