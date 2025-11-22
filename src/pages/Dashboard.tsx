import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/services/auth';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Code, FileCode, Globe, Palette, Coffee } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code, color: 'skill-python' },
  { name: 'JavaScript', icon: FileCode, color: 'skill-javascript' },
  { name: 'HTML', icon: Globe, color: 'skill-html' },
  { name: 'CSS', icon: Palette, color: 'skill-css' },
  { name: 'Java', icon: Coffee, color: 'skill-java' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleSkillClick = (skillName: string) => {
    navigate(`/skill/${skillName}/pretest`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome, {user?.name}!
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose a skill to start your assessment journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => handleSkillClick(skill.name)}
              >
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className={`p-4 rounded-full bg-${skill.color}/10`}>
                    <Icon className={`h-12 w-12 text-${skill.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Test your knowledge and improve your skills
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
