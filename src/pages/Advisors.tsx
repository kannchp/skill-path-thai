import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star, MapPin, Briefcase } from "lucide-react";

const Advisors = () => {
  const { t } = useLanguage();

  const advisors = [
    {
      name: "Sarah Johnson",
      title: "Senior Frontend Developer",
      company: "Google",
      experience: "8 years",
      rating: 4.9,
      sessions: 234,
      specialties: ["React", "TypeScript", "System Design"],
      location: "Bangkok",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "Michael Chen",
      title: "Data Science Manager",
      company: "Microsoft",
      experience: "10 years",
      rating: 4.8,
      sessions: 189,
      specialties: ["Machine Learning", "Python", "Statistics"],
      location: "Chiang Mai",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "Priya Patel",
      title: "DevOps Engineer",
      company: "Amazon",
      experience: "6 years",
      rating: 4.9,
      sessions: 156,
      specialties: ["AWS", "Kubernetes", "CI/CD"],
      location: "Phuket",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "Alex Rodriguez",
      title: "Product Manager",
      company: "Facebook",
      experience: "7 years",
      rating: 4.7,
      sessions: 201,
      specialties: ["Product Strategy", "Analytics", "Leadership"],
      location: "Bangkok",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "Emma Wilson",
      title: "UX Designer",
      company: "Apple",
      experience: "5 years",
      rating: 4.8,
      sessions: 178,
      specialties: ["User Research", "Figma", "Design Systems"],
      location: "Chiang Mai",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "David Kim",
      title: "Security Engineer",
      company: "Netflix",
      experience: "9 years",
      rating: 4.9,
      sessions: 143,
      specialties: ["Cybersecurity", "Penetration Testing", "Compliance"],
      location: "Bangkok",
      avatar: "/placeholder-avatar.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('advisors.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('advisors.subtitle')}
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={advisor.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{advisor.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{advisor.title}</p>
                    <p className="text-sm font-medium text-primary">{advisor.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warm-orange text-warm-orange" />
                      <span>{advisor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      <span>{advisor.sessions} sessions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{advisor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{advisor.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {advisor.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="cta">
                    Book Session
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

export default Advisors;