"use client";

import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { Wrapper } from "@/components/project/ProjectCaseStudy/styles";

export default function Loading() {
  return (
    <Wrapper>
      <Container>
        <Skeleton w="120px" h="20px" />
        <div style={{ height: 28 }} />
        <Skeleton w="55%" h="40px" />
        <div style={{ height: 12 }} />
        <Skeleton w="80%" h="18px" />
        <div style={{ height: 28 }} />
        <Skeleton h="340px" r="16px" />
        <div style={{ height: 28 }} />
        <Skeleton h="16px" />
        <div style={{ height: 10 }} />
        <Skeleton h="16px" />
        <div style={{ height: 10 }} />
        <Skeleton w="70%" h="16px" />
      </Container>
    </Wrapper>
  );
}
