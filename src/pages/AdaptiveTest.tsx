import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { getAdaptiveQuestion, submitAdaptiveAnswer, AdaptiveQuestion } from '@/services/adaptive';
import { toast } from 'sonner';

const AdaptiveTest = () => {
  const { skill } = useParams<{ skill: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<AdaptiveQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    loadQuestion();
  }, []);

  const loadQuestion = () => {
    const question = getAdaptiveQuestion(skill || '', level);
    if (question?.endTest) {
      toast.success('Adaptive test completed!');
      navigate(`/skill/${skill}/learn`);
      return;
    }
    setCurrentQuestion(question);
    setSelectedAnswer(null);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast.error('Please select an answer');
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;
    const result = submitAdaptiveAnswer(skill || '', currentQuestion?.id || '', isCorrect);

    if (result.endTest) {
      toast.success('Adaptive test completed!');
      navigate(`/skill/${skill}/learn`);
      return;
    }

    toast.success(result.message);
    
    // Adjust level based on correctness
    if (isCorrect) {
      setLevel(prev => Math.min(prev + 1, 3));
    } else {
      setLevel(prev => Math.max(prev - 1, 1));
    }

    loadQuestion();
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-lg text-muted-foreground">Loading question...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {skill} Adaptive Test
            </h1>
            <p className="text-muted-foreground">
              Current Level: {level}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                value={selectedAnswer?.toString()}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="mt-6 flex justify-center">
                <Button onClick={handleSubmit} size="lg">
                  Submit Answer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveTest;
