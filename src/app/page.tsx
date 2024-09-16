import Image from "next/image";
import Card from "./card/Card";

export default function Home() {
  return (
    <div>
      <Card />

      <div className="h-96 w-96 bg-gray-200">
        <Image
          src="/images/image.png"
          alt="logo"
          width={100}
          height={100}
          priority={true}
          className="h-[100px]"
        />
        <Image
          src="https://i.morioh.com/210613/18997583.webp"
          alt="logo"
          width={100}
          height={100}
          priority={true}
          className="h-[100px]"
        />
      </div>
    </div>
  );
}
