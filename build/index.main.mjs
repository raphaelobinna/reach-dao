// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function NormalUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for NormalUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for NormalUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v130 = stdlib.protect(ctc0, interact.reason, 'for NormalUser\'s interact field reason');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v134, v135, v136, v137], secs: v139, time: v138, didSend: v34, from: v133 } = txn1;
  ;
  let v140 = stdlib.checkedBigNumberify('./index.rsh:75:29:decimal', stdlib.UInt_max, '4');
  let v142 = stdlib.checkedBigNumberify('./index.rsh:75:32:decimal', stdlib.UInt_max, '5');
  let v143 = v138;
  let v146 = stdlib.checkedBigNumberify('./index.rsh:43:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v152 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0'));
    
    return v152;})()) {
    const v159 = stdlib.safeAdd(v143, v136);
    const v161 = ctc.selfAddress();
    stdlib.protect(ctc2, await interact.acceptWager(v135), {
      at: './index.rsh:85:27:application',
      fs: ['at ./index.rsh:84:20:application call to [unknown function] (defined at: ./index.rsh:84:24:function exp)'],
      msg: 'acceptWager',
      who: 'NormalUser'
      });
    const v163 = stdlib.protect(ctc1, await interact.vote(), {
      at: './index.rsh:87:44:application',
      fs: ['at ./index.rsh:84:20:application call to [unknown function] (defined at: ./index.rsh:84:24:function exp)'],
      msg: 'vote',
      who: 'NormalUser'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v133, v135, v136, v140, v142, v146, v159, v163, v130, v161],
      evt_cnt: 3,
      funcNum: 2,
      lct: v143,
      onlyIf: true,
      out_tys: [ctc1, ctc0, ctc3],
      pay: [v135, []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v165, v166, v167], secs: v169, time: v168, didSend: v58, from: v164 } = txn2;
        
        const v171 = stdlib.safeAdd(v146, v135);
        sim_r.txns.push({
          amt: v135,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v172 = stdlib.eq(v165, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v172) {
          const v173 = stdlib.safeSub(v140, stdlib.checkedBigNumberify('./index.rsh:103:39:decimal', stdlib.UInt_max, '1'));
          const v174 = stdlib.safeAdd(v142, stdlib.checkedBigNumberify('./index.rsh:103:48:decimal', stdlib.UInt_max, '1'));
          const cv140 = v173;
          const cv142 = v174;
          const cv143 = v168;
          const cv146 = v171;
          
          await (async () => {
            const v140 = cv140;
            const v142 = cv142;
            const v143 = cv143;
            const v146 = cv146;
            
            if (await (async () => {
              const v152 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0'));
              
              return v152;})()) {
              const v159 = stdlib.safeAdd(v143, v136);
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.txns.push({
                kind: 'from',
                to: v133,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        else {
          const v175 = stdlib.safeSub(v140, stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '1'));
          const cv140 = v175;
          const cv142 = v142;
          const cv143 = v168;
          const cv146 = v171;
          
          await (async () => {
            const v140 = cv140;
            const v142 = cv142;
            const v143 = cv143;
            const v146 = cv146;
            
            if (await (async () => {
              const v152 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0'));
              
              return v152;})()) {
              const v159 = stdlib.safeAdd(v143, v136);
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.txns.push({
                kind: 'from',
                to: v133,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v159],
      tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v133, v135, v136, v140, v142, v146, v159],
        evt_cnt: 0,
        funcNum: 3,
        lct: v143,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v179, time: v178, didSend: v80, from: v177 } = txn3;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v133,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v179, time: v178, didSend: v80, from: v177 } = txn3;
      ;
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:46:63:application',
        fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:97:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'NormalUser'
        });
      
      return;
      
      }
    else {
      const {data: [v165, v166, v167], secs: v169, time: v168, didSend: v58, from: v164 } = txn2;
      const v171 = stdlib.safeAdd(v146, v135);
      ;
      const v172 = stdlib.eq(v165, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v172) {
        const v173 = stdlib.safeSub(v140, stdlib.checkedBigNumberify('./index.rsh:103:39:decimal', stdlib.UInt_max, '1'));
        const v174 = stdlib.safeAdd(v142, stdlib.checkedBigNumberify('./index.rsh:103:48:decimal', stdlib.UInt_max, '1'));
        const cv140 = v173;
        const cv142 = v174;
        const cv143 = v168;
        const cv146 = v171;
        
        v140 = cv140;
        v142 = cv142;
        v143 = cv143;
        v146 = cv146;
        
        continue;}
      else {
        const v175 = stdlib.safeSub(v140, stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '1'));
        const cv140 = v175;
        const cv142 = v142;
        const cv143 = v168;
        const cv146 = v171;
        
        v140 = cv140;
        v142 = cv142;
        v143 = cv143;
        v146 = cv146;
        
        continue;}}
    
    }
  stdlib.protect(ctc2, await interact.seeOutcome(v142), {
    at: './index.rsh:115:24:application',
    fs: ['at ./index.rsh:114:7:application call to [unknown function] (defined at: ./index.rsh:114:36:function exp)'],
    msg: 'seeOutcome',
    who: 'NormalUser'
    });
  
  ;
  return;
  
  
  };
export async function OmegaUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v126 = stdlib.protect(ctc0, interact.deadline, 'for OmegaUser\'s interact field deadline');
  const v127 = stdlib.protect(ctc0, interact.maxVoters, 'for OmegaUser\'s interact field maxVoters');
  const v128 = stdlib.protect(ctc1, interact.proposal, 'for OmegaUser\'s interact field proposal');
  const v129 = stdlib.protect(ctc0, interact.wager, 'for OmegaUser\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v128, v129, v126, v127],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v134, v135, v136, v137], secs: v139, time: v138, didSend: v34, from: v133 } = txn1;
      
      ;
      const v140 = stdlib.checkedBigNumberify('./index.rsh:75:29:decimal', stdlib.UInt_max, '4');
      const v142 = stdlib.checkedBigNumberify('./index.rsh:75:32:decimal', stdlib.UInt_max, '5');
      const v143 = v138;
      const v146 = stdlib.checkedBigNumberify('./index.rsh:43:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v152 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0'));
        
        return v152;})()) {
        const v159 = stdlib.safeAdd(v143, v136);
        sim_r.isHalt = false;
        }
      else {
        
        
        sim_r.txns.push({
          kind: 'from',
          to: v133,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v134, v135, v136, v137], secs: v139, time: v138, didSend: v34, from: v133 } = txn1;
  ;
  let v140 = stdlib.checkedBigNumberify('./index.rsh:75:29:decimal', stdlib.UInt_max, '4');
  let v142 = stdlib.checkedBigNumberify('./index.rsh:75:32:decimal', stdlib.UInt_max, '5');
  let v143 = v138;
  let v146 = stdlib.checkedBigNumberify('./index.rsh:43:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v152 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0'));
    
    return v152;})()) {
    const v159 = stdlib.safeAdd(v143, v136);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 2,
      out_tys: [ctc0, ctc1, ctc2],
      timeoutAt: ['time', v159],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v133, v135, v136, v140, v142, v146, v159],
        evt_cnt: 0,
        funcNum: 3,
        lct: v143,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v179, time: v178, didSend: v80, from: v177 } = txn3;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v133,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v179, time: v178, didSend: v80, from: v177 } = txn3;
      ;
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:46:63:application',
        fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:97:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'OmegaUser'
        });
      
      return;
      
      }
    else {
      const {data: [v165, v166, v167], secs: v169, time: v168, didSend: v58, from: v164 } = txn2;
      const v171 = stdlib.safeAdd(v146, v135);
      ;
      const v172 = stdlib.eq(v165, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v172) {
        const v173 = stdlib.safeSub(v140, stdlib.checkedBigNumberify('./index.rsh:103:39:decimal', stdlib.UInt_max, '1'));
        const v174 = stdlib.safeAdd(v142, stdlib.checkedBigNumberify('./index.rsh:103:48:decimal', stdlib.UInt_max, '1'));
        const cv140 = v173;
        const cv142 = v174;
        const cv143 = v168;
        const cv146 = v171;
        
        v140 = cv140;
        v142 = cv142;
        v143 = cv143;
        v146 = cv146;
        
        continue;}
      else {
        const v175 = stdlib.safeSub(v140, stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '1'));
        const cv140 = v175;
        const cv142 = v142;
        const cv143 = v168;
        const cv146 = v171;
        
        v140 = cv140;
        v142 = cv142;
        v143 = cv143;
        v146 = cv146;
        
        continue;}}
    
    }
  stdlib.protect(ctc3, await interact.seeOutcome(v142), {
    at: './index.rsh:115:24:application',
    fs: ['at ./index.rsh:114:7:application call to [unknown function] (defined at: ./index.rsh:114:36:function exp)'],
    msg: 'seeOutcome',
    who: 'OmegaUser'
    });
  
  stdlib.protect(ctc3, await interact.execute(), {
    at: './index.rsh:128:21:application',
    fs: ['at ./index.rsh:127:17:application call to [unknown function] (defined at: ./index.rsh:127:21:function exp)'],
    msg: 'execute',
    who: 'OmegaUser'
    });
  
  ;
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEDSEACBSYCAQAAIjUAMRhBAhMpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEAA4UkkDEAAPyQSRCQ0ARJENARJIhJMNAISEUQoZDUDgASnZcS0sDIGNAMlWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IBT0gkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/4EgWzX+gShbNf2BMFs1/IE4WzX7STUFSUkiWzX6VwhANflXSCA1+IAE0YR+BzT6FlA0+VA0+FCwMgY0AyVbDEQ0AyEEWzT+CDX3NP6IAVA0+iISQQAVNP80/jT9NPwjCTT7IwgyBjT3QgBrNP80/jT9NPwjCTT7MgY090IAWCISRIGgjQaIARciNAESRDQESSISTDQCEhFESTUFSUpXAEA1/yEEWzX+JVs1/YFQWzX8gAShGctRNP9QNP4WUDT9FlA0/BZQsDEANP40/YEEIQYyBiJCAAA1/zX+Nf01/DX7Nfo1+TT8Ig1BADM0/jT7CDX4NPk0+hZQNPsWUDT8FlA0/RZQNP8WUDT4FlAoSwFXAFBnSCQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT5sgezQgAAMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v134",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v134",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v166",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v167",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v166",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v167",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001149380380620011498339810160408190526200002691620004e9565b60008055436003556040805133815282516020808301919091528084015180518051848601528201516060808501919091529181015160808401528084015160a0840152015160c082015290517fc2414ff5f609f3dbac21116321239cf4d3e29839e2f8cf87f38c643d174134039181900360e00190a1620000ab341560076200010a565b620000b56200033f565b805133905260208083018051820151835183015251604090810151835182015281830180516004905280516005930192909252815143910152516000606090910152620001028162000135565b5050620005ee565b81620001315760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b604080516020810190915260008152602082015151156200028c5762000172826020015160400151836000015160400151620002e860201b60201c565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03168152825160209081015181830152835160409081015181840152818501805151606080860191909152815184015160808601529051015160a0840152835160c084015260036000554360015551620002609183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906200028692919062000399565b50505050565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620002cf573d6000803e3d6000fd5b5060008080556001819055620001319060029062000428565b600082620002f783826200058a565b9150811015620003395760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000128565b92915050565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001620003946040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b828054620003a790620005b1565b90600052602060002090601f016020900481019282620003cb576000855562000416565b82601f10620003e657805160ff191683800117855562000416565b8280016001018555821562000416579182015b8281111562000416578251825591602001919060010190620003f9565b50620004249291506200046a565b5090565b5080546200043690620005b1565b6000825580601f1062000447575050565b601f0160209004906000526020600020908101906200046791906200046a565b50565b5b808211156200042457600081556001016200046b565b604080519081016001600160401b0381118282101715620004b257634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620004b257634e487b7160e01b600052604160045260246000fd5b600081830360c0811215620004fd57600080fd5b6200050762000481565b83518152601f198201915060a08212156200052157600080fd5b6200052b620004b8565b60408312156200053a57600080fd5b6200054462000481565b92506020850151835260408501516020840152828152606085015160208201526080850151604082015260a0850151606082015280602083015250809250505092915050565b60008219821115620005ac57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620005c657607f821691505b60208210811415620005e857634e487b7160e01b600052602260045260246000fd5b50919050565b610b4b80620005fe6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806373b4522c14610078578063832307571461008b578063ab53f2c6146100a0578063d384b3ed146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046108c3565b6100d6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610254565b60405161006f9291906108db565b6100526100d1366004610938565b6102f1565b6100e6600360005414600d610545565b610100813515806100f957506001548235145b600e610545565b6000808055600280546101129061094a565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061094a565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906109a4565b90506101b78160c00151431015600f610545565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516101e8929190610a3b565b60405180910390a16101fc3415600c610545565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610239573d6000803e3d6000fd5b506000808055600181905561025090600290610794565b5050565b6000606060005460028080546102699061094a565b80601f01602080910402602001604051908101604052809291908181526020018280546102959061094a565b80156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b50505050509050915091509091565b6103016003600054146009610545565b61031b8135158061031457506001548235145b600a610545565b60008080556002805461032d9061094a565b80601f01602080910402602001604051908101604052809291908181526020018280546103599061094a565b80156103a65780601f1061037b576101008083540402835291602001916103a6565b820191906000526020600020905b81548152906001019060200180831161038957829003601f168201915b50505050508060200190518101906103be91906109a4565b90506103d66040518060200160405280600081525090565b6103e78260c001514310600b610545565b7f2dd07c1fa89286068d5d37190a21e567390eaa19b0a3476919e1459151b0278e3384604051610418929190610a78565b60405180910390a16104328260a00151836020015161056b565b815260208201516104469034146008610545565b60208301356104d4576104576107d1565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608301516104909060016105be565b60208201515260808301516104a690600161056b565b602080830180519091019190915280514360409091015282519051606001526104ce8161060d565b50505050565b6104dc6107d1565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608301516105159060016105be565b6020808301805192909252608085015182519091015280514360409091015282519051606001526104ce8161060d565b816102505760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826105788382610ae6565b91508110156105b85760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610562565b92915050565b6000826105cb8382610afe565b91508111156105b85760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610562565b604080516020810190915260008152602082015151156107525761064182602001516040015183600001516040015161056b565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03168152825160209081015181830152835160409081015181840152818501805151606080860191909152815184015160808601529051015160a0840152835160c08401526003600055436001555161072e9183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906104ce92919061082a565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610239573d6000803e3d6000fd5b5080546107a09061094a565b6000825580601f106107b0575050565b601f0160209004906000526020600020908101906107ce91906108ae565b50565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016108256040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b8280546108369061094a565b90600052602060002090601f016020900481019282610858576000855561089e565b82601f1061087157805160ff191683800117855561089e565b8280016001018555821561089e579182015b8281111561089e578251825591602001919060010190610883565b506108aa9291506108ae565b5090565b5b808211156108aa57600081556001016108af565b6000604082840312156108d557600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561090f578581018301518582016060015282016108f3565b81811115610921576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156108d557600080fd5b600181811c9082168061095e57607f821691505b602082108114156108d557634e487b7160e01b600052602260045260246000fd5b6001600160a01b03811681146107ce57600080fd5b805161099f8161097f565b919050565b600060e082840312156109b657600080fd5b60405160e0810181811067ffffffffffffffff821117156109e757634e487b7160e01b600052604160045260246000fd5b6040526109f383610994565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610a6957600080fd5b80604085015250509392505050565b600060c08201905060018060a01b038085168352833560208401526020840135604084015260408401356060840152606084013560808401526080840135610abf8161097f565b81811660a085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610af957610af9610ad0565b500190565b600082821015610b1057610b10610ad0565b50039056fea264697066735822122051e042f4fb5f000bcd0514321336d406f888b7643f469575490398e39f3dedb364736f6c634300080c0033`,
  BytecodeLen: 4425,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:134:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "NormalUser": NormalUser,
  "OmegaUser": OmegaUser
  };
export const _APIs = {
  };
