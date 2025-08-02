import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Ant Design"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Other Technologies",
        skills: ["MERN Stack", "Blockchain", "Ether.js", "Web3", "GIT", "AWS", "Unit Testing", "Firebase"]
    }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-surface/50">
        <div className="container mx-auto">
            <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold">
                My Technical <span className="text-primary">Arsenal</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category, i) => (
                    <motion.div
                        key={category.title}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-black/30 p-8 rounded-lg shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6">{category.title}</h3>
                        <ul className="space-y-4">
                            {category.skills.map(skill => (
                                <li key={skill} className="flex items-center gap-3">
                                    <span className="text-primary">&#10003;</span>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}