import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

//Card({caption, src, currNum, totalNum})
it('renders the Card component', function() {
  const currCard = TEST_IMAGES[0];
  render(
    <Card caption = {currCard.caption}
      src={currCard.src}
      currNum={1}
      totalNum={3}
    />
  );
});

it('it matches snapshot', function() {
  const currCard = TEST_IMAGES[0];
  const { asFragment } = render(
    <Card caption = {currCard.caption}
      src={currCard.src}
      currNum={1}
      totalNum={3}
    />
  );
  expect(asFragment).toMatchSnapshot();
});