import { BookOpen, Bell, User, Globe, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-gradient-to-br from-primary to-deep-maroon rounded-lg">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ITJC</h1>
              <p className="text-xs text-muted-foreground">IT Journey Companion</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/courses" 
            className={`transition-colors font-medium ${
              isActive('/courses') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            {t('nav.courses')}
          </Link>
          <Link 
            to="/tests" 
            className={`transition-colors font-medium ${
              isActive('/tests') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            {t('nav.tests')}
          </Link>
          <Link 
            to="/career" 
            className={`transition-colors font-medium ${
              isActive('/career') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            {t('nav.career')}
          </Link>
          <Link 
            to="/advisors" 
            className={`transition-colors font-medium ${
              isActive('/advisors') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            {t('nav.advisors')}
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleLanguage}>
            <Globe className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-warm-orange text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Globe className="mr-2 h-4 w-4" />
                <span>Language Preferences</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Help & Support</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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