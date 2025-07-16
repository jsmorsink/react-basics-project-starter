import { RecipeListPage } from "./pages/RecipeListPage";
import { data } from "./utils/data";

export const newData = data.hits.map((item) => ({
  ...item.recipe,
  id: crypto.randomUUID(),
}));

export const App = () => {
  return <RecipeListPage />;
};
