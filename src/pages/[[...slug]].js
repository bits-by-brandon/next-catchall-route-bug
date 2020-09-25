import React from "react";

export default function RootPage() {
  return <div>Root page</div>;
}

export async function getStaticProps() {
  return {props: {}};
}

export async function getStaticPaths() {
  const paths = [
    {params: {slug: []}},
    {params: {slug: ['foo', 'root']}}
  ]

  return { paths, fallback: false };
}
