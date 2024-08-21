import { notFound } from "next/navigation";
import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: {
    reviewId: string;
    postId: string;
  };
}) {
  if (parseInt(params.reviewId) > 500) {
    notFound();
  }

  return <div>ReviewDetail</div>;
}
