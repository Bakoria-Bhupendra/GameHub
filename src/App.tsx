import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        nav
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
