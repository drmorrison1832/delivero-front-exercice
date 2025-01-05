import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Header from "./components/Header";
import Menu from "./components/Menu";

// Icons
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
// library.add(faTrash, faRotateLeft);

const App = () => {
  // Create states
  const [restaurantInfo, setRestaurantInfo] = useState(undefined);
  const [categories, setCategories] = useState(undefined);

  // Console Logs
  console.log("App (re)started", new Date().getMilliseconds());

  // Effects

  useEffect(function retrieveData() {
    console.log("App: RetrieveData...", new Date().getMilliseconds());

    axios
      .get("https://back--deliveroo-back-end--44tkxvkbbxk5.code.run/")
      .then((response) => {
        const tempRestaurantInfo = response.data.restaurant;

        const tempCategories = response.data.categories;
        setCategories(tempCategories);

        setRestaurantInfo(tempRestaurantInfo);
        setCategories(tempCategories);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Declare functions

  console.log("App: rendering...", new Date().getMilliseconds());

  if (restaurantInfo && categories) {
    return (
      <>
        <Header restaurantInfo={restaurantInfo} />
        <Menu categories={categories} setCategories={setCategories} />
      </>
    );
  }
};

export default App;
