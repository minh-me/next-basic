import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href={`/products/${1}`}>Product 1</Link>
        </li>
        <li>
          <Link href={`/products/${2}`}>Product 2</Link>
        </li>
        <li>
          <Link href={`/products/${3}`}>Product 3</Link>
        </li>

        <li>
          <Link href={`/products/${100}`} replace>
            Product 100
          </Link>
        </li>
      </ul>
    </div>
  );
}
