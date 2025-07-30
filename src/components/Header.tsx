import { BookOpen, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary to-deep-maroon rounded-lg">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">ITJC</h1>
            <p className="text-xs text-muted-foreground">IT Journey Companion</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            หลักสูตร
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            แบบทดสอบ
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            เส้นทางอาชีพ
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            ที่ปรึกษา
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-warm-orange text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                นิ
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">นิรัชฌา คำทอง</p>
              <p className="text-xs text-muted-foreground">ปี 2 วิทยาการคอมพิวเตอร์</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;