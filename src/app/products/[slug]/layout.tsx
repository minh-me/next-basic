import React from "react";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}

      <br />
      <hr />
      <b>Product Detail Layout</b>
    </div>
  );
}
