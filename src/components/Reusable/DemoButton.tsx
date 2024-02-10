import Image from "next/image";

type ButtonProps = {
  type: `button` | `submit`;
  title: string;
  icon: string;
  variant: string;
  color: string;
  w_4: number;
  h_4: number;
};

const NowButton = ({
  type,
  title,
  icon,
  variant,
  color,
  w_4,
  h_4,
}: ButtonProps) => {
  const widthClass = `w-[${w_4}px]`;
  const heightClass = `h-[${h_4}px]`;
  return (
    <div className="inline-block">
      <button
        className={`flex items-center justify-center gap-3 rounded-xl ${variant} w-[263px] h-[63px] `}
        type={type}
      >
        {icon !== "" && <Image src={icon} alt={title} width={40} height={40} />}
        <label
          className={`whitespace-nowrap cursor-pointer text-[25px] capitalize font-semibold font-geo ${color}`}
        >
          {title}
        </label>
      </button>
    </div>
  );
};

export default NowButton;
