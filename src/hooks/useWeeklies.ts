import { useLocalStorage } from 'react-use';
import { Boss, Event, Task } from '~/types/graphcms';

export type WeeklyName = Boss['name'] | Event['name'] | Task['name'];

export type Weekly = {
  [key: string]: string[];
};

export const useWeeklies = (initialState: Weekly = {}) => {
  const [weeklies, setWeeklies, removeWeeklies] = useLocalStorage<Weekly>('weeklies', initialState);

  const onToggleWeekly = (weekly: WeeklyName, characterId: string) => {
    const isCompleted = weeklies?.[weekly]?.includes(characterId);

    if (isCompleted) {
      return setWeeklies({
        ...weeklies,
        [weekly]: weeklies?.[weekly]?.filter((id) => id !== characterId) ?? [],
      });
    }

    return setWeeklies({
      ...weeklies,
      [weekly]: [...(weeklies?.[weekly] ?? []), characterId],
    });
  };

  return {
    weeklies,
    onToggleWeekly,
  };
};
