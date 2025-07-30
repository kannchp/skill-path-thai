import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Target, TrendingUp } from "lucide-react";

const Tests = () => {
  const { t } = useLanguage();

  const tests = [
    {
      title: "Programming Fundamentals",
      questions: 25,
      duration: "45 min",
      difficulty: "Easy",
      attempts: 1234
    },
    {
      title: "Data Structures Quiz",
      questions: 30,
      duration: "60 min", 
      difficulty: "Medium",
      attempts: 892
    },
    {
      title: "Web Development Assessment",
      questions: 35,
      duration: "75 min",
      difficulty: "Medium",
      attempts: 567
    },
    {
      title: "Database Systems Exam",
      questions: 40,
      duration: "90 min",
      difficulty: "Hard",
      attempts: 445
    },
    {
      title: "Algorithm Design Test",
      questions: 20,
      duration: "120 min",
      difficulty: "Hard",
      attempts: 321
    },
    {
      title: "System Design Interview",
      questions: 15,
      duration: "180 min",
      difficulty: "Expert",
      attempts: 156
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('tests.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('tests.subtitle')}
          </p>
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    test.difficulty === 'Easy' ? 'bg-sage-green/20 text-sage-green' :
                    test.difficulty === 'Medium' ? 'bg-warm-orange/20 text-warm-orange' :
                    test.difficulty === 'Hard' ? 'bg-deep-maroon/20 text-deep-maroon' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>
                <CardTitle className="text-xl">{test.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>{test.questions} questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{test.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>{test.attempts.toLocaleString()} attempts</span>
                  </div>
                </div>
                <Button className="w-full" variant="cta">
                  Start Test
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;