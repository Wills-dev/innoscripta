export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  source: string;
  author: string;
  publishedAt: string;
  newsUrl: string;
  category: string;
}

export interface filterValueProps {
  categories: string[];
  authors?: string[];
  sources: string[];
  handleActivateSidebar: () => void;
}

export interface ReadMoreProps {
  text: string;
  maxLength: number;
  style?: string;
}

export interface StaffPickContentProps {
  title: string;
  filteredNews: Article[];
}
