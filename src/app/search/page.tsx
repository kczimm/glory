import type { Metadata } from "next";
import SearchPage from "@/components/SearchPage";

export const metadata: Metadata = {
  title: "Search the Scriptures",
  description:
    "Search the World English Bible offline — every verse and the studies that connect to them.",
};

export default function Search() {
  return <SearchPage />;
}
