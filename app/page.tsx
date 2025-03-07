'use client';

import React from 'react';
import { motion } from "framer-motion";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Link from 'next/link';

const page = () => {
    return ( 
        <div className='flex flex-col min-h-screen items-center justify-center w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black px-4'>
            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center mb-12"
            >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Text Behind Image
                </h1>
                
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                    Create stunning designs by placing text behind partially transparent images
                </p>

                <Link href={'/app'}>
                    <HoverBorderGradient 
                        containerClassName="rounded-full" 
                        as="button" 
                        className="dark:bg-black bg-white text-black dark:text-white py-3 px-8 text-lg font-medium"
                    >
                        Open Editor
                    </HoverBorderGradient>
                </Link>
            </motion.div>

         
        </div>
    );
}

export default page;