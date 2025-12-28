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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Job Opportunities</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Filter by skill:</span>
              <Select value={selectedSkill} onValueChange={handleSkillChange}>
                <SelectTrigger className="w-48">
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
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
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
