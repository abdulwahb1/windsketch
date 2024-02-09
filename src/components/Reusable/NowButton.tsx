import Image from "next/image";

type ButtonProps = {
  type: `button` | `submit`;
  title: string;
  variant: string;
};

const NowButton = ({ type, title, variant }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-xl w-[263px] h-[62px] border ${variant}`}
      type={type}
    >
      <label className="whitespace-nowrap cursor-pointer text-white text-[25px] capitalize font-semibold font-geo">
        {title}
      </label>
    </button>
  );
};

export default NowButton;
