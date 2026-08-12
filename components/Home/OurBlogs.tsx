import { blogData } from "@/constants/menu"
import BlogCard from "./BlogCard"

const OurBlogs = () => {
  return (
    <div className="w-full text-center mt-[100px] xl:px-10">
        <p className="text-[38px] font-bold text-grey-shades-15">Our Blogs</p>
        <p className="text-[16px] font-medium text-grey-shades-20">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians,</p>
        <p className="text-[16px] font-medium text-grey-shades-20">and wellness experts. Here's what you can expect from our blog.</p>

        <div className="p-5 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-5">
                {blogData.map((blog, index) => (
                    <BlogCard props={blog} key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurBlogs