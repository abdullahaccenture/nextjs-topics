import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    productid: string;
    reviewId: string;
  };
};

export const generateMetadata = async (params: Props): Promise<Metadata> => {
  const aynctitle = await Promise.resolve(" hi this is await");
  console.log(aynctitle);
  return {
    title: "Review page title" + aynctitle,
  };
};

export default function ReviewDetail({
  params,
}: {
  params: {
    reviewId: string;
    postId: string;
  };
}) {
  if (parseInt(params.reviewId) > 800) {
    throw new Error("To high reviewID");
  }
  if (parseInt(params.reviewId) > 500) {
    notFound();
  }

  return <div>ReviewDetail</div>;
}
