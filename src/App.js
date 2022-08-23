import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach/build/index.main.mjs";
import { useState } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens";
import { DaoSetup } from "./screens/DaoSetup";
import { DaoVote } from "./screens/DaoVote";
import { DaoResult } from "./screens/DaoResult";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [contractInfo, setContractInfo] = useState();
  const [attachInfo, setAttachInfo] = useState();
  const [reason, setReason] = useState();
  const [choice, setChoice] = useState();

  const [executed, setExecuted] = useState("");

  const [resolver, setResolver] = useState({
    resolve: () => {},
  });

  const [knownProposal, setKnownProposal] = useState("");

  const HAND = ["Yes", "No"];

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        console.log("account-----", account);
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if (deployer) {
        setView(views.SET_TOKEN_INFO);
      } else {
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async () => {
      const contract = account.contract(backend);
      backend.OmegaUser(contract, OmegaUser);
      setView(views.DEPLOYING);
      contract.getInfo().then((info) => {
        localStorage.setItem("contract", JSON.stringify(info));
      });

      setContractInfo(contract);
      setView(views.DAO_SETUP);
    },

    attach: async () => {
      console.log(knownProposal);
      const info = JSON.parse(localStorage.getItem("contract"));
      console.log("info---", info);
      const contract = account.contract(backend, info);
      setAttachInfo(contract);
      backend.NormalUser(contract, NormalUser);

      setTimeout(() => {
        setView(views.DAO_VOTE);
      }, 5000);
      setView(views.ATTACHING);
    },

    setupDao: (proposal, wager, deadline, beneficiary) => {
      console.log("---poll", proposal, wager, deadline);
      localStorage.setItem("wager", wager);
      localStorage.setItem("proposal", proposal);
      contractInfo.p.OmegaUser({
        ...Common,
        proposal: proposal,
        wager: reach.formatCurrency(wager),
        deadline: deadline,
        beneficiary: beneficiary,
      });
      setView(views.DEPLOYING);
    },

    vote: (choice, reason) => {
      console.log("attach---", attachInfo);
      attachInfo.p.NormalUser({
        ...Common,
        reason: reason,
        acceptWager: (amt) => {
          console.log(`NormalUser accepts the wager of ${fmt(amt)}.`);
        },
        vote: async () => {
          console.log(`Chris voted ${HAND[choice]}`);

          return choice;
        },
      });
    },
    addReason: () => {
      attachInfo.p.NormalUser({ reason: reason });
    },
  };

  console.log("ctc info----", contractInfo);

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),

    //test: () => setView(views.TEST_VIEW),
    informTimeout: () => {},
    seeProposal: (proposal) => {
      setKnownProposal(proposal);
      console.log(`saw proposal ${proposal}`);
      setView(views.DAO_VOTE);
    },
    seeYes: (outcome) => {
      localStorage.setItem("Yes", outcome - 5);
      console.log(` saw yes ${outcome}`);
      setView(views.DAO_RESULT);
    },
    seeNo: (outcome) => {
      localStorage.setItem("No", outcome - 5);
      console.log(` saw no ${outcome}`);
    },
  };

  const OmegaUser = {
    ...Common,
    execute: () => {
      //localStorage.setItem("executed", "Yes this was executed");
      setExecuted("Yes this was executed");
    },
  };

  const NormalUser = {
    ...Common,
    acceptWager: (amt) => {
      console.log(`NormalUser accepts the wager of ${fmt(amt)}.`);
    },
    vote: async () => {
      // console.log(`Chris voted ${HAND[choice]}`);

      return new Promise((resolve) => {
        setResolver({
          resolve: (choice) => {
            console.log("we seeee-----", choice);
            resolve(choice);
          },
        });
      });
    },
    reason: "I believe",
  };

  console.log(resolver);

  return (
    <div className="App">
      <div className="top">
        <h1>ZUBAR DAO</h1>
      </div>
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <ConnectAccount connect={reachFunctions.connect} />
        )}

        {view === views.DEPLOY_OR_ATTACH && (
          <SelectRole
            deploy={reachFunctions.deploy}
            attach={() => setView(views.PASTE_CONTRACT_INFO)}
          />
        )}

        {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

        {view === views.PASTE_CONTRACT_INFO && (
          <PasteContractInfo attach={reachFunctions.attach} />
        )}

        {view === views.WAIT_FOR_ATTACHER && (
          <WaitForAttacher info={contractInfo} />
        )}

        {view === views.DAO_RESULT && <DaoResult executed={executed} />}

        {view === views.DAO_VOTE && (
          <DaoVote vote={(v) => resolver.resolve(v)} />
        )}

        {view === views.DAO_SETUP && (
          <DaoSetup setup={reachFunctions.setupDao} info={contractInfo} />
        )}

        {view === views.TEST_VIEW && <TestView />}
      </header>
    </div>
  );
}

export default App;
