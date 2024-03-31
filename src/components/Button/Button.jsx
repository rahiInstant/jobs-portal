const Button = ({innerText,px='px-7', py='py-5', w= 'w-auto'}) => {
  return (
    <div>
      <button className={`${py} ${px} ${w} text-center rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-extrabold`}>
        {innerText}
      </button>
    </div>
  );
};

export default Button;
