import { OurTestimonialItem } from "@/constants/menu";
import { Quote } from "lucide-react";

const TestimonialCard = ({ props }: { props: OurTestimonialItem }) => {
  return (
    <div className="text-start bg-green-shades-97 border border-green-shades-90 rounded-md flex flex-col justify-between">
      <div className="p-8 space-y-5">
        <Quote size={32} />

        <p>{props.details}</p>
      </div>
      
      <div className="px-8 py-5 bg-green-shades-95 flex items-center gap-2">
        <img src={props.profile_url} alt="Profile" className="w-[50px] h-[50px]" />
        <p className="text-[16px] font-semibold text-dark-green-shades-15">{props.name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
