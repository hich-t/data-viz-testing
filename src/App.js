import React from "react";
import NavBar from "./Components/NavBar"
import ArticlesViewedChart from "./Components/ArticlesViewedChart";
import TimeSpentPieChart from "./Components/TimeSpentPieChart";
import ArticlesPurchasedStackedBar from "./Components/ArticlesPurchasedStackedBar";
import PercentagePurchasedWaffle from "./Components/PercentagePurchasedWaffle";
import "./App.css";

const App = () => {
  return (
    <div className="App">

    <NavBar />

      <div className="contentFrame">
        <div className="articlesViewedChart">
          <h1 className="chartTitle">
            Ratio produits achetés/visités par utilisateur
          </h1>
          <ArticlesViewedChart />
        </div>

        <div className="timeSpentChart">
          <h1 className="chartTitle">Total de Temps passé par page produit<br/>(en secondes)</h1>
          <TimeSpentPieChart />
        </div>

        <div className="articlesPurchasedStackedBar">
          <h1 className="chartTitle">Ratio de produits achetés par marque</h1>
          <ArticlesPurchasedStackedBar />
        </div>

        <div className="percentagePurchased">
          <h1 className="chartTitle">
            Pourcentage d'utilisateurs ayant acheté un produit
          </h1>
          <PercentagePurchasedWaffle />
        </div>
      </div>
    </div>
  );
};

export default App;
