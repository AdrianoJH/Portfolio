"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Wrapper, Grid } from "@/components/project/ProjectsView/styles";

export default function Loading() {
  return (
    <Wrapper>
      <Container>
        <Skeleton w="180px" h="34px" />
        <div style={{ height: 24 }} />
        <Grid>
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <Skeleton h="190px" r="0" />
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Skeleton w="70%" h="22px" />
                <Skeleton h="14px" />
                <Skeleton w="50%" h="14px" />
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
