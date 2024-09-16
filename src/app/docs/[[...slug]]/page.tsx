import React from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  return <div>All docs for #{params.slug?.join("/")}</div>;
}
