import styled from "styled-components";
import tw from "twin.macro";

export const DivHero = styled.div`
  ${tw`
  container mx-auto flex px-5 py-24 md:flex-row flex-col items-center
`}
`;

export const DivUnoHero = styled.div`
  ${tw`
  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center
`}
`;

export const TitleHero = styled.h1`
  ${tw` sm:text-4xl text-3xl mb-4 font-medium text-gray-900
`}
`;
