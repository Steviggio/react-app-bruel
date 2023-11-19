export interface CategorySchema {
  id: number;
  name: string;
}

export interface GalleryProps {
  works: Work[];
  selectedCategory: number | null;
}

export interface User {
  email: string;
  password: string;
}

export interface Work {
  id: number;
  title: string;
  imageUrl: string;
  categoryId: number;
  userId: number;
  category: {
    id: number;
    name: string
  };
}

export interface WorkList {
  works: Work[];
}

export interface GalleryModalProps {
  show: boolean;
  onCloseButtonClick: () => void;
  projects: Work[];
  deleteProject: (index: number) => Promise<void>; 
}


export interface AddProjectModalProps {
  show: boolean;
  onCloseButtonClick: () => void;
  backToPrevious: () => void;
}

export interface PostWorkBody {
  image: string;
  title: string;
  category: CategorySchema["id"];
}