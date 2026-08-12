export interface FeatureItem {
  icon: string;
  title: string;
  details: string;
}

interface FeatureCardProps {
  props: FeatureItem;
}

const FeatureCard = ({ props }: FeatureCardProps) => {
  return (
    <div className="p-8 space-y-4 text-start bg-green-shades-95 border border-green-shades-85 rounded-md">
      <div className="space-x-3 flex items-center">
        <div className="rounded-md bg-green-shades-70 w-[54px] h-[54px] shrink-0 flex items-center justify-center">
          <img src={props.icon} alt="Card Image" className="w-[30px] h-[30px]" />
        </div>
        <p className="text-[20px] font-semibold text-grey-shades-15">
          {props.title}
        </p>
      </div>

      <p className="text-[16px] font-medium text-grey-shades-20">{props.details}</p>
    </div>
  );
};

export default FeatureCard;
