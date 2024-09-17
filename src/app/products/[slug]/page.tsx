import { Metadata } from "next";
import { useParams } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Product Detail #${params.slug}`), 150);
  });

  return {
    // title: {
    //   absolute: `${title}`,
    // },
    title: `${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return <div>Product Detail #{params.slug}</div>;
}
