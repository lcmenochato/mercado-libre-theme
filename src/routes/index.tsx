import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/")({
  head: () => pageHead("Kit 10 Peças Colinox", "Kit de panelas Colinox — detalhes do produto."),
  component: () => <OriginalPage page="site" title="Kit 10 Peças Colinox" />,
});
