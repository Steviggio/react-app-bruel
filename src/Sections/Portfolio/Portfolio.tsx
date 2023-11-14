// Portfolio.tsx
import { useEffect, useState } from "react";
import PenToSquare from "../../assets/icons/pen-to-square-thin.png";
import Gallery from "../../components/Gallery/Gallery";
import { CategorySchema, Work } from "../../lib/interfaces";
import { isAuthTokenPresent } from "../../lib/common";
import { AddProjectModal } from "../../components/Modal/AddProjectModal";
import useModal from "../../components/Modal/useModal";
import { fetchWorks } from "../../lib/common";
import { API_ROUTES } from "../../utils/constant";

const Portfolio = () => {
  const [categories, setCategories] = useState<CategorySchema[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const { isShowing, toggle: toggleModal } = useModal();

  useEffect(() => {
    if (categories.length === 0) {
      fetch(API_ROUTES.CATEGORIES)
        .then(response => response.json())
        .then((categories) => setCategories(categories));
    }

    if (works.length === 0) {
      fetchWorks().then((works: Work[]) => setWorks(works));
    }
  }, [categories, works]);

  const handleCategoryChange = (category: number | null) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <AddProjectModal show={isShowing} onCloseButtonClick={toggleModal} projects={works} />
      <section id="portfolio">
        <h2>Mes Projets</h2>
        {isAuthTokenPresent() && (
          <div className={`modal-modify-btn`}>
            <div id="portfolio-modal">
              <img src={PenToSquare} alt="" />
              <a href="#modal-box1" className="js-modal" onClick={toggleModal}>
                modifier
              </a>
            </div>
          </div>
        )}
        <article>
          {!isAuthTokenPresent() && (
            <div className="filter">
              <button
                className="short buttons btn-all"
                onClick={() => handleCategoryChange(null)}
              >
                Tous
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${category.id === selectedCategory ? "selected " : ""
                    }short buttons`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </article>
        <Gallery works={works} selectedCategory={selectedCategory} />
      </section>
    </>
  );
};

export default Portfolio;
