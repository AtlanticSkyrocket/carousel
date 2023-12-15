
import { render, fireEvent } from "@testing-library/react";
import App from "./App.js";
import TEST_IMAGES from "./_testCommon.js";

it('renders', function() {
  render(
    <App />
  );
});
it("matches snapshot", function() {
  const { asFragment } = render(
    <App />
  );

  expect(asFragment).toMatchSnapshot();
});