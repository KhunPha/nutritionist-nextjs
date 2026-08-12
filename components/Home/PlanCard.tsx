import { PlanItem } from "@/constants/menu";

interface PlanCardProps {
  props: PlanItem;
  chooseTypePlan: number;
}

const PlanCard = ({ props, chooseTypePlan }: PlanCardProps) => {
  return (
    <div className="p-8 flex flex-col justify-between bg-green-shades-95 border border-grey-shades-90 rounded-lg text-start">
      <div>
        <p className="text-[24px] font-semibold text-grey-shades-15">
          {props.title}
        </p>
        <p className="text-[16px] font-medium text-grey-shades-30">
          {props.sub_title}
        </p>

        <p className="mt-8 text-[16px] font-medium text-grey-shades-15">
          {props.details}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-1 mt-5">
          <p className="text-[40px] font-bold text-dark-green-shades-25">
            $
            {chooseTypePlan === 0
              ? props.price
              : props.price - props.price * (50 / 100)}
          </p>
          <p className="text-[16px] font-medium text-grey-shades-20">/month</p>
        </div>

        <button className="mt-8 p-3 w-full bg-green-shades-70 rounded-md text-grey-shades-15 text-[14px] font-semibold">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
