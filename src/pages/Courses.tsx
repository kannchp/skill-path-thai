import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const Courses = () => {
  const { t } = useLanguage();

  const courses = [
    {
      title: "Introduction to Programming",
      duration: "8 weeks",
      students: 1250,
      rating: 4.8,
      level: "Beginner"
    },
    {
      title: "Data Structures & Algorithms",
      duration: "12 weeks", 
      students: 890,
      rating: 4.9,
      level: "Intermediate"
    },
    {
      title: "Web Development",
      duration: "10 weeks",
      students: 2100,
      rating: 4.7,
      level: "Beginner"
    },
    {
      title: "Database Systems",
      duration: "8 weeks",
      students: 675,
      rating: 4.6,
      level: "Intermediate"
    },
    {
      title: "Mobile App Development",
      duration: "14 weeks",
      students: 530,
      rating: 4.8,
      level: "Advanced"
    },
    {
      title: "Cloud Computing",
      duration: "6 weeks",
      students: 420,
      rating: 4.9,
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('courses.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-sage-green/20 text-sage-green' :
                    course.level === 'Intermediate' ? 'bg-warm-orange/20 text-warm-orange' :
                    'bg-deep-maroon/20 text-deep-maroon'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-warm-orange text-warm-orange" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;