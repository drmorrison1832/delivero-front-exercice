import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// const apiKey = import.meta.env.VITE_API_KEY;

// Components
import Commit from "./components/Commit";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
// import { config } from "@fortawesome/fontawesome-svg-core";

// Icons
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
// library.add(faTrash, faRotateLeft);

const App = () => {
  // Import API key

  // Create states
  const [restaurantInfo, setRestaurantInfo] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  const [basket, setBasket] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  // Console logs
  console.log("App (re)started", new Date().getMilliseconds());

  // Effects

  async function retrieveData() {
    console.log("App: RetrieveData...", new Date().getMilliseconds());

    let resto = prompt(
      "Quel resto ?\nFormat: paris/1er-louvre/le-pain-quotidien-saint-honore"
    );

    try {
      let response = await axios.get(
        `https://back--deliveroo-back-end--44tkxvkbbxk5.code.run/?resto=${resto}`
      );
      // .get(`http://localhost:3200/?resto=${resto}`)

      setRestaurantInfo(response.data.restaurant);
      setCategories(response.data.categories);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setErrorLoading(true);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    retrieveData();
  }, []);

  console.log("App: rendering...", new Date().getMilliseconds());
  if (errorLoading) {
    return <h1>Error loading content. Please verify API request.</h1>;
  }
  return isLoading ? (
    <>
      <Commit />
      <h1>Page is loading...</h1>
    </>
  ) : (
    <>
      <Commit />
      <Header restaurantInfo={restaurantInfo} />
      <main className="container">
        <Menu
          categories={categories}
          setCategories={setCategories}
          basket={basket}
          setBasket={setBasket}
        />
        <Basket basket={basket} setBasket={setBasket} />
      </main>
    </>
  );
};

export default App;
