import { useMemo } from 'react';
import { DropdownMenu, DropdownMenuItem } from '~/components/Primitives/DropdownMenu';
import { DotsVerticalIcon, PencilIcon, TrashIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';

export const CharacterDropdownMenu = () => {
  const items: DropdownMenuItem[] = useMemo(() => {
    return [
      {
        adornmentLeft: <PencilIcon size='tiny' />,
        label: 'Edit',
        onSelect: () => {},
        type: 'item',
      },
      {
        adornmentLeft: <TrashIcon size='tiny' />,
        label: 'Delete',
        onSelect: () => {},
        type: 'item',
      },
    ];
  }, []);

  return (
    <DropdownMenu
      align='start'
      items={items}
      trigger={
        <IconButton size='tiny'>
          <DotsVerticalIcon size='tiny' />
        </IconButton>
      }
    />
  );
};
