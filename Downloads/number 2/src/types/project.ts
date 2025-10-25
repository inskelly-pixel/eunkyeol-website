export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  description: string;
  images: string[];
  tags?: string[];
   // 👇 position 속성 추가
  position?: {
    top: number;
    left: number;
  };
}
