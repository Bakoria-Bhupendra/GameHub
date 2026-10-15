import type { Game } from "@/hooks/userGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
