import FeatureCard, { FeatureItem } from "./FeatureCard"

const features: FeatureItem[] = [
  {
    icon: "plan.png",
    title: "Personalized Nutrition Plans",
    details: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  },
  {
    icon: "hat.png",
    title: "Guidance from Certified Nutritionists",
    details: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
  },
  {
    icon: "food.png",
    title: "Food Tracking and Analysis",
    details: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  },
  {
    icon: "meal.png",
    title: "Meal Planning and Recipes",
    details: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  },
  {
    icon: "lifestyle.png",
    title: "Lifestyle and Behavior Coaching",
    details: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  },
  {
    icon: "education.png",
    title: "Nutritional Education and Workshops",
    details: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  },
];

const Features = () => {
  return (
    <div className="w-full text-center mt-[100px] xl:px-10">
        <p className="text-[38px] font-bold text-grey-shades-15">Features</p>
        <p className="text-[16px] font-medium text-grey-shades-20">Wecome to the Feature Section of Nutritioniet, your ultimate destination for all things nutrition and wellness.</p>

        <div className="p-5 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-5">
                {features.map((feature, index) => (
                    <FeatureCard props={feature} key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features