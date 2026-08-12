const Hero = () => {
  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-2">
        <div className="w-full h-full bg-green-shades-80 rounded-br-[50px]">
          <img src="bg_style.png" alt="bg_style" className="w-full h-full" />
        </div>

        <div className="flex flex-col justify-center p-10 space-y-4">
          <p className="text-[22px] text-dark-green-shades-15 font-semibold underline underline-offset-8">
            Transform Your Health with
          </p>
          <p className="text-[48px] text-dark-green-shades-15 font-bold">
            Personalized Nutrition Coaching
          </p>
          <p className="text-[16px] text-grey-shades-20 font-medium">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
          <div className="flex gap-3">
            <button className="text-grey-shades-15 text-[14px] font-semibold bg-green-shades-70 rounded-md p-4">
              Get Starter Today
            </button>

            <button className="text-grey-shades-15 text-[14px] font-semibold bg-green-shades-95 border border-green-shades-85 rounded-md p-4">
              Book a Demo
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex w-[90px] h-[50px] items-center justify-center border  border-green-shades-70 rounded-full relative">
              <img
                src={"profile.png"}
                className="w-[38px] h-[38px] left-[5px] rounded-full absolute"
              />
              <img
                src={"profile1.png"}
                className="w-[38px] h-[38px] left-[25px] rounded-full absolute"
              />
              <img
                src={"profile2.png"}
                className="w-[38px] h-[38px] left-[45px] rounded-full absolute"
              />
            </div>

            <p className="text-[18px] font-bold text-dark-green-shades-40">
              430+
            </p>
            <p className="text-[18px] font-semibold text-dark-green-shades-20">
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      <div className="text-center md:hidden">
        <div className="w-full h-[374px] bg-green-shades-80 rounded-b-[40px] relative">
          <img src="bg_style.png" alt="bg_style" className="w-full h-full" />

          <div className="flex absolute w-[90px] h-[50px] items-center justify-center border bg-green-shades-97 border-green-shades-70 rounded-full -bottom-6 left-1/2 -translate-x-1/2">
            <img
              src={"profile.png"}
              className="w-[38px] h-[38px] left-[5px] rounded-full absolute"
            />
            <img
              src={"profile1.png"}
              className="w-[38px] h-[38px] left-[25px] rounded-full absolute"
            />
            <img
              src={"profile2.png"}
              className="w-[38px] h-[38px] left-[45px] rounded-full absolute"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <p className="text-[18px] font-bold text-dark-green-shades-40">
            430+
          </p>
          <p className="text-[18px] font-semibold text-dark-green-shades-20">
            Happy Customers
          </p>
        </div>

        <div className="text-center space-y-4 mt-5">
          <p className="text-[22px] text-dark-green-shades-15 font-semibold underline underline-offset-8">
            Transform Your Health with
          </p>
          <p className="text-[48px] text-dark-green-shades-15 font-bold">
            Personalized Nutrition Coaching
          </p>
          <p className="text-[16px] text-grey-shades-20 font-medium">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
          <div className="flex gap-3 items-center justify-center">
            <button className="text-grey-shades-15 text-[14px] font-semibold bg-green-shades-70 rounded-md p-4">
              Get Starter Today
            </button>

            <button className="text-grey-shades-15 text-[14px] font-semibold bg-green-shades-95 border border-green-shades-85 rounded-md p-4">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
