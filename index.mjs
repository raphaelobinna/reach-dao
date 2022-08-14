import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
const accChris = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);
const beforeChris = await getBalance(accChris);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const ctcChris = accChris.contract(backend, ctcAlice.getInfo());

const HAND = ["Yes", "No", "Abstain"];
const User = (Who) => ({
  ...stdlib.hasRandom,
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${outcome}`);
  },
  informTimeout: () => {
    console.log(`${Who} observed a timeout`);
  },
});

await Promise.all([
  ctcAlice.p.OmegaUser({
    ...User("OmegaUser"),
    proposal: "Will this work?",
    wager: stdlib.parseCurrency(5),
    deadline: 10,
    maxVoters: 6,
    execute: async () => {
      console.log("Omega User executed after vote");
    },
  }),
  ctcBob.p.NormalUser({
    ...User("NormalUser"),
    acceptWager: (amt) => {
      console.log(`NormalUser accepts the wager of ${fmt(amt)}.`);
    },
    vote: async () => {
      // <-- async now
      const hand = Math.floor(Math.random() * 3);
      console.log(` voted ${HAND[hand]}`);
      if (Math.random() <= 0.01) {
        for (let i = 0; i < 10; i++) {
          console.log(` takes their sweet time sending it back...`);
          await stdlib.wait(1);
        }
      }
      return hand;
    },
    reason: "I believe",
  }),
  ctcChris.p.NormalUser({
    ...User("NormalUser"),
    acceptWager: (amt) => {
      console.log(`NormalUser Chris accepts the wager of ${fmt(amt)}.`);
    },
    vote: async () => {
      // <-- async now
      const hand = Math.floor(Math.random() * 3);
      console.log(`Chris voted ${HAND[hand]}`);
      if (Math.random() <= 0.01) {
        for (let i = 0; i < 10; i++) {
          console.log(` takes their sweet time sending it back...`);
          await stdlib.wait(1);
        }
      }
      return hand;
    },
    reason: "I believe",
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
const afterChris = await getBalance(accChris);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
console.log(`Chris went from ${beforeChris} to ${afterChris}.`);
