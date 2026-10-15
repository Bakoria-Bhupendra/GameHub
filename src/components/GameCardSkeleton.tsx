import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius="10px" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText height="20px" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
