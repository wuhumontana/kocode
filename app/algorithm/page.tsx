import { redirect } from "next/navigation";

import { algorithmTracks } from "./data";

export default function AlgorithmIndexPage() {
  redirect(`/algorithm/${algorithmTracks[0].topics[0].lessons[0].slug}`);
}
