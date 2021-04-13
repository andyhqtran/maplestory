import useSWR from 'swr';

import { maplestoryDatabase } from '~/db/maplestoryDatabase';

export const useSettings = () => {
  const { data, error, mutate } = useSWR('settings', () => maplestoryDatabase.table('settings').toArray());

  const getSettingStatus = (name: string) => {
    return data?.find((setting) => setting.name)?.status;
  };

  const updateSetting = async (name: string, status: boolean) => {
    await maplestoryDatabase.settings.put({ name, status });

    mutate();
  };

  return {
    settings: data,
    error,
    getSettingStatus,
    isLoading: !data && !error,
    updateSetting,
  };
};
