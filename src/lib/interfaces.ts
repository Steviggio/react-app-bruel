export interface CategorySchema extends Document {
  id: number;
  name: string;
}

export interface GalleryProps {
  works: Work[];
  selectedCategory: number | null;
}

export interface User extends Document {
  email: string;
  password: string;
}

export interface Work extends Document {
  id: number;
  title: string;
  imageUrl: string;
  categoryId: number | string;
  userId: number | string;
  category: CategorySchema[];
}

export interface AddProjectModalProps {
  show: boolean;
  onCloseButtonClick: () => void;
  projects: Work[];
}