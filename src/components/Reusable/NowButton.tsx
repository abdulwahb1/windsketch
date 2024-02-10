import Image from "next/image";

type ButtonProps = {
  type: `button` | `submit`;
  title: string;
  variant: string;
  w_4: number;
  h_4: number;
};

const NowButton = ({ type, title, variant, w_4, h_4 }: ButtonProps) => {
  const widthClass = `w-[${w_4}px]`;
  const heightClass = `h-[${h_4}px]`;
  console.log(widthClass);
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-xl ${variant} w-[263px] h-[63px] border`}
      type={type}
    >
      <label className="whitespace-nowrap cursor-pointer  text-[25px] capitalize font-semibold font-geo">
        {title}
      </label>
    </button>
  );
};

export default NowButton;
