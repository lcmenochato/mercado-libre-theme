import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/upsell2")({ head: () => pageHead("Oferta 2 — Kit Colinox", "Segunda oferta complementar do pedido Colinox."), component: () => <OriginalPage page="upsell2" title="Oferta 2" /> });