import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="green" display={{ base: "none", lg: "block" }}>
        aside
      </GridItem>

      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
