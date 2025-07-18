import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo_d.png"
          alt="United Intelligence"
          width={100}
          height={100}
        />
        <h1>United Intelligence</h1>
        <p>Geospatial AI tools for intelligence analysts</p>
        <p>
          First product: Geolocation AI for images/videos &rarr; coordinates.
        </p>
        <p>sarhaan@unitedint.co</p>
      </div>
    </div>
  );
}
