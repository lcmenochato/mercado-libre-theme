import { createFileRoute } from "@tanstack/react-router";
import { OriginalPage, pageHead } from "@/components/original-page";
export const Route = createFileRoute("/obrigado")({ head: () => pageHead("Pedido concluído — Kit Colinox", "Confirmação do pedido Colinox."), component: () => <OriginalPage page="obrigado" title="Pedido concluído" /> });