export const solution = (
  participant: Array<string>,
  completion: Array<string>
): string =>
  Array.from(
    completion
      .reduce(
        (participantMap: Map<string, number>, eachCompletedName) =>
          participantMap.set(
            eachCompletedName,
            (participantMap.get(eachCompletedName) || 0) - 1
          ),
        participant.reduce(
          (participantMap: Map<string, number>, eachParticipantName) =>
            participantMap.set(
              eachParticipantName,
              (participantMap.get(eachParticipantName) || 0) + 1
            ),
          new Map<string, number>()
        )
      )
      .entries()
  ).filter((eachEntry) => eachEntry[1] != 0)[0][0];
