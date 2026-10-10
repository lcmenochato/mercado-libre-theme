import { useEffect, useRef } from "react";

export function OriginalPage({ page, title }: { page: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const element = frame.current;
    if (element && window.location.search) element.src = `/original/${page}.html${window.location.search}`;
  }, [page]);
  return <iframe ref={frame} className="original-site" src={`/original/${page}.html`} title={title} />;
}

export function pageHead(title: string, description: string) {
  return { meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] };
}