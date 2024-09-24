import { Button, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("should render", () => {
    const { getByText } = render(
      <ChakraProvider value={defaultSystem}>
        <Button>Hello World</Button>
      </ChakraProvider>
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});