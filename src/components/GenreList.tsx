import useGenres, { type Genre } from "@/hooks/useGenres";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import { LuLoader } from "react-icons/lu";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
  
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="ghost"
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
