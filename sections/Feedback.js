"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
    <section className={`${styles.paddings}`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-row gap-6 mobile:flex-col`}
        >
            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className='flex-[0.5] mobile:mb-6 max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative'
            >
                <div className='feedback-gradient' />
                <div>
                    <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white'>
                        Hardik Radadiya
                    </h4>
                    <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
                        Founder Matrix
                    </p>
                </div>

                <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
                    As the proud founder of GlowSine, I am confident that our brand will empower millions to embrace their unique radiance,
                    with cutting-edge formulas and personalized skincare, igniting a world of self-assured beauty.
                </p>
            </motion.div>

            <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className='relative flex-1 flex justify-center items-center'>
                <img
                    src='/glow-shine.jpg'
                    alt='planet-09'
                    className='w-full lg:h-[610px] h-auto max-h-[540px] object-cover rounded-[40px]'
                />
            </motion.div>
        </motion.div>
    </section>
);

export default Feedback;
