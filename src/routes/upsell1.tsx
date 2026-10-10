import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/upsell1")({ head: () => pageHead("Oferta 1 — Kit Colinox", "Oferta complementar do pedido Colinox."), component: () => <OriginalPage page="upsell1" title="Oferta 1" /> });