import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <ItemListContainer greeting="hola"></ItemListContainer>
    </BrowserRouter>
  );
};

export default App;
