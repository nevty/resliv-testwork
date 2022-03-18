import Navigation from "./components/Navigation";
import {Box} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <Box>
        <Navigation/>
        <Outlet/>
    </Box>
  );
}

export default App;
