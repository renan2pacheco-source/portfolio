import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

export default function ProjectCard({ name, description, tags, link, index }: ProjectCardProps) {
  return (
    <motion.a
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -2 }}
      className="card card-hover group block relative font-mono"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-bold text-text group-hover:text-accent transition-colors">
          <span className="text-accent">$</span> {name}
        </h3>
        {link && (
          <ExternalLink className="w-3.5 h-3.5 text-text-subtle group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
        )}
      </div>

      <p className="text-text-muted text-xs leading-relaxed mb-4 text-pretty">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-text-subtle">
            #{tag.replace(/\s+/g, '')}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
