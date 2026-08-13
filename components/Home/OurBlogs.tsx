"use client";

import { motion, type Variants } from "framer-motion";
import { blogData } from "@/constants/menu";
import BlogCard from "./BlogCard";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const OurBlogs = () => {
  return (
    <div className="w-full text-center mt-[100px] xl:px-10">
      {/* Title */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-[38px] font-bold text-grey-shades-15"
      >
        Our Blogs
      </motion.p>

      {/* Description */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="text-[16px] font-medium text-grey-shades-20">
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians,
        </p>

        <p className="text-[16px] font-medium text-grey-shades-20">
          and wellness experts. Here's what you can expect from our blog.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="p-5 lg:p-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid lg:grid-cols-2 gap-5 items-stretch"
        >
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <BlogCard props={blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurBlogs;