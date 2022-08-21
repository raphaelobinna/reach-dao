"reach 0.1";

const [isVote, YES, NO, ABSTAIN] = makeEnum(3);

const User = {
  seeYes: Fun([UInt], Null),
  seeNo: Fun([UInt], Null),
  seeProposal: Fun([Bytes(64)], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const OmegaUser = Participant("OmegaUser", {
    ...User,
    proposal: Bytes(64),
    wager: UInt,
    deadline: UInt,
    beneficiary: Address,
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

  OmegaUser.publish();
  commit();

  const informTimeout = () => {
    each([OmegaUser, NormalUser], () => interact.informTimeout());
  };

  OmegaUser.only(() => {
    const proposal = declassify(interact.proposal);

    const wager = declassify(interact.wager);

    const deadline = declassify(interact.deadline);

    const beneficiary = declassify(interact.beneficiary);
  });

  OmegaUser.publish(proposal, wager, deadline, beneficiary);

  commit();

  NormalUser.only(() => {
    interact.acceptWager(wager);
  });

  NormalUser.publish()
    .pay(wager)
    .timeout(relativeTime(deadline), () => {
      closeTo(OmegaUser, informTimeout);
    });

  each([NormalUser, OmegaUser], () => {
    interact.seeProposal(proposal);
  });

  var [minimum, yes, no] = [4, 5, 5];

  invariant(minimum <= 4 && yes >= minimum && no > minimum);

  while (minimum > 0) {
    commit();
    NormalUser.only(() => {
      const hand = declassify(interact.vote());

      const reason = declassify(interact.reason);

      const b = this;
    });
    NormalUser.publish(hand, reason, b);
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
    interact.seeYes(yes);
  });

  each([NormalUser, OmegaUser], () => {
    interact.seeNo(no);
  });

  OmegaUser.only(() => {
    interact.execute();
  });

  transfer(balance()).to(beneficiary);
  assert(balance() == 0);

  commit();

  exit();
  //
});

// 'reach 0.1';

// const common = {
//   ...hasRandom,
//   test: Fun([], Null)
// }
// export const main = Reach.App(() => {
//   const Deployer =  Participant('Deployer', {
//     ...common,
//   });
//   const Attacher = Participant('Attacher', {
//     ...common
//   });

//   init();

//   Deployer.publish();
//   commit();

//   Attacher.publish();
//   commit();

//   Attacher.interact.test();
//   Deployer.interact.test();

//   exit();
// })
