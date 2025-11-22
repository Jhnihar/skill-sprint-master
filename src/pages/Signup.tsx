import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { signup } from '@/services/auth';
import { GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    const user = signup(name, email, password);
    if (user) {
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } else {
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="fixed top-1/3 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
      
      <Card className="w-full max-w-md relative z-10 hover-glow backdrop-blur-sm bg-white/90">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl animate-pulse-glow">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skill Sprint
              </span>
            </div>
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Start your learning journey today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all">
              Create Account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium hover:text-secondary transition-colors">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
