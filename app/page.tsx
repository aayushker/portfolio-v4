import { Portfolio } from "@/components/Portfolio";
import { getExperienceEntries, getProjectEntries } from "@/lib/markdown";

export default function Home() {
  const experiences = getExperienceEntries();
  const projects = getProjectEntries();

  return <Portfolio experiences={experiences} projects={projects} />;
}
