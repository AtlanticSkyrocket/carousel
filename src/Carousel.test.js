import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it('renders', function() {
  render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(asFragment).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward so we can move backward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move backword in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("the left arrow is missing at index 0", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  debug();
  // expect the right arrow to show, and no left arrow
  expect(
    container.querySelector('i[class="bi bi-arrow-right-circle"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('i[class="bi bi-arrow-left-circle"]')
  ).not.toBeInTheDocument();

});

it("the right arrow is missing at last index", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  debug();
    // move forward to the end so we can test arrows in the carousel
    for(let i = 0; i < TEST_IMAGES.length - 1; i++) {
      const rightArrow = container.querySelector(".bi-arrow-right-circle");
      fireEvent.click(rightArrow);
    }
    debug();
  // expect the left arrow to show, and no right arrow
  expect(
    container.querySelector('i[class="bi bi-arrow-left-circle"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('i[class="bi bi-arrow-right-circle"]')
  ).not.toBeInTheDocument();

});