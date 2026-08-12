import { testimonials } from "@/constants/menu"
import TestimonialCard from "./TestimonialCard"

const OurTestimonials = () => {
  return (
    <div className="w-full text-center mt-[100px] xl:px-10">
        <p className="text-[38px] font-bold text-grey-shades-15">Our Testimonials</p>
        <p className="text-[16px] font-medium text-grey-shades-20">Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>

        <div className="overflow-x-auto p-5 lg:p-10">
            <div className="grid w-max grid-flow-col auto-cols-[calc((100vw-40px)/1)] md:auto-cols-[calc((100vw-40px)/2)] lg:auto-cols-[calc((100vw-40px)/3)] gap-5">
                {testimonials.map((testinial, index) => (
                    <TestimonialCard key={index} props={testinial} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurTestimonials