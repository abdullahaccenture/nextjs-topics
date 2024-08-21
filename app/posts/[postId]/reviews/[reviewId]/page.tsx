import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: {
    reviewId: string;
    postId: string;
  };
}) {
  console.log(params);
  return <div>ReviewDetail</div>;
}
