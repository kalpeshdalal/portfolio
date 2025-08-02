import { motion } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";

const achievements = [
  {
    icon: <FiAward className="text-primary" size={24} />,
    title: "Certified Frontend Developer",
    issuer: "Hackerrank",
  },
  {
    icon: <FiStar className="text-primary" size={24} />,
    title: "Gold Badge - Competitive Coding",
    issuer: "Hackerrank",
  },
   {
    icon: <FiAward className="text-primary" size={24} />,
    title: "SQL Certificate",
    issuer: "Hackerrank",
  },
  {
    icon: <FiStar className="text-primary" size={24} />,
    title: "Maharashtra Talent Search Examination (MTSE)",
    issuer: "Scholarship Recipient",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">
      <h2 className="mb-16 text-center text-4xl font-bold">
        Awards & <span className="text-primary">Certifications</span>
      </h2>
      <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-6 p-6 rounded-xl bg-surface backdrop-blur-sm"
          >
            <div className="flex-shrink-0">{ach.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{ach.title}</h3>
              <p className="text-gray-400">{ach.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}