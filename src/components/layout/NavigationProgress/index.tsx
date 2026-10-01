"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Bar } from "./styles";

// Barra de progresso no topo: dispara uma animação curta a cada mudança de rota,
// dando feedback visual de navegação sem bibliotecas externas.
export function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setActive(true);
    const timeout = setTimeout(() => setActive(false), 720);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return <Bar data-active={active} aria-hidden="true" />;
}
