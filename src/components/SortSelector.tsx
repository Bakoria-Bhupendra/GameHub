import { Button, Menu, Portal } from '@chakra-ui/react'

const SortSelector = () => {

    return (
  <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Order by: Relevance
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="date">Order by Date</Menu.Item>
              <Menu.Item value="name">Order by Name</Menu.Item>
              <Menu.Item value="rating">Order by Rating</Menu.Item>
              <Menu.Item value="release_date">Order by Release Date</Menu.Item>
              <Menu.Item value="popularity">Order by Popularity</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    )
}

export default SortSelector