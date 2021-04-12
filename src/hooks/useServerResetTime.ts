export const useServerResetTime = () => {
  const today = new Date();
  const utcResetTime = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0));
  const nextResetTime = new Date(utcResetTime);
  nextResetTime.setDate(nextResetTime.getDate() + 1);

  return {
    nextResetTime,
  };
};
