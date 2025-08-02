import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { skillCategories } from "../data/skills";
import { Helmet } from "react-helmet-async";

const MagneticCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    return (
        <motion.div
            ref={cardRef}
            key={index}
            style={{ x, y, rotateX, rotateY, z: 100 }}
            className="relative"
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            {children}
        </motion.div>
    );
};

type Skill = { name: string; level: number; icon: string };
interface SkillOrbProps {
    skill: Skill;
    index: number;
    isVisible: boolean;
}

const SkillOrb = ({ skill, index, isVisible }: SkillOrbProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={isVisible ? {
                scale: 1,
                rotate: 0,
                opacity: 1
            } : {
                scale: 0,
                rotate: -180,
                opacity: 0
            }}
            transition={{
                delay: index * 0.1,
                type: "spring",
                damping: 15,
                stiffness: 200
            }}
            whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group cursor-pointer flex flex-col items-center"
        >
            {/* Main orb */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl mb-2">
                <motion.span
                    className="text-lg md:text-2xl"
                    animate={{
                        rotate: isHovered ? [0, 20, -20, 0] : 0,
                        scale: isHovered ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {skill.icon}
                </motion.span>

                {/* Pulsing ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Skill level arc */}
                <svg className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 -rotate-90" viewBox="0 0 64 64">
                    <circle
                        cx="32" cy="32" r="28"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                    />
                    <motion.circle
                        cx="32" cy="32" r="28"
                        fill="none"
                        stroke="rgb(0,245,212)"
                        strokeWidth="2"
                        strokeDasharray="175.93"
                        strokeDashoffset={175.93 - (skill.level / 100) * 175.93}
                        initial={{ strokeDashoffset: 175.93 }}
                        animate={isVisible ? {
                            strokeDashoffset: 175.93 - (skill.level / 100) * 175.93
                        } : {}}
                        transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Skill name below orb */}
            <motion.div
                className="text-center"
                animate={{
                    y: isHovered ? -2 : 0,
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="text-xs md:text-sm font-medium text-white mb-1">
                    {skill.name}
                </div>
            </motion.div>

            {/* Magical particles */}
            <AnimatePresence>
                {isHovered && [...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                            left: '50%',
                            top: '25%',
                        }}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            x: Math.cos(i * 60 * Math.PI / 180) * 30,
                            y: Math.sin(i * 60 * Math.PI / 180) * 30,
                            opacity: [0, 1, 0]
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default function Skills() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const isMobile = useMediaQuery("(max-width: 767px)");

    useEffect(() => {
        interface MouseEventHandler {
            (e: MouseEvent): void;
        }

        const handleMouseMove: MouseEventHandler = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="skills" className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden">
            {/* Dynamic cursor follower */}
            <Helmet>
                <title>My Skills | Kalpesh Dalal</title>
                <meta name="description" content="My technical arsenal, including frontend technologies like React and Next.js, backend technologies like Node.js and Python, and DevOps tools like Docker and AWS." />
            </Helmet>
            <motion.div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,245,212,0.03), transparent 40%)`
                }}
            />

            <div className="container mx-auto relative z-10">
                <h2 className="mb-16 text-center text-4xl font-bold">
                    My Technical  <span className="text-[rgb(var(--color-primary))]">Arsenal</span>
                </h2>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {skillCategories.map((category, index) => (
                        <MagneticCard key={category.title} index={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.2,
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 100
                                }}
                                onHoverStart={() => !isMobile && setActiveCard(index)}
                                onHoverEnd={() => !isMobile && setActiveCard(null)}
                                className="group relative h-[400px] md:h-[500px] perspective-1000"
                            >
                                {/* Card background with glassmorphism - no rotating border */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl" />

                                {/* Inner card */}
                                <div className="absolute inset-[1px] bg-black/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-8">
                                    {/* Header */}
                                    <div className="text-center mb-6 md:mb-8">
                                        <motion.div
                                            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl md:text-3xl shadow-2xl"
                                            whileHover={{
                                                rotateY: 180,
                                                scale: 1.05
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {category.icon}
                                        </motion.div>

                                        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                                            {category.title}
                                        </h3>

                                        <motion.div
                                            className="w-12 md:w-16 h-0.5 bg-primary mx-auto rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.3 + 1 }}
                                        />
                                    </div>

                                    {/* Skills constellation */}
                                    <div className="relative flex-1">
                                        <AnimatePresence mode="wait">
                                            {isMobile || activeCard === index ? (
                                                <motion.div
                                                    key={`constellation-${index}`}
                                                    className="grid grid-cols-4 gap-3 md:gap-4 place-items-center h-52 md:h-64 "
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {category.skills.map((skill, skillIndex) => (
                                                        <SkillOrb
                                                            key={skill.name}
                                                            skill={skill}
                                                            index={skillIndex}
                                                            isVisible={isMobile || activeCard === index}
                                                        />
                                                    ))}
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key={`placeholder-${index}`}
                                                    className="flex flex-col items-center justify-center h-52 md:h-64"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    <motion.div
                                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 md:mb-6"
                                                        animate={{
                                                            scale: [1, 1.05, 1],
                                                            rotate: [0, 5, -5, 0]
                                                        }}
                                                        transition={{
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        <span className="text-3xl md:text-4xl opacity-50">{category.icon}</span>
                                                    </motion.div>

                                                    <motion.p
                                                        className="text-gray-400 text-center font-medium text-sm md:text-base"
                                                        animate={{
                                                            opacity: [0.5, 1, 0.5],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        Hover to reveal
                                                        <br />
                                                        <span className="text-primary">skill constellation</span>
                                                    </motion.p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </MagneticCard>
                    ))}
                </div>
            </div>
        </section>
    );
}