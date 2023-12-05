import Image from "next/image";
import logomobile from "@/app/img/logomobile.png";
import logopc from "@/app/img/logopc.png";
import background from "bg.png";

export default function Home() {
  return (
    <main className="flex flex-col max-lg:bg-zinc-800 lg:bg-background bg-cover h-screen justify-center items-center">
        <div className="flex items-center">
          <Image className="lg:sr-only" src={logomobile} alt="logo" width={180} />
          <Image className="max-lg:sr-only pt-8" src={logopc} alt="logodesk" width={250} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-zinc-500 lg:text-black">Nome de usuário</span>
            <input className="w-[359px] lg:w-[430px] h-[63px] lg:h-[70] bg-zinc-600 lg:bg-white border-[1px] lg:border-[3px] rounded-md" type="text" />
          </div>
          <div className="flex flex-col ">
            <span className="text-zinc-500 lg:text-black">Senha</span>
            <input className="w-[359px] lg:w-[430px] h-[63px] lg:h-[70] bg-zinc-600 lg:bg-white border-[1px] lg:border-[3px] rounded-md" type="text" />
          </div>
        </div>
        </main>
  )
}