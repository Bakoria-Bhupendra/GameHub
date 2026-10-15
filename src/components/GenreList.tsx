import useGenres from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
