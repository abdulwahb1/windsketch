import Image from "next/image";

type ButtonProps = {
  type: `button` | `submit`;
  title: string;
  icon: string;
  variant: string;
  color: string;
  w_4: number | string;
  h_4: number | string;
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
        {/* {icon !== "" && <Image src={icon} alt={title} width={40} height={40} />} */}

        {icon === "/icons/arrow_white.svg" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_903_22)">
              <rect
                x="2"
                y="2"
                width="36"
                height="36"
                rx="8"
                stroke="white"
                stroke-width="4"
              />
              <path
                d="M20 10L31 19.925L20 30"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 20L10 20"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_903_22">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_903_26)">
              <rect
                x="2"
                y="2"
                width="36"
                height="36"
                rx="8"
                stroke="#0C2796"
                stroke-width="4"
              />
              <path
                d="M20 10L31 19.925L20 30"
                stroke="#0C2796"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 20L10 20"
                stroke="#0C2796"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_903_26">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <label
          className={`whitespace-nowrap cursor-pointer text-[23px] capitalize font-semibold font-geo ${color}`}
        >
          {title}
        </label>
      </button>
    </div>
  );
};

export default NowButton;
