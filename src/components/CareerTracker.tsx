import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Target, TrendingUp, Users, Award } from "lucide-react";

const careerPaths = [
  {
    title: "Frontend Developer",
    progress: 65,
    requiredSkills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
    completedSkills: ["HTML/CSS", "JavaScript", "React"],
    nextMilestone: "เรียน TypeScript",
    salary: "25,000 - 45,000 บาท",
    demand: "สูง"
  },
  {
    title: "Data Scientist", 
    progress: 30,
    requiredSkills: ["Python", "SQL", "Machine Learning", "Statistics"],
    completedSkills: ["Python"],
    nextMilestone: "เรียน SQL และ Statistics",
    salary: "35,000 - 65,000 บาท", 
    demand: "สูงมาก"
  },
  {
    title: "DevOps Engineer",
    progress: 15,
    requiredSkills: ["Linux", "Docker", "AWS", "CI/CD"],
    completedSkills: [],
    nextMilestone: "เรียน Linux fundamentals",
    salary: "40,000 - 70,000 บาท",
    demand: "สูงมาก"
  }
];

const CareerTracker = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">เส้นทางอาชีพ</h2>
          <p className="text-muted-foreground">ติดตามความก้าวหน้าสู่เป้าหมายอาชีพ</p>
        </div>
        <Button variant="warm" className="gap-2">
          <Target className="h-4 w-4" />
          เพิ่มเป้าหมาย
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {careerPaths.map((path, index) => (
          <Card key={index} className="p-6 bg-gradient-to-br from-card to-warm-cream hover:shadow-lg transition-all duration-200">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{path.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {path.demand}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{path.progress}%</p>
                  <p className="text-xs text-muted-foreground">ความคืบหน้า</p>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <Progress value={path.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {path.nextMilestone}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">ทักษะที่จำเป็น:</p>
                <div className="flex flex-wrap gap-1">
                  {path.requiredSkills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant={path.completedSkills.includes(skill) ? "default" : "outline"}
                      className={`text-xs ${
                        path.completedSkills.includes(skill) 
                          ? "bg-sage-green text-white" 
                          : "text-muted-foreground"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Salary */}
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">เงินเดือน:</span>
                  <span className="font-medium text-foreground">{path.salary}</span>
                </div>
              </div>

              {/* Action */}
              <Button variant="cta" size="sm" className="w-full">
                ดูแผนการเรียน
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-sage-green/10 to-sage-green/5">
          <Award className="h-6 w-6 text-sage-green mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground">ใบประกาศ</p>
        </Card>
        
        <Card className="p-4 text-center bg-gradient-to-br from-warm-orange/10 to-warm-orange/5">
          <Target className="h-6 w-6 text-warm-orange mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-muted-foreground">เป้าหมายอาชีพ</p>
        </Card>
        
        <Card className="p-4 text-center bg-gradient-to-br from-soft-blue/10 to-soft-blue/5">
          <Users className="h-6 w-6 text-soft-blue mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">45</p>
          <p className="text-xs text-muted-foreground">เครือข่าย</p>
        </Card>
        
        <Card className="p-4 text-center bg-gradient-to-br from-primary/10 to-primary/5">
          <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">89%</p>
          <p className="text-xs text-muted-foreground">คะแนนเฉลี่ย</p>
        </Card>
      </div>
    </div>
  );
};

export default CareerTracker;