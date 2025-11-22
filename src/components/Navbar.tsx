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
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-xl font-bold text-primary">
            <GraduationCap className="h-6 w-6" />
            <span>Skill Sprint</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" className="gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="ghost" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Jobs
              </Button>
            </Link>
            <Button variant="ghost" className="gap-2" onClick={handleLogout}>
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
