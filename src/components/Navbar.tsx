import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { logout, getCurrentUser } from '@/services/auth';
import { GraduationCap, Briefcase, LogOut, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="border-b border-border/50 bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-xl font-bold group">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skill Sprint
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="ghost" className="gap-2 hover:bg-secondary/10 hover:text-secondary transition-colors">
                <Briefcase className="h-4 w-4" />
                Jobs
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className="gap-2 hover:bg-destructive/10 hover:text-destructive transition-colors" 
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
