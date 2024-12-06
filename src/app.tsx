import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Layout } from "./layout";

function App() {
  return (
    <MantineProvider forceColorScheme="dark">
      <Layout />
    </MantineProvider>
  );
}

export default App;
