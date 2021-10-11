import { useState } from 'react';
import { CreateCharacterForm } from '~/components/Form/CreateCharacterForm';
import { CharacterDropdownMenu } from '~/components/menus/CharacterDropdownMenu';
import { Navigation } from '~/components/Navigation';
import { NavigationItem } from '~/components/NavigationItem';
import { Dialog } from '~/components/Primitives/Dialog';
import { CircleIcon, PlusIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { useCharacters } from '~/hooks/useCharacters';

export const CharacterNavigation = () => {
  const { characters, deleteCharacter } = useCharacters();

  return (
    <>
      <Navigation
        label='Characters'
        labelAdornment={
          <Dialog
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            title='Create character'
            trigger={
              <IconButton size='micro'>
                <PlusIcon size='micro' />
              </IconButton>
            }
          >
            <CreateCharacterForm />
          </Dialog>
        }
      >
        {characters?.map((character) => {
          return (
            <NavigationItem
              adornmentLeft={<CircleIcon size='micro' />}
              adornmentRight={
                <CharacterDropdownMenu onDelete={() => deleteCharacter(character.id)} onEdit={() => {}} />
              }
              key={character.id}
              href={`/character/${character.id}-${character.slug}`}
              label={character.name}
            />
          );
        })}
      </Navigation>
    </>
  );
};
