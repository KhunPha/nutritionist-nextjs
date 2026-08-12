"use client";

import { planItems } from "@/constants/menu";
import { useState } from "react";
import PlanCard from "./PlanCard";

const OurPricing = () => {
    const [chooseTypePlan, setChooseTypePlan] = useState(0);
  return (
    <div className="w-full text-center mt-[100px] xl:px-10">
        <p className="text-[38px] font-bold text-grey-shades-15">
        Our Testimonials
      </p>
      <p className="text-[16px] font-medium text-grey-shades-20">
        We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. 
      </p>
      <p className="text-[16px] font-medium text-grey-shades-20">
        We believe that everyone deserves access to personalized nutrition guidance and resources
      </p>

      <div className="p-5 lg:p-10">
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="p-2 flex rounded-md border border-green-shades-80">
                <button className={`w-[100px] py-2 rounded-md ${chooseTypePlan === 0 ? "bg-dark-green-shades-20 text-absolute-white" : "text-grey-shades-30"}   font-semibold text-[14px]`} onClick={() => setChooseTypePlan(0)}>
                    Monthly
                </button>
                <button className={`w-[100px] py-2 rounded-md ${chooseTypePlan === 1 ? "bg-dark-green-shades-20 text-absolute-white" : "text-grey-shades-30"}   font-semibold text-[14px]`} onClick={() => setChooseTypePlan(1)}>
                    Yearly
                </button>
            </div>

            <p className="text-[16px] font-medium text-grey-shades-30">Save 50% on Yearly</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {planItems.map((plan, index) => (
                <PlanCard props={plan} chooseTypePlan={chooseTypePlan} key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default OurPricing