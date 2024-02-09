import Image from "next/image";

type ButtonProps = {
  type: `button` | `submit`;
  title: string;
  icon: string;
  variant: string;
  color: string;
};

const NowButton = ({ type, title, icon, variant, color }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-xl w-[263px] h-[62px] ${variant}`}
      type={type}
    >
      {icon !== "" && <Image src={icon} alt={title} width={40} height={40} />}
      <label
        className={`whitespace-nowrap cursor-pointer text-[25px] capitalize font-semibold font-geo ${color}`}
      >
        {title}
      </label>
    </button>
  );
};

export default NowButton;
