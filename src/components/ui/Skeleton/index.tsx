"use client";

import { Block } from "./styles";

export function Skeleton({ w, h, r }: { w?: string; h?: string; r?: string }) {
  return <Block $w={w} $h={h} $r={r} aria-hidden="true" />;
}
