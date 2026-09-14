import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    description:
      'A dynamic full-stack developer portfolio with a React frontend, Node.js backend, MongoDB database, and Angular admin dashboard.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
  },
  {
    id: 'cybersecurity-lab',
    title: 'Cybersecurity Lab',
    description:
      'A personal security lab for learning ethical hacking, web security, networking, and vulnerability analysis.',
    technologies: ['Linux', 'Networking', 'Web Security', 'Python'],
    featured: true,
  },
]