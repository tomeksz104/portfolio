const Button = ({ children, href = null, className, classes }) => {
  return (
    <>
      {href === null ? (
        <button
          className={`relative flex h-11 items-center justify-center px-3 sm:px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ${className}`}
        >
          <span
            className={`relative text-xs sm:text-base font-semibold text-black ${classes}`}
          >
            {children}
          </span>
        </button>
      ) : (
        <a
          href={href}
          className={`relative flex h-11 items-center justify-center px-3 sm:px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ${className}`}
        >
          <span
            className={`relative text-xs sm:text-base font-semibold text-black ${classes}`}
          >
            {children}
          </span>
        </a>
      )}
    </>
  );
};

export default Button;
