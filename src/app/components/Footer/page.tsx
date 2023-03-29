import Image from 'next/image';

export default function Footer() {
  return (
    <div className="w-48">
      <footer className="flex ml-10 mt-52 mx-5 justify-between items-center">
        <Image
          src="/images/logos_figma.png"
          width={20}
          height={30}
          alt="Figma"
        />
        <Image src="/images/logos_html.png" width={30} height={40} alt="Html" />
        <Image
          src="/images/logos_tailwindcss.png"
          width={30}
          height={40}
          alt="TailwindCSS"
        />
        <Image
          src="/images/logos_reactts.png"
          width={30}
          height={40}
          alt="React"
        />
        <Image
          src="/images/logos_typescript.png"
          width={25}
          height={30}
          alt="Typescript"
        />
      </footer>
    </div>
  );
}
