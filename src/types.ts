export interface ProfileData {
  name: string;
  tagline: string;
  age: number;
  location: string;
  school: string;
  email: string;
  phone: string;
  instagramUrl: string;
  instagramHandle: string;
  bio: string;
  education: EducationItem[];
  leadership: LeadershipItem[];
  learningJourney: LearningItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  role: string;
  period: string;
  status: 'Current' | 'Completed' | 'In Progress';
  description: string;
  highlights?: string[];
}

export interface LeadershipItem {
  id: string;
  organization: string;
  title: string;
  roleType: string;
  status: string;
  description: string;
  responsibilities: string[];
}

export interface LearningItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}
