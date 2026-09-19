import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Evan Matheesha',
  tagline: 'Student, Gavelier & Aspiring Web Developer',
  age: 14,
  location: 'Sri Lanka',
  school: 'De Mazenod College',
  email: 'matheeshaevan91@gmail.com',
  phone: '0729258076',
  instagramUrl: 'https://www.instagram.com/matheeshaevan?stkn=YXpkazNzcjBnMGNt',
  instagramHandle: 'matheeshaevan',
  bio: 'I am a 14-year-old student at De Mazenod College driven by curiosity, communication, and software craftsmanship. Alongside academic pursuits, I serve as Sergeant at Arms (SAA) at HCC Gavel Club and actively explore advanced programming concepts to build modern, responsive web applications.',
  education: [
    {
      id: 'dmc',
      institution: 'De Mazenod College',
      role: 'Student',
      period: 'Present',
      status: 'Current',
      description: 'Pursuing comprehensive secondary education with an emphasis on academic discipline, analytical thinking, and school co-curricular activities.',
      highlights: [
        'Active contributor to school community',
        'Balanced academics with co-curricular leadership'
      ]
    },
    {
      id: 'pet-cert',
      institution: 'Cambridge English Qualifications',
      role: 'PET (Preliminary English Test) Level Certification',
      period: 'Candidate',
      status: 'In Progress',
      description: 'Actively preparing for the Cambridge Preliminary English Test (B1 CEFR level), reinforcing proficiency in practical spoken, written, and comprehension English.',
      highlights: [
        'Intermediate B1 CEFR target qualification',
        'Focus on structured fluency and academic communication'
      ]
    },
    {
      id: 'edexel-academy',
      institution: 'De Mazenod Edexel English Academy',
      role: 'Academy Graduate / Alumnus',
      period: 'Completed',
      status: 'Completed',
      description: 'Successfully completed dedicated foundational and intermediate English language training, honing grammar, speech, and composition.',
      highlights: [
        'Rigorous language foundations',
        'Public speaking and grammar training'
      ]
    }
  ],
  leadership: [
    {
      id: 'hcc-gavel',
      organization: 'HCC Gavel Club',
      title: 'Sergeant at Arms (SAA) & Active Member',
      roleType: 'Executive Committee & Public Speaking',
      status: 'Active',
      description: 'Serving as Sergeant at Arms for HCC Gavel Club (affiliated with Toastmasters International youth program), fostering leadership, meeting decorum, and public speaking excellence.',
      responsibilities: [
        'Maintaining meeting order, room preparedness, and logistical coordination for Gavel sessions',
        'Delivering prepared and impromptu speeches to refine articulation and stage presence',
        'Fostering a supportive, growth-oriented environment for young speakers'
      ]
    }
  ],
  learningJourney: [
    {
      id: 'web-dev',
      category: 'Software Engineering',
      title: 'Advanced Programming & Web Development',
      description: 'Diving deep into modern web architectures, algorithmic problem solving, clean component patterns, and responsive interface design.',
      tags: ['TypeScript', 'React', 'Modern JavaScript', 'Tailwind CSS', 'Algorithms', 'Clean Code']
    },
    {
      id: 'oratory',
      category: 'Communication & Leadership',
      title: 'Oratory & Parliamentary Procedure',
      description: 'Strengthening structured debate, prepared speechcraft, speech evaluation, and meeting protocol through HCC Gavel Club.',
      tags: ['Public Speaking', 'Meeting Decorum', 'Leadership', 'Active Listening', 'Toastmasters Guidelines']
    },
    {
      id: 'linguistics',
      category: 'Language Proficiency',
      title: 'English Language Mastery & PET Certification',
      description: 'Expanding vocabulary, formal composition, and verbal fluency on track to Cambridge PET certification.',
      tags: ['Cambridge Assessment', 'B1 Preliminary', 'Grammar & Syntax', 'Verbal Articulation']
    }
  ]
};
