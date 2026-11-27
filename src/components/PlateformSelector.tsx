import usePlatforms from '@/hooks/usePlatforms'
import { Button, Menu, Portal } from '@chakra-ui/react'

const PlateformSelector = () => {
  const {data, error} = usePlatforms()

  if (error) return null

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}   

export default PlateformSelector