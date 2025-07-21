export const filterData = async (
  query: string,
  data: string[]
): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lower = query.toLowerCase();

      const startsWith = data.filter((item) =>
        item.toLowerCase().startsWith(lower)
      );

      const includes = data.filter(
        (item) =>
          item.toLowerCase().includes(lower) &&
          !item.toLowerCase().startsWith(lower)
      );

      const filtered = [...startsWith, ...includes].slice(0, 10);

      resolve(filtered);
    }, 300);
  });
};
