export const solution = (
  genres: Array<string>,
  plays: Array<number>
): Array<number> =>
  Array.from(
    genres
      .reduce((combinedMap, genre: string, id: number) => {
        if (combinedMap.has(genre)) {
          const entry = combinedMap.get(genre);
          entry!.totalCount += plays[id];
          entry!.musics.push(id);
        } else {
          combinedMap.set(genre, {
            totalCount: plays[id],
            musics: [id],
          });
        }
        return combinedMap;
      }, new Map<string, { totalCount: number; musics: Array<number> }>())
      .values()
  )
    .sort(
      (frontGenreSet, rearGenreSet) =>
        rearGenreSet.totalCount - frontGenreSet.totalCount
    )
    .map((eachEntry) =>
      eachEntry.musics
        .sort(
          (frontMusicId, rearMusicId) =>
            plays[rearMusicId] - plays[frontMusicId]
        )
        .slice(0, 2)
    )
    .flat();
