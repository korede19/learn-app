export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  bgColor: string;
  category: string;
  duration?: string;
  students?: number;
}

export interface Mentor {
  id: number;
  name: string;
  role: string;
  avatar: string;
  avatarBg: string;
  status: "verified" | "active";
  courses?: number;
  students?: number;
}

export interface SavedCourse {
  id: number;
  title: string;
  lessons: string;
  image: string;
  progress?: number;
  lastAccessed?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface CoursesData {
  allCourses: Course[];
  topMentors: Mentor[];
  savedCourses: SavedCourse[];
  categories: Category[];
}
