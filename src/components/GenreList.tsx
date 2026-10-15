import useGenres from "@/hooks/useGenres";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import { LuLoader } from "react-icons/lu";

const GenreList = () => {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading)
    return (
      <Spinner
        asChild
        borderWidth="0"
        color="blue.500"
        css={{ "--spinner-track-color": "colors.gray.200" }}
        size="lg"
      >
        <LuLoader />
      </Spinner>
    );

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
