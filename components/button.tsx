export const Button = ({
  onClick,
  title,
  type = "button",
  disabled = false,
}: {
  onClick?: () => void;
  title: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}): JSX.Element => {
  return (
    <button
      className="bg-transparent enabled:hover:bg-blue-500 text-blue-500 font-semibold enabled:hover:text-white py-2 px-4 border border-blue-500 enabled:hover:border-transparent disabled:text-gray-500 disabled:border-gray-500 rounded h-14 w-36 text-xl mx-10 my-5"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
