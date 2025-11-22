import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getJobs, Job } from '@/services/jobs';
import { MapPin, DollarSign, Briefcase } from 'lucide-react';

const Jobs = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('all');
  const [jobs, setJobs] = useState<Job[]>(getJobs());

  const handleSkillChange = (skill: string) => {
    setSelectedSkill(skill);
    setJobs(getJobs(skill === 'all' ? undefined : skill));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="fixed top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-40 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Job Opportunities
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Filter by skill:</span>
              <Select value={selectedSkill} onValueChange={handleSkillChange}>
                <SelectTrigger className="w-48 hover:border-primary/50 transition-colors">
                  <SelectValue placeholder="Select skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="JavaScript">JavaScript</SelectItem>
                  <SelectItem value="HTML">HTML</SelectItem>
                  <SelectItem value="CSS">CSS</SelectItem>
                  <SelectItem value="Java">Java</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="hover-glow group cursor-pointer backdrop-blur-sm bg-white/80 gradient-border"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{job.title}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <DollarSign className="h-4 w-4 text-secondary" />
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Briefcase className="h-4 w-4 text-accent" />
                    <span>{job.type}</span>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-xs font-medium group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      {job.skill}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
