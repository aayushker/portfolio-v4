import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ExperienceEntry, ProjectEntry } from "./types";

const contentDir = path.join(process.cwd(), "content");

export function getExperienceEntries(): ExperienceEntry[] {
  const dir = path.join(contentDir, "experience");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return {
      company: data.company || "",
      role: data.role || "",
      duration: data.duration || "",
      description: data.description || "",
      highlights: data.highlights || [],
      slug: file.replace(".md", ""),
    };
  });
}

export function getProjectEntries(): ProjectEntry[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return {
      title: data.title || "",
      type: data.type || "",
      description: data.description || "",
      stack: data.stack || [],
      github: data.github || "",
      demo: data.demo || "",
      slug: file.replace(".md", ""),
    };
  });
}
