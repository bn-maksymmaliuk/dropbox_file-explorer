import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const StyledGridItem: FC<Props> = ({ children, onClick }) => {
  const backgroundColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as={GridItem}
      display="flex"
      padding='4px'
      alignItems='center'
      justifyContent='space-around'
      borderRadius="5px"
      gap={4}
      fontSize="16px"
      minW='180px'
      minH='60px'
      cursor="pointer"
      transition="background-color 0.3s ease-in-out"
      _hover={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
