import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { getPreTest, Question } from '@/services/pretest';
import { toast } from 'sonner';

const PreTest = () => {
  const { skill } = useParams<{ skill: string }>();
  const navigate = useNavigate();
  const questions = getPreTest(skill || '');
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleAnswerChange = (questionId: string, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      toast.error('Please answer all questions before submitting');
      return;
    }

    toast.success('Pre-test completed! Loading your learning path...');
    navigate(`/skill/${skill}/learn`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {skill} Pre-Assessment
            </h1>
            <p className="text-muted-foreground">
              Answer these questions to help us understand your current level
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question: Question, index: number) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {index + 1}. {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                    value={answers[question.id]?.toString()}
                  >
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value={optionIndex.toString()} id={`${question.id}-${optionIndex}`} />
                        <Label htmlFor={`${question.id}-${optionIndex}`} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button onClick={handleSubmit} size="lg">
              Submit Pre-Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreTest;
