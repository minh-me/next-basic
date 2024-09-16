import { notFound } from "next/navigation";
import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; slug: string };
}) {
  if (+params.reviewId > 10) {
    return notFound();
  }

  return (
    <div>
      Review Detail #{params.reviewId} for product #{params.slug}
    </div>
  );
}
