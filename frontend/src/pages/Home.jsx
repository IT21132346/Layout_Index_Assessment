import React from "react";
import { useEffect } from "react";
import CategoryDetails from "../components/CategoryDetails";
import { useCategoryContext } from "../hooks/useCategoryContext";


const Home = () => {
  //const [categories, setCategories] = useState(null);
  const {categories, dispatch} = useCategoryContext()

  //fetch data from DB
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("/api/categories");
      const json = await response.json();

      if (response.ok) {
        dispatch({type:'SET_CATEGORY', payload:json})
        //setCategories(json);
      }
    };

    fetchCategory();
  }, []);
  return (
    <div className="home">
      <div>
        <ul>
        {categories && categories.map((category) => (
            <CategoryDetails key={category._id} category={category} />  
        ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
