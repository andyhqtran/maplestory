import { useMemo } from 'react';
import { DropdownMenu, DropdownMenuItem } from '~/components/Primitives/DropdownMenu';
import { DotsVerticalIcon, PencilIcon, TrashIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';

export type CharacterDropdownMenuProps = {
  onDelete: () => void;
  onEdit: () => void;
};

export const CharacterDropdownMenu = ({ onDelete, onEdit }: CharacterDropdownMenuProps) => {
  const items: DropdownMenuItem[] = useMemo(() => {
    return [
      {
        adornmentLeft: <PencilIcon size='tiny' />,
        label: 'Edit',
        onSelect: onEdit,
        type: 'item',
      },
      {
        adornmentLeft: <TrashIcon size='tiny' />,
        label: 'Delete',
        onSelect: onDelete,
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
