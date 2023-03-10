import styled from "styled-components";
import tw from "twin.macro";

export const DivFooter = styled.div`
  ${tw`
  container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col
`}
`;

export const ALogoFooter = styled.a`
  ${tw`
  flex font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer
`}
`;

export const PInformationFooter = styled.p`
  ${tw`
  text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4
`}
`;

export const SpanRedesSociales = styled.div`
  ${tw`
 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start
`}
`;
