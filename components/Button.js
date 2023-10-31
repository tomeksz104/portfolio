const Button = ({ children, className, classes }) => {
  return (
    <button
      className={`relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ${className}`}
    >
      <span
        className={`relative text-base font-semibold text-black ${classes}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
