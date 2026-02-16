import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA] font-sans">
      <div className="mb-8">
        <Image
          src="/images/logo.png"
          alt="AllRecon"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="rounded-lg border-2 border-[#233764] bg-[#FAFAFA] p-8 shadow-lg">
        <p className="text-center text-lg font-medium text-[#233764]">
          Landpage em desenvolvimento - Em breve mais informações.
        </p>
      </div>
    </div>
  );
}
