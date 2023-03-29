import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Button() {
  return (
    <div>
      <button className="flex justify-center items-center w-60 h-14 rounded-3xl hover:shadow-xl hover:bg-red-800 text-white font-bold bg-red-900 ">
        Catch pokemon's
        <AiOutlineArrowRight className="ml-4" size={23} />
      </button>
    </div>
  );
}
