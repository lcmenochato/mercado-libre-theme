import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/pagamento")({ head: () => pageHead("Pagamento — Kit Colinox", "Pagamento do pedido Colinox."), component: () => <OriginalPage page="pagamento" title="Pagamento" /> });