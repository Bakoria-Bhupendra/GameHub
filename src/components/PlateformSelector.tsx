import usePlatforms from '@/hooks/usePlatforms'
import type { Platform } from '@/hooks/userGames'
import { Button, Menu, Portal } from '@chakra-ui/react'

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlateformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const {data, error} = usePlatforms()


  if (error) return null

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug} onClick={() => onSelectPlatform(platform)}>
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