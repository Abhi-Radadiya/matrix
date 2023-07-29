"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
    <motion.footer variants={footerVariants} initial='hidden' whileInView='show' className={`${styles.xPaddings} py-8 relative`}>
        <div className='footer-gradient' />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-[3px]`}>
            {/* <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold mobile:text-[64px] text-[44px] text-white'>
          Enter the Metaverse
        </h4>
        <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'>
          <img
            src='/headset.svg'
            alt='headset'
            className='w-[24px] h-[24px] object-contain'
          />
          <span className='font-normal text-[16px] text-white'>
            Enter Metaverse
          </span>
        </button>
      </div> */}
            <div className='text-white'>
                <div className='flex flex-row justify-between max-w-[866px] mobile:block mb-5'>
                    <div className='flex flex-row items-start mb-3 mobile:block '>
                        <span className='mr-3 text-xl font-semibold'>Mobile number :</span>
                        <div className='text-xl leading-6 tracking-widest flex flex-col mobile:justify-end mobile:text-end'>
                            <span className='pb-2'>+91 95863 39560</span>
                            <span>+91 81411 65052</span>
                        </div>
                    </div>

                    <div className='flex flex-row mobile:block'>
                        {/* <span className='mr-3 text-xl font-semibold mobile:hidden'>Email :</span> */}
                        <div className='mr-3 text-xl font-semibold mobile:mb-2'>Email :</div>
                        <span className='text-xl leading-6 tracking-widest mobile:tracking-tighter mobile:flex mobile:justify-end'>
                            matrixcosmetic2023@gmail.com
                        </span>
                    </div>
                </div>

                <div className='mb-3 flex flex-row mobile:block'>
                    <div className='mr-3 text-xl font-semibold mobile:mb-2'>Address : </div>
                    <span className='text-xl leading-6 tracking-widest mobile:flex mobile:justify-end'>
                        303, Anmol galaxy 77, B/H, Uday autolink, S. P. Ring road, Khathvada, Ahmedabad
                    </span>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='mb-[50px] h-[2px] bg-white opacity-10' />

                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <h4 className='font-extrabold text-[24px] text-white'>MATRIX</h4>
                    <p className='font-normal text-[14px] text-white opacity-50'>Copyright © 2023 - 2024 Matrix. All rights reserved.</p>

                    <div className='flex gap-4'>
                        {socials.map((social) => (
                            <a href={social?.redirect} key={social.name}>
                                <img src={social.url} alt={social.name} className='w-[24px] h-[24px] object-contain cursor-pointer' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
