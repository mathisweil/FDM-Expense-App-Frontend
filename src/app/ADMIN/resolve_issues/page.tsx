import Header from "@/components/Header";
import ResolveIssues from "@/components/resolveIssues";
import { fetchIssues } from "@/lib/fetchIssues";

export default async function Issues() {
  const issues = await fetchIssues();

  return (
    <div className="md:px-4">
      <Header title="Resolve Issues" style="my-2" />
      <ResolveIssues issues={issues} />
    </div>
  );
}
