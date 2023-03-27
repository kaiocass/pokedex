import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/images/icon_pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
        <h1>Pokedex</h1>
        <h4>
          Projeto criado com a intenção de colocar em pratica os conhecimentos
          adquiridos em React, Next, Typescript, TailwindCss e Html.
        </h4>
      </div>
    </>
  );
}
