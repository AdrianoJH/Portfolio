"use client";

import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { Wrapper, Grid } from "@/components/project/ProjectsView/styles";

export default function Loading() {
  return (
    <Wrapper>
      <Container>
        <Skeleton w="220px" h="40px" />
        <div style={{ height: 28 }} />
        <Grid>
          <div style={{ gridColumn: "1 / -1" }}>
            <Skeleton h="340px" r="16px" />
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} h="300px" r="16px" />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
