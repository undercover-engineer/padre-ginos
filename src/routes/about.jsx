import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: About,
});

function AboutSection(props) {
  return (
    <div className="font-inter">
      <h3 className="font-bold text-xl 2xl:w-3/4 2xl:mx-auto">{props.title}</h3>
      <p className="font-light 2xl:w-3/4 2xl:mx-auto">{props.content}</p>
    </div>
  );
}

function About() {
  const [showAll, setShowAll] = useState(false);

  const sections = [
    {
      title: "Who we are",
      content: `There's nothing cookie-cutter about Padre Gino's. Not our pizzas. Not
          our people. And definitely not the way we live life. Around here, we
          don't settle for anything less than food we're proud to serve. And we
          don't just clock in. Not when we can also become our best, make
          friends, and have fun while we're at it. We're the pizza company that
          lives life unboxed.`,
    },
    {
      title: "What we're about",
      content: `At Padre Gino's, we don't just make pizza. We make people happy. Padre
          Gino's was built on the belief that pizza night should be special, and
          we carry that belief into everything we do. With more than 55 years of
          experience under our belts, we understand how to best serve our
          customers through tried and true service principles: We create food
          we're proud to serve and deliver it fast, with a smile.`,
    },
    {
      title: "Where we come from",
      content: `In 1958, three brothers borrowed $600 from their mom to open a pizza
          place in Purangaland. They named it Padre Gino's, because their sign
          only had room for eight letters. How profound! Soon, the restaurant
          grew. Why? The pizza was awesome. The service felt like home. And the
          customers were treated like family. And we've been deliveringthat same
          food and service ever since.`,
    },
    {
      title: "For the love of pizza since 1958",
      content: `From day one, the Ben brothers could look their customers in the eye
          and promise them the finest pizza in town — because they knew the
          farmers who grew the ingredients, and they knew those farmers cared
          about quality. Since then, our farmers have grown right alongside us,
          and the ingredients we use are still our highest priority. No one
          loves pizza more than Padre Gino's. That's why pizza is in our name —
          and always will be.`,
    },
    {
      title: "Padre Gino's Purangaland",
      content: `In June 1996, Padre Gino's made its foray into Purangaland with a
          restaurant in Oswell and was the first international restaurant chain
          to pioneer this category. The restaurant brand offers an exciting menu
          consisting of its signature pizzas, appetizers, pastas, desserts and
          beverages. Its trademark dining experience has been recognized by
          Brand Equity to make it the 'Most Trusted Food Service Brand' for 11
          years in a row. Padre Gino's is the most preferred pizza brand in
          Purangaland, given its freshest, tastiest and affordable Pizzas.`,
    },
  ];

  const visibleSections = showAll
    ? sections
    : window.innerWidth >= 768
      ? sections.slice(0, 3)
      : sections.slice(0, 2);
  return (
    <div className="pb-8 md:w-4/5 md:mx-auto">
      <h2 className="font-jost font-bold text-3xl text-center mb-8">
        About Padre Gino's
      </h2>
      <div className="md:flex md:flex-col md:items-start md:w-4/5 md:mx-auto">
        <div className="space-y-10 ">
          {visibleSections.map((section, index) => (
            <AboutSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-primary text-white py-2 px-4 rounded-lg mt-8 md:mt-14 2xl:ml-36"
        >
          {showAll ? "Show less" : "Read more..."}
        </button>
      </div>
    </div>
  );
}
