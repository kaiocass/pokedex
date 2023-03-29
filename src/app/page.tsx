import Image from 'next/image';

import Button from './components/Button/page';
import Footer from './components/Footer/page';

export default function Home() {
  return (
    <>
      <div className="flex absolute w-full h-full items-center justify-between space-x-4 bg-gray-100">
        <div className="justify-start p-32 mb-auto">
          <Image
            className="mb-10"
            src="/images/icon_pokeball.png"
            width="80"
            height="80"
            alt="PokeNext"
          />
          <h1 className="text-6xl font-black tracking-tight mb-8">Pokedex</h1>
          <h4 className="text-base font-medium mb-20">
            Projeto criado com a intenção de colocar em pratica os conhecimentos
            adquiridos em React, Next, Typescript, TailwindCSS e Html.
          </h4>
          <Button />
          <Footer />
        </div>

        <Image
          className="w-max h-screen"
          src="/images/pokedex.png"
          width="750"
          height="900"
          alt="Pokedex"
        />
      </div>
    </>
  );
}
