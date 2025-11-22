import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/services/auth';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Code, FileCode, Globe, Palette, Coffee, Sparkles } from 'lucide-react';

const skills = [
  { 
    name: 'Python', 
    icon: Code, 
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
    shadow: 'shadow-blue-500/50'
  },
  { 
    name: 'JavaScript', 
    icon: FileCode, 
    gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
    shadow: 'shadow-yellow-500/50'
  },
  { 
    name: 'HTML', 
    icon: Globe, 
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    shadow: 'shadow-orange-500/50'
  },
  { 
    name: 'CSS', 
    icon: Palette, 
    gradient: 'from-purple-500 via-violet-600 to-indigo-500',
    shadow: 'shadow-purple-500/50'
  },
  { 
    name: 'Java', 
    icon: Coffee, 
    gradient: 'from-red-500 via-rose-600 to-pink-500',
    shadow: 'shadow-red-500/50'
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSkillClick = (skillName: string) => {
    navigate(`/skill/${skillName}/pretest`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient orbs following cursor */}
      <div 
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 100, 255, 0.1), transparent 40%)`
        }}
      />
      
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-4 animate-pulse-glow">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Interactive Learning Platform
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
            Welcome, {user?.name}!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a skill to start your assessment journey and unlock your potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="group cursor-pointer hover-glow gradient-border relative overflow-hidden backdrop-blur-sm bg-white/80"
                onClick={() => handleSkillClick(skill.name)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <CardContent className="p-8 flex flex-col items-center text-center gap-4 relative z-10">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${skill.gradient} transform group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:${skill.shadow} group-hover:shadow-2xl`}>
                    <Icon className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Test your knowledge and improve your skills
                  </p>
                  
                  {/* Decorative gradient bar */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-500 mt-2`} />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Floating decorative elements */}
        <div className="fixed top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="fixed bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Dashboard;
