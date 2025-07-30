import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { BookOpen, CheckCircle, Clock, PlayCircle } from "lucide-react";

const roadmapData = [
  {
    year: 1,
    semester: 1,
    courses: [
      { name: "Introduction to Programming", progress: 85, status: "in-progress" },
      { name: "Computer Mathematics", progress: 100, status: "completed" },
      { name: "English for IT", progress: 60, status: "in-progress" }
    ]
  },
  {
    year: 1,
    semester: 2,
    courses: [
      { name: "Data Structures", progress: 0, status: "upcoming" },
      { name: "Web Programming", progress: 0, status: "upcoming" },
      { name: "Database Fundamentals", progress: 0, status: "upcoming" }
    ]
  },
  {
    year: 2,
    semester: 1,
    courses: [
      { name: "Object-Oriented Programming", progress: 0, status: "locked" },
      { name: "Database Systems", progress: 0, status: "locked" },
      { name: "Software Engineering", progress: 0, status: "locked" }
    ]
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-sage-green" />;
    case "in-progress":
      return <PlayCircle className="h-4 w-4 text-warm-orange" />;
    case "upcoming":
      return <Clock className="h-4 w-4 text-soft-blue" />;
    default:
      return <BookOpen className="h-4 w-4 text-muted-foreground" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "border-sage-green/30 bg-sage-green/5";
    case "in-progress":
      return "border-warm-orange/30 bg-warm-orange/5";
    case "upcoming":
      return "border-soft-blue/30 bg-soft-blue/5";
    default:
      return "border-muted bg-muted/20";
  }
};

const LearningRoadmap = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">แผนการเรียน</h2>
          <p className="text-muted-foreground">เส้นทางการเรียนตามหลักสูตรมหาวิทยาลัย</p>
        </div>
        <Button variant="cta" className="gap-2">
          <BookOpen className="h-4 w-4" />
          ดูทั้งหมด
        </Button>
      </div>

      <div className="grid gap-6">
        {roadmapData.map((yearData, yearIndex) => (
          <Card key={yearIndex} className="p-6 bg-gradient-to-br from-card to-warm-cream">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                ปีที่ {yearData.year} ภาคเรียนที่ {yearData.semester}
              </h3>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {yearData.courses.map((course, courseIndex) => (
                <Card 
                  key={courseIndex} 
                  className={`p-4 border transition-all duration-200 hover:shadow-md ${getStatusColor(course.status)}`}
                >
                  <div className="flex items-start gap-3">
                    {getStatusIcon(course.status)}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground mb-2 leading-tight">
                        {course.name}
                      </h4>
                      
                      {course.status !== "locked" && (
                        <div className="space-y-2">
                          <Progress 
                            value={course.progress} 
                            className="h-2" 
                          />
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              {course.progress}% เสร็จสิ้น
                            </span>
                            {course.status === "in-progress" && (
                              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                เข้าเรียน
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {course.status === "locked" && (
                        <p className="text-xs text-muted-foreground">
                          ปลดล็อกเมื่อเสร็จสิ้นวิชาก่อนหน้า
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningRoadmap;