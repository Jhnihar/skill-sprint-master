export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  skill: string;
  salary: string;
  type: string;
}

const jobsData: Job[] = [
  {
    id: '1',
    title: 'Python Developer',
    company: 'TechCorp Inc',
    location: 'Remote',
    skill: 'Python',
    salary: '$80k - $120k',
    type: 'Full-time',
  },
  {
    id: '2',
    title: 'Senior Python Engineer',
    company: 'DataSystems',
    location: 'New York, NY',
    skill: 'Python',
    salary: '$120k - $160k',
    type: 'Full-time',
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'WebDev Studio',
    location: 'San Francisco, CA',
    skill: 'JavaScript',
    salary: '$90k - $130k',
    type: 'Full-time',
  },
  {
    id: '4',
    title: 'React Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    skill: 'JavaScript',
    salary: '$100k - $140k',
    type: 'Contract',
  },
  {
    id: '5',
    title: 'Web Designer',
    company: 'Creative Agency',
    location: 'Los Angeles, CA',
    skill: 'HTML',
    salary: '$70k - $100k',
    type: 'Full-time',
  },
  {
    id: '6',
    title: 'UI/UX Developer',
    company: 'Design House',
    location: 'Remote',
    skill: 'CSS',
    salary: '$85k - $115k',
    type: 'Full-time',
  },
  {
    id: '7',
    title: 'Java Backend Developer',
    company: 'Enterprise Solutions',
    location: 'Chicago, IL',
    skill: 'Java',
    salary: '$95k - $135k',
    type: 'Full-time',
  },
  {
    id: '8',
    title: 'Full Stack Java Developer',
    company: 'FinTech Group',
    location: 'Boston, MA',
    skill: 'Java',
    salary: '$110k - $150k',
    type: 'Full-time',
  },
];

const fallbackJobs: Job[] = [
  {
    id: 'fallback1',
    title: 'Software Engineer',
    company: 'Tech Company',
    location: 'Remote',
    skill: 'General',
    salary: '$80k - $120k',
    type: 'Full-time',
  },
  {
    id: 'fallback2',
    title: 'Junior Developer',
    company: 'Startup Inc',
    location: 'Various',
    skill: 'General',
    salary: '$60k - $90k',
    type: 'Full-time',
  },
];

export const getJobs = (skill?: string): Job[] => {
  if (!skill || skill === 'all') {
    return jobsData;
  }

  const filtered = jobsData.filter(job => 
    job.skill.toLowerCase() === skill.toLowerCase()
  );

  return filtered.length > 0 ? filtered : fallbackJobs;
};
