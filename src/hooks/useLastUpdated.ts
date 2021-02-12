import { useLocalStorage } from 'react-use';

export const useLastUpdated = (initialState: Date = new Date()) => {
  const [lastUpdated, setLastUpdated, removeLastUpdated] = useLocalStorage<Date>('lastUpdated', initialState);

  /**
   * @todo add in update events / checks
   */

  return {
    lastUpdated,
  };
};
