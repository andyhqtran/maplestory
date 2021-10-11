import slugify from 'slugify';
import useSWR from 'swr';

import { MSClass } from '~/constants/maplestory';
import { maplestoryDatabase } from '~/db/maplestoryDatabase';

export const useCharacters = () => {
  const { data, error, mutate } = useSWR('characters', () => maplestoryDatabase.table('characters').toArray());

  const createCharacter = async (values: { avatar: string; class: keyof typeof MSClass; name: string }) => {
    await maplestoryDatabase.characters.add({
      avatar: values.avatar,
      class: values.class,
      name: values.name,
      slug: slugify(values.name),
    });

    mutate();
  };

  const deleteCharacter = async (id: number) => {
    await maplestoryDatabase.characters.delete(id);

    mutate();
  };

  const updateCharacter = async (id: number, values: { avatar: string; class: keyof typeof MSClass; name: string }) => {
    await maplestoryDatabase.characters.update(id, {
      avatar: values.avatar,
      class: values.class,
      name: values.name,
      slug: slugify(values.name),
    });

    mutate();
  };

  return {
    characters: data,
    createCharacter,
    deleteCharacter,
    error,
    isLoading: !data && !error,
    updateCharacter,
  };
};
