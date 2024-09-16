import { useParams } from "next/navigation";
import React from "react";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Product Detail #{params.slug}</div>;
}
