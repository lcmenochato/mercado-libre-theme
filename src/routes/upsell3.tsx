import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/upsell3")({ head: () => pageHead("Oferta 3 — Kit Colinox", "Terceira oferta complementar do pedido Colinox."), component: () => <OriginalPage page="upsell3" title="Oferta 3" /> });