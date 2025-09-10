import StatsCard from "./StatsCard";
import LearningRoadmap from "./LearningRoadmap";
import CareerTracker from "./CareerTracker";
import { BookOpen, Trophy, Clock, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
// 1. Import the toolbar
import { initToolbar } from '@stagewise/toolbar';

// 2. Define your toolbar configuration
const stagewiseConfig = {
  plugins: [],
};

// 3. Initialize the toolbar when your app starts
// Framework-agnostic approach - call this when your app initializes
function setupStagewise() {
  // Only initialize once and only in development mode
  if (process.env.NODE_ENV === 'development') {
    initToolbar(stagewiseConfig);
  }
}

// Call the setup function when appropriate for your framework
setupStagewise();
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-br from-primary via-deep-maroon to-primary/90 text-primary-foreground"> */}
      {/* <div className="bg-gradient-to-br from-rose-800 via-rose-800 to-rose-700 text-primary-foreground">  */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-900 to-purple-700 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  เริ่มต้นการเดินทาง<br />
                  <span className="text-warm-orange">IT ของคุณ</span>
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  แพลตฟอร์มการเรียนรู้ที่จะพาคุณจากปี 1 สู่การทำงานในสายไอทีอย่างมั่นใจ
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button variant="cta" size="lg" className="gap-2 shadow-xl">
                  <BookOpen className="h-5 w-5 text-white" />
                  เริ่มเรียนเลย
                </Button>
                <Button variant="warm" size="lg" className="gap-2">
                  <Users className="h-5 w-5" />
                  หาที่ปรึกษา
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-sage-green rounded-full"></div>
                    <span className="text-sm text-white/70">Introduction to Programming - เสร็จแล้ว</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-warm-orange rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/70">Computer Mathematics - กำลังเรียน (85%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <span className="text-sm text-white/70">Data Structures - เร็วๆ นี้</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            title="หลักสูตรที่เรียน"
            value="12"
            subtitle="จาก 48 หลักสูตร"
            trend="+2 เดือนนี้"
            trendUp={true}
            icon={<BookOpen className="h-5 w-5 text-theme" />}
          />
          <StatsCard
            title="คะแนนเฉลี่ย"
            value="3.45"
            subtitle="GPA ปัจจุบัน"
            trend="+0.15"
            trendUp={true}
            icon={<Trophy className="h-5 w-5 text-warm-orange" />}
          />
          <StatsCard
            title="เวลาเรียน"
            value="124"
            subtitle="ชั่วโมงในเดือนนี้"
            trend="+12 ชม."
            trendUp={true}
            icon={<Clock className="h-5 w-5 text-soft-blue" />}
          />
          <StatsCard
            title="อันดับ"
            value="#15"
            subtitle="ในคณะ (237 คน)"
            trend="↑5 อันดับ"
            trendUp={true}
            icon={<TrendingUp className="h-5 w-5 text-sage-green" />}
          />
        </div>

        {/* Learning Roadmap */}
        <LearningRoadmap />

        {/* Career Tracker */}
        <CareerTracker />

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-warm-cream to-secondary p-8 rounded-xl">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              พร้อมที่จะก้าวไปข้างหน้าแล้วหรือยัง?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              เข้าร่วมกับนักศึกษา IT มากกว่า 50,000 คนที่เชื่อใจ ITJC ในการพัฒนาทักษะและสร้างอาชีพ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="lg" className="gap-2">
                <Target className="h-5 w-5" />
                ทำแบบทดสอบ
              </Button>
              <Button variant="warm" size="lg" className="gap-2">
                <Users className="h-5 w-5" />
                เข้าร่วมชุมชน
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;