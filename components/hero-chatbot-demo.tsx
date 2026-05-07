"use client";

import { useEffect, useState } from "react";
import { Bot, MessageSquare, Send, UserRound, Zap } from "lucide-react";

const conversation = [
  {
    from: "user",
    text: "What kind of AI products does Christian build?",
  },
  {
    from: "assistant",
    text: "He builds practical AI integrations: research pipelines, automation workflows, agentic systems, structured outputs, and chat interfaces connected to real product data.",
  },
  {
    from: "user",
    text: "Can he handle the backend behind the chatbot?",
  },
  {
    from: "assistant",
    text: "Yes. His background includes TypeScript, Node.js, Java, Kafka, APIs, databases, production migrations, and systems supporting 100,000+ daily users.",
  },
] as const;

const capabilities = ["RAG ready", "Tool calling", "API connected"];

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function HeroChatbotDemo() {
  const [completedCount, setCompletedCount] = useState(0);
  const [activeText, setActiveText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function playConversation() {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      await wait(0);

      if (prefersReducedMotion) {
        setCompletedCount(conversation.length);
        setActiveText("");
        setIsTyping(false);
        return;
      }

      await wait(500);

      for (let messageIndex = 0; messageIndex < conversation.length; messageIndex += 1) {
        if (cancelled) return;

        const message = conversation[messageIndex];

        setIsTyping(true);
        setActiveText("");
        await wait(message.from === "assistant" ? 420 : 180);

        for (let charIndex = 1; charIndex <= message.text.length; charIndex += 1) {
          if (cancelled) return;

          setActiveText(message.text.slice(0, charIndex));
          await wait(message.from === "assistant" ? 16 : 12);
        }

        setIsTyping(false);
        setCompletedCount(messageIndex + 1);
        setActiveText("");
        await wait(message.from === "assistant" ? 480 : 340);
      }
    }

    playConversation();

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleMessages = [
    ...conversation.slice(0, completedCount),
    ...(completedCount < conversation.length && activeText
      ? [{ ...conversation[completedCount], text: activeText }]
      : []),
  ];

  const activeMessage = completedCount < conversation.length ? conversation[completedCount] : null;

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/85">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
            <Bot className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Christian AI Assistant</p>
            <p className="text-xs text-slate-500">AI chatbot interface demo</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <span className="size-1.5 rounded-full bg-emerald-300" />
          Online
        </div>
      </div>

      <div aria-live="polite" className="min-h-[25rem] space-y-5 p-5">
        {visibleMessages.map((message, index) =>
          message.from === "user" ? (
            <div key={`${message.from}-${index}`} className="flex justify-end gap-3">
              <div className="max-w-[82%] rounded-3xl rounded-tr-md bg-cyan-300 px-4 py-3 text-sm font-medium leading-6 text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.2)]">
                {message.text}
                {index === completedCount && activeText ? <Cursor /> : null}
              </div>
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-cyan-200">
                <UserRound className="size-4" />
              </span>
            </div>
          ) : (
            <div key={`${message.from}-${index}`} className="flex gap-3">
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-purple-300/10 text-purple-200">
                <Bot className="size-4" />
              </span>
              <div className="max-w-[86%] rounded-3xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-slate-200">
                {message.text}
                {index === completedCount && activeText ? <Cursor /> : null}
              </div>
            </div>
          ),
        )}

        {isTyping && !activeText && activeMessage?.from === "assistant" ? (
          <div className="flex gap-3">
            <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-purple-300/10 text-purple-200">
              <Bot className="size-4" />
            </span>
            <div className="flex items-center gap-1 rounded-3xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-4">
              <span className="size-1.5 animate-bounce rounded-full bg-cyan-200 [animation-delay:-0.2s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-cyan-200 [animation-delay:-0.1s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-cyan-200" />
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <MessageSquare className="size-5 shrink-0 text-slate-500" />
          <p className="flex-1 text-sm text-slate-500">
            Ask about projects, systems, or AI workflows...
          </p>
          <span className="grid size-9 place-items-center rounded-xl bg-cyan-300 text-slate-950">
            <Send className="size-4" />
          </span>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {capabilities.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
            >
              <Zap className="size-3.5 text-cyan-200" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cursor() {
  return <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-current" />;
}
