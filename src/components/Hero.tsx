import React, { useRef, Suspense } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

const StarBackground = (props: any) => {
    const ref: any = useRef(null);
    const [sphere] = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;
    })

    return (
        <Points
            ref={ref}
            positions={sphere}
            stride={3}
            frustumCulled
            rotation={[0, 0, Math.PI / 4]}
            {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.005}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    )
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
         <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <motion.h1
                className="text-6xl font-extrabold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello, I'm <span className="text-accent">Kalpesh Dalal</span>
            </motion.h1>
            <motion.p
                className="text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Full Stack Developer | React & Node.js Expert
            </motion.p>
             <motion.a
                href="#about"
                className="mt-8 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                Discover More
            </motion.a>
        </div>
    </section>
  );
};

export default Hero;