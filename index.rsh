"reach 0.1";

const [isVote, YES, NO, ABSTAIN] = makeEnum(3);

const User = {
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const OmegaUser = Participant("OmegaUser", {
    ...User,
    proposal: Bytes(64),
    wager: UInt,
    deadline: UInt,
    maxVoters: UInt,
    execute: Fun([], Null),
  });

  const NormalUser = ParticipantClass("NormalUser", {
    ...User,
    reason: Bytes(64),
    vote: Fun([], UInt),
    acceptToken: Fun([Token], Null),
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([OmegaUser, NormalUser], () => interact.informTimeout());
  };

  OmegaUser.only(() => {
    const proposal = declassify(interact.proposal);

    const wager = declassify(interact.wager);

    const deadline = declassify(interact.deadline);

    const maxVoters = declassify(interact.maxVoters);
  });

  OmegaUser.publish(proposal, wager, deadline, maxVoters);

  var [minimum, yes, no] = [4, 5, 5];

  invariant(minimum <= 4 && yes >= minimum && no > minimum);

  while (minimum > 0) {
    commit();

    NormalUser.only(() => {
      interact.acceptWager(wager);

      const hand = declassify(interact.vote());

      const reason = declassify(interact.reason);

      const b = this;
    });
    NormalUser.publish(hand, reason, b)
      .pay(wager)
      .timeout(relativeTime(deadline), () => {
        closeTo(OmegaUser, informTimeout);
      });

    if (hand == YES) {
      [minimum, yes, no] = [minimum - 1, yes + 1, no];
      continue;
    } else {
      [minimum, yes, no] = [minimum - 1, yes, no + 1];
      continue;
    }

    continue;
  }

  each([NormalUser, OmegaUser], () => {
    interact.seeOutcome(yes);
  });

  OmegaUser.only(() => {
    interact.execute();
  });

  transfer(balance()).to(OmegaUser);
  assert(balance() == 0);

  commit();

  exit();
  //
});
