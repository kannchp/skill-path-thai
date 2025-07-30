import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";

const Career = () => {
  const { t } = useLanguage();

  const careerPaths = [
    {
      title: "Frontend Developer",
      salary: "₿40,000 - ₿80,000",
      experience: "0-2 years",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      openings: 45
    },
    {
      title: "Backend Developer", 
      salary: "₿45,000 - ₿90,000",
      experience: "1-3 years",
      skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
      openings: 38
    },
    {
      title: "Full Stack Developer",
      salary: "₿50,000 - ₿100,000",
      experience: "2-4 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      openings: 32
    },
    {
      title: "Data Scientist",
      salary: "₿60,000 - ₿120,000",
      experience: "1-3 years",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      openings: 21
    },
    {
      title: "DevOps Engineer",
      salary: "₿70,000 - ₿130,000",
      experience: "2-5 years",
      skills: ["Kubernetes", "AWS", "CI/CD", "Terraform"],
      openings: 18
    },
    {
      title: "UI/UX Designer",
      salary: "₿35,000 - ₿75,000",
      experience: "0-2 years",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      openings: 29
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('career.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('career.subtitle')}
          </p>
        </div>

        {/* Career Paths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((career, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-sage-green/20 text-sage-green">
                    {career.openings} openings
                  </span>
                </div>
                <CardTitle className="text-xl">{career.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>{career.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{career.experience}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="cta">
                    View Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;