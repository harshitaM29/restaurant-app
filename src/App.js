import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealList from "./components/Meals/MealList";
function App() {
  const DUMMY_MEALS = [
    {
        mealName:'Sushi',
        mealDescription:'Finest fish and veggies',
        mealPrice:'$22.99'
    },
    {
      mealName:'Schnitzel',
      mealDescription:'A german speciality',
      mealPrice:'$16.50'
  },
  {
    mealName:'Barbeque Burger',
    mealDescription:'American, raw, meaty',
    mealPrice:'$12.99'
}
  ]
  return (
    <div>
      <Header />
      <MealsSummary />
      <MealList meals={DUMMY_MEALS} />
    </div>
  );
}

export default App;
