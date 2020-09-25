import React from "react";

export default function RootPage() {
  return <div>Nested page</div>;
}

export async function getStaticProps() {
  return {props: {}};
}

export async function getStaticPaths() {
  const paths = [
    {params: {firstSegment: 'foo', nestedSlug: ['nested']}}
  ]

  return { paths, fallback: false };
}
