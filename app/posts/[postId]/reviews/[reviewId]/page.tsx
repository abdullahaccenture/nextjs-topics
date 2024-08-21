"use client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    productid: string;
    reviewId: string;
  };
};

function getRandomBoolean() {
  const data = Math.random();
  return data >= 0.9;
}

// export const generateMetadata = async (params: Props): Promise<Metadata> => {
//   const aynctitle = await Promise.resolve(" hi this is await");

//   return {
//     title: "Review page title" + aynctitle,
//   };
// };

export default function ReviewDetail({
  params,
}: {
  params: {
    reviewId: string;
    postId: string;
  };
}) {
  if (getRandomBoolean()) {
    throw new Error("To high reviewID");
  }
  if (parseInt(params.reviewId) > 500) {
    notFound();
  }

  return <div>ReviewDetail+ </div>;
}
