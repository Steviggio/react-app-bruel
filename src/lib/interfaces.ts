export interface CategorySchema extends Document {
  id: number;
  name: string;
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

// function generateAllWorks(): void {
  //   const sectionGallery: HTMLElement | null = document.querySelector(".gallery");
  
  //   if (sectionGallery) {
  //       sectionGallery.innerHTML = "";
  
  //       worksElements.forEach((work: Work) => {
  //           const figureDiv = document.createElement("figure");
            
  //           const workTitle = document.createElement("h3");
  //           workTitle.innerText = work.title;
  
  //           const workImage = document.createElement("img");
  //           workImage.src = work.imageUrl;
  
  //           figureDiv.appendChild(workImage);
  //           figureDiv.appendChild(workTitle);
  
  //           sectionGallery.appendChild(figureDiv);
  //       });
  //   } else {
  //       console.error("La classe .gallery n'a pas été trouvée dans le document.");
  //   }
  // }