"use client";

import Header from "@/components/Home/Header";
import SmoothScroll from "@/components/lenis-provider";
import { Resource } from "@/utils/type";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Filter,
  Loader2,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function ResourceV1() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await axios.get("/api/user/resources");
        setResources(response.data.data || []);
      } catch (err) {
        const message =
          axios.isAxiosError(err) && err.response?.data?.error
            ? err.response.data.error
            : "Unable to fetch resources";

        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();

    resources.forEach((resource) => {
      resource.tags.forEach((tag) => tagSet.add(tag));
    });

    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [resources]);

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesSearch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesTag =
        activeTag === "all" || resource.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [activeTag, resources, search]);

  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-hidden bg-white text-black">
        <Header />

        <section className="relative min-h-screen px-5 pb-20 pt-28 sm:px-8 lg:px-14">
          <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-black/10" />
          <div className="pointer-events-none absolute bottom-16 right-0 hidden h-56 w-56 border border-black/10 md:block" />
          <div className="pointer-events-none absolute left-8 top-40 hidden h-24 w-px bg-black/20 md:block" />

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:sticky lg:top-28"
            >
              <div className="mb-6 flex w-fit items-center gap-2 border border-black bg-black px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                <Sparkles size={14} />
                Resources
              </div>

              <h1 className="max-w-2xl text-6xl font-extrabold leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl">
                Curated
                <span className="block text-transparent [-webkit-text-stroke:1.5px_black]">
                  knowledge.
                </span>
              </h1>

              <p className="mt-8 max-w-xl border-l-4 border-black pl-5 text-base font-medium leading-7 text-zinc-700 sm:text-lg">
                Notes, links, files, and references worth keeping close while
                building. Search through the stack or narrow it down with tags.
              </p>

              <div className="mt-10 grid grid-cols-3 border border-black text-center">
                <Stat value={resources.length} label="Total" />
                <Stat value={tags.length} label="Tags" />
                <Stat
                  value={resources.reduce(
                    (total, resource) => total + resource.attachments.length,
                    0,
                  )}
                  label="Files"
                />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
                className="border-2 border-black bg-white shadow-[12px_12px_0_#000]"
              >
                <div className="grid gap-4 border-b-2 border-black p-4 md:grid-cols-[1fr_auto]">
                  <label className="relative block">
                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    />
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search by title, description, or tag"
                      className="h-14 w-full border border-black/20 bg-zinc-50 pl-12 pr-12 text-sm font-semibold outline-none transition focus:border-black focus:bg-white"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-zinc-500 transition hover:bg-black hover:text-white"
                        aria-label="Clear search"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </label>

                  <div className="flex items-center gap-2 border border-black/20 bg-zinc-50 px-4 py-3 text-sm font-bold">
                    <Filter size={17} />
                    {filteredResources.length} shown
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto border-b-2 border-black p-4">
                  <TagButton
                    label="all"
                    active={activeTag === "all"}
                    onClick={() => setActiveTag("all")}
                  />
                  {tags.map((tag) => (
                    <TagButton
                      key={tag}
                      label={tag}
                      active={activeTag === tag}
                      onClick={() => setActiveTag(tag)}
                    />
                  ))}
                </div>

                <div className="min-h-[420px] bg-[linear-gradient(#f4f4f5_1px,transparent_1px),linear-gradient(90deg,#f4f4f5_1px,transparent_1px)] bg-[size:24px_24px] p-4 sm:p-6">
                  {loading && <ResourceLoader />}
                  {!loading && error && (
                    <ResourceMessage title="Fetch failed" text={error} />
                  )}
                  {!loading && !error && filteredResources.length === 0 && (
                    <ResourceMessage
                      title="Resources Coming Soon!"
                      text="Try a different search term or clear the selected tag."
                    />
                  )}

                  <AnimatePresence mode="popLayout">
                    {!loading &&
                      !error &&
                      filteredResources.map((resource, index) => (
                        <ResourceCard
                          key={resource._id || resource.title}
                          resource={resource}
                          index={index}
                        />
                      ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="border-r border-black p-4 last:border-r-0">
      <p className="text-3xl font-black">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function TagButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 border px-4 py-2 text-sm font-bold transition ${
        active
          ? "border-black bg-black text-white"
          : "border-black/20 bg-white text-black hover:border-black"
      }`}
    >
      #{label}
    </button>
  );
}

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: "easeOut" }}
      className="group mb-4 border-2 border-black bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]"
    >
      <div className="grid gap-5 p-5 sm:p-6 md:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="border border-red-300 bg-red-50 px-3 py-1 text-xs font-bold text-red-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            {resource.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-zinc-700 sm:text-base">
            {resource.description}
          </p>
        </div>

        <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
          <div className="grid h-12 w-12 place-items-center border-2 border-black bg-black text-white transition group-hover:bg-white group-hover:text-black">
            <BookOpen size={22} />
          </div>
          <p className="text-right text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
            {resource.attachments.length} attachment
            {resource.attachments.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      {resource.attachments.length > 0 && (
        <div className="grid gap-px border-t-2 border-black bg-black sm:grid-cols-2">
          {resource.attachments.map((attachment) => (
            <Link
              key={`${resource.title}-${attachment.url}`}
              href={attachment.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 items-center justify-between gap-4 bg-zinc-50 px-4 py-3 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              <span className="flex min-w-0 items-center gap-3">
                <FileText size={17} className="shrink-0" />
                <span className="truncate">{attachment.attachment_name}</span>
              </span>
              <ArrowUpRight size={17} className="shrink-0" />
            </Link>
          ))}
        </div>
      )}
    </motion.article>
  );
}

function ResourceLoader() {
  return (
    <div className="grid min-h-[360px] place-items-center border-2 border-dashed border-black/20 bg-white/80">
      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">
        <Loader2 size={20} className="animate-spin" />
        Loading resources
      </div>
    </div>
  );
}

function ResourceMessage({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid min-h-[360px] place-items-center border-2 border-dashed border-black/20 bg-white/80 p-8 text-center">
      <div>
        <p className="text-3xl font-black">{title}</p>
        <p className="mt-3 max-w-md text-sm font-medium text-zinc-600">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ResourceV1;
