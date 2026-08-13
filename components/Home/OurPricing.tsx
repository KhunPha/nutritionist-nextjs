"use client";

import { planItems } from "@/constants/menu";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import PlanCard from "./PlanCard";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

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
          <div className="p-2 flex rounded-md border border-green-shades-80 relative">
            <button
              className={`relative w-[100px] py-2 rounded-md font-semibold text-[14px] transition-colors ${
                chooseTypePlan === 0 ? "text-absolute-white" : "text-grey-shades-30"
              }`}
              onClick={() => setChooseTypePlan(0)}
            >
              {chooseTypePlan === 0 && (
                <motion.div
                  layoutId="planPill"
                  className="absolute inset-0 bg-dark-green-shades-20 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Monthly
            </button>

            <button
              className={`relative w-[100px] py-2 rounded-md font-semibold text-[14px] transition-colors ${
                chooseTypePlan === 1 ? "text-absolute-white" : "text-grey-shades-30"
              }`}
              onClick={() => setChooseTypePlan(1)}
            >
              {chooseTypePlan === 1 && (
                <motion.div
                  layoutId="planPill"
                  className="absolute inset-0 bg-dark-green-shades-20 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Yearly
            </button>
          </div>

          <p
            className="text-[16px] font-medium text-grey-shades-30"
          >
            Save 50% on Yearly
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {planItems.map((plan, index) => (
            <motion.div key={index} variants={item}>
              <PlanCard props={plan} chooseTypePlan={chooseTypePlan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurPricing;