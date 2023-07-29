"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className='gradient-02 z-0' />
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title='| About Matrix' textStyles='text-center' />

            <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
            >
                <span className='font-extrabold text-white'>Glow Sine </span>the embodiment of radiant beauty, powered by
                <span className='font-extrabold text-white'> Matrix. </span>As an exceptional brand born from the visionary minds at{" "}
                <span className='font-extrabold text-white'>Matrix </span>, GlowSine stands as a testament to innovation and excellence in
                the beauty industry. With a perfect synergy of advanced science and nature's finest, each product is thoughtfully crafted to
                unlock the true brilliance of your skin. Embrace your unique radiance and confidence with
                <span className='font-extrabold text-white'> GlowSine </span>, where
                <span className='font-extrabold text-white'> Matrix</span>'s expertise converges with the pursuit of timeless beauty.
            </motion.p>

            <motion.img
                variants={fadeIn("up", "tween", 0.3, 1)}
                src='/arrow-down.svg'
                alt='arrow down'
                className='w-[18px] h-[28px] object-contain mt-[28px]'
            />
        </motion.div>
    </section>
);

export default About;
