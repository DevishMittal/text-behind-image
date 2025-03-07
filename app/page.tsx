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

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
            >
                <img 
                    src="/example-preview.jpg" 
                    alt="Text Behind Image Editor Preview" 
                    className="w-full h-auto"
                    onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400"
            >
                © {new Date().getFullYear()} | Text Behind Image | All Rights Reserved
            </motion.div>
        </div>
    );
}

export default page;