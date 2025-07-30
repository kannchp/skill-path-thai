import React, { createContext, useContext, useState } from 'react';

export type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  th: {
    // Navigation
    'nav.courses': 'หลักสูตร',
    'nav.tests': 'แบบทดสอบ',
    'nav.career': 'เส้นทางอาชีพ',
    'nav.advisors': 'ที่ปรึกษา',
    
    // Pages
    'courses.title': 'หลักสูตร IT',
    'courses.subtitle': 'เรียนรู้ทักษะ IT ที่จำเป็นสำหรับอนาคต',
    'tests.title': 'แบบทดสอบ',
    'tests.subtitle': 'ทดสอบความรู้และเตรียมพร้อมสำหรับการสอบ',
    'career.title': 'เส้นทางอาชีพ',
    'career.subtitle': 'วางแผนอาชีพและค้นหางานในสาย IT',
    'advisors.title': 'ที่ปรึกษา',
    'advisors.subtitle': 'ปรึกษาผู้เชี่ยวชาญและรุ่นพี่',
    
    // Common
    'common.coming_soon': 'เร็วๆ นี้',
    'common.back_home': 'กลับหน้าหลัก'
  },
  en: {
    // Navigation
    'nav.courses': 'Courses',
    'nav.tests': 'Tests',
    'nav.career': 'Career Path',
    'nav.advisors': 'Advisors',
    
    // Pages
    'courses.title': 'IT Courses',
    'courses.subtitle': 'Learn essential IT skills for your future',
    'tests.title': 'Practice Tests',
    'tests.subtitle': 'Test your knowledge and prepare for exams',
    'career.title': 'Career Path',
    'career.subtitle': 'Plan your career and find IT jobs',
    'advisors.title': 'Advisors',
    'advisors.subtitle': 'Get guidance from experts and seniors',
    
    // Common
    'common.coming_soon': 'Coming Soon',
    'common.back_home': 'Back to Home'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};