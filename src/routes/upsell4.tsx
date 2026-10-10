import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/upsell4")({ head: () => pageHead("Oferta 4 — Kit Colinox", "Quarta oferta complementar do pedido Colinox."), component: () => <OriginalPage page="upsell4" title="Oferta 4" /> });