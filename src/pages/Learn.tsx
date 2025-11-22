import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLearning } from '@/services/learning';
import { getCurrentUser } from '@/services/auth';
import { ExternalLink, AlertCircle } from 'lucide-react';

const Learn = () => {
  const { skill } = useParams<{ skill: string }>();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const learningData = getLearning(skill || '', user?.id || '');

  const handleStartTest = () => {
    navigate(`/skill/${skill}/test`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {skill} Learning Path
            </h1>
            <p className="text-muted-foreground">
              Based on your pre-assessment, here's what we recommend
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent" />
                  Topics to Focus On
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {learningData.weakTopics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {learningData.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary">
                        {resource.title}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-4">
              <Button onClick={handleStartTest} size="lg">
                Start Adaptive Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
