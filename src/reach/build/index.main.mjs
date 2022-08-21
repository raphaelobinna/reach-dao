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
      1: [ctc0],
      2: [ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v158 = stdlib.protect(ctc0, interact.reason, 'for NormalUser\'s interact field reason');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v161, time: v160, didSend: v27, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v165, v166, v167, v168], secs: v170, time: v169, didSend: v39, from: v164 } = txn2;
  ;
  const v171 = stdlib.addressEq(v159, v164);
  stdlib.assert(v171, {
    at: './index.rsh:49:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'NormalUser'
    });
  const v178 = stdlib.safeAdd(v169, v167);
  stdlib.protect(ctc3, await interact.acceptWager(v166), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:18:application call to [unknown function] (defined at: ./index.rsh:53:22:function exp)'],
    msg: 'acceptWager',
    who: 'NormalUser'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v166, v168, v178],
    evt_cnt: 0,
    funcNum: 2,
    lct: v169,
    onlyIf: true,
    out_tys: [],
    pay: [v166, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v184, time: v183, didSend: v48, from: v182 } = txn3;
      
      sim_r.txns.push({
        amt: v166,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v191 = stdlib.checkedBigNumberify('./index.rsh:67:29:decimal', stdlib.UInt_max, '4');
      const v192 = stdlib.checkedBigNumberify('./index.rsh:67:35:decimal', stdlib.UInt_max, '5');
      const v193 = stdlib.checkedBigNumberify('./index.rsh:67:32:decimal', stdlib.UInt_max, '5');
      const v194 = v183;
      const v201 = v166;
      
      if (await (async () => {
        const v207 = stdlib.gt(v191, stdlib.checkedBigNumberify('./index.rsh:71:20:decimal', stdlib.UInt_max, '0'));
        
        return v207;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        
        sim_r.txns.push({
          kind: 'from',
          to: v168,
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
    soloSend: false,
    timeoutAt: ['time', v178],
    tys: [ctc1, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v166, v168, v178],
      evt_cnt: 0,
      funcNum: 3,
      lct: v169,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v243, time: v242, didSend: v122, from: v241 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v243, time: v242, didSend: v122, from: v241 } = txn4;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:36:63:application',
      fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:60:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'NormalUser'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v184, time: v183, didSend: v48, from: v182 } = txn3;
    ;
    stdlib.protect(ctc3, await interact.seeProposal(v165), {
      at: './index.rsh:64:25:application',
      fs: ['at ./index.rsh:63:7:application call to [unknown function] (defined at: ./index.rsh:63:36:function exp)'],
      msg: 'seeProposal',
      who: 'NormalUser'
      });
    
    let v191 = stdlib.checkedBigNumberify('./index.rsh:67:29:decimal', stdlib.UInt_max, '4');
    let v192 = stdlib.checkedBigNumberify('./index.rsh:67:35:decimal', stdlib.UInt_max, '5');
    let v193 = stdlib.checkedBigNumberify('./index.rsh:67:32:decimal', stdlib.UInt_max, '5');
    let v194 = v183;
    let v201 = v166;
    
    while (await (async () => {
      const v207 = stdlib.gt(v191, stdlib.checkedBigNumberify('./index.rsh:71:20:decimal', stdlib.UInt_max, '0'));
      
      return v207;})()) {
      const v208 = ctc.selfAddress();
      const v210 = stdlib.protect(ctc1, await interact.vote(), {
        at: './index.rsh:74:44:application',
        fs: ['at ./index.rsh:73:20:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
        msg: 'vote',
        who: 'NormalUser'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v168, v191, v192, v193, v201, v210, v158, v208],
        evt_cnt: 3,
        funcNum: 5,
        lct: v194,
        onlyIf: true,
        out_tys: [ctc1, ctc0, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:80:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v212, v213, v214], secs: v216, time: v215, didSend: v76, from: v211 } = txn4;
          
          ;
          const v217 = stdlib.eq(v212, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v217) {
            const v218 = stdlib.safeSub(v191, stdlib.checkedBigNumberify('./index.rsh:82:39:decimal', stdlib.UInt_max, '1'));
            const v219 = stdlib.safeAdd(v193, stdlib.checkedBigNumberify('./index.rsh:82:48:decimal', stdlib.UInt_max, '1'));
            const cv191 = v218;
            const cv192 = v192;
            const cv193 = v219;
            const cv194 = v215;
            const cv201 = v201;
            
            await (async () => {
              const v191 = cv191;
              const v192 = cv192;
              const v193 = cv193;
              const v194 = cv194;
              const v201 = cv201;
              
              if (await (async () => {
                const v207 = stdlib.gt(v191, stdlib.checkedBigNumberify('./index.rsh:71:20:decimal', stdlib.UInt_max, '0'));
                
                return v207;})()) {
                sim_r.isHalt = false;
                }
              else {
                
                
                sim_r.txns.push({
                  kind: 'from',
                  to: v168,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();}
          else {
            const v220 = stdlib.safeSub(v191, stdlib.checkedBigNumberify('./index.rsh:85:39:decimal', stdlib.UInt_max, '1'));
            const v221 = stdlib.safeAdd(v192, stdlib.checkedBigNumberify('./index.rsh:85:52:decimal', stdlib.UInt_max, '1'));
            const cv191 = v220;
            const cv192 = v221;
            const cv193 = v193;
            const cv194 = v215;
            const cv201 = v201;
            
            await (async () => {
              const v191 = cv191;
              const v192 = cv192;
              const v193 = cv193;
              const v194 = cv194;
              const v201 = cv201;
              
              if (await (async () => {
                const v207 = stdlib.gt(v191, stdlib.checkedBigNumberify('./index.rsh:71:20:decimal', stdlib.UInt_max, '0'));
                
                return v207;})()) {
                sim_r.isHalt = false;
                }
              else {
                
                
                sim_r.txns.push({
                  kind: 'from',
                  to: v168,
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
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v212, v213, v214], secs: v216, time: v215, didSend: v76, from: v211 } = txn4;
      ;
      const v217 = stdlib.eq(v212, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v217) {
        const v218 = stdlib.safeSub(v191, stdlib.checkedBigNumberify('./index.rsh:82:39:decimal', stdlib.UInt_max, '1'));
        const v219 = stdlib.safeAdd(v193, stdlib.checkedBigNumberify('./index.rsh:82:48:decimal', stdlib.UInt_max, '1'));
        const cv191 = v218;
        const cv192 = v192;
        const cv193 = v219;
        const cv194 = v215;
        const cv201 = v201;
        
        v191 = cv191;
        v192 = cv192;
        v193 = cv193;
        v194 = cv194;
        v201 = cv201;
        
        continue;}
      else {
        const v220 = stdlib.safeSub(v191, stdlib.checkedBigNumberify('./index.rsh:85:39:decimal', stdlib.UInt_max, '1'));
        const v221 = stdlib.safeAdd(v192, stdlib.checkedBigNumberify('./index.rsh:85:52:decimal', stdlib.UInt_max, '1'));
        const cv191 = v220;
        const cv192 = v221;
        const cv193 = v193;
        const cv194 = v215;
        const cv201 = v201;
        
        v191 = cv191;
        v192 = cv192;
        v193 = cv193;
        v194 = cv194;
        v201 = cv201;
        
        continue;}
      
      }
    stdlib.protect(ctc3, await interact.seeYes(v193), {
      at: './index.rsh:93:20:application',
      fs: ['at ./index.rsh:92:7:application call to [unknown function] (defined at: ./index.rsh:92:36:function exp)'],
      msg: 'seeYes',
      who: 'NormalUser'
      });
    
    stdlib.protect(ctc3, await interact.seeNo(v192), {
      at: './index.rsh:97:19:application',
      fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:36:function exp)'],
      msg: 'seeNo',
      who: 'NormalUser'
      });
    
    ;
    return;
    }
  
  
  
  
  
  };
export async function OmegaUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc3 = stdlib.T_Null;
  
  
  const v154 = stdlib.protect(ctc0, interact.beneficiary, 'for OmegaUser\'s interact field beneficiary');
  const v155 = stdlib.protect(ctc1, interact.deadline, 'for OmegaUser\'s interact field deadline');
  const v156 = stdlib.protect(ctc2, interact.proposal, 'for OmegaUser\'s interact field proposal');
  const v157 = stdlib.protect(ctc1, interact.wager, 'for OmegaUser\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v161, time: v160, didSend: v27, from: v159 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v161, time: v160, didSend: v27, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v159, v156, v157, v155, v154],
    evt_cnt: 4,
    funcNum: 1,
    lct: v160,
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v165, v166, v167, v168], secs: v170, time: v169, didSend: v39, from: v164 } = txn2;
      
      ;
      const v178 = stdlib.safeAdd(v169, v167);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v165, v166, v167, v168], secs: v170, time: v169, didSend: v39, from: v164 } = txn2;
  ;
  const v171 = stdlib.addressEq(v159, v164);
  stdlib.assert(v171, {
    at: './index.rsh:49:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'OmegaUser'
    });
  const v178 = stdlib.safeAdd(v169, v167);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v178],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v166, v168, v178],
      evt_cnt: 0,
      funcNum: 3,
      lct: v169,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v243, time: v242, didSend: v122, from: v241 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v243, time: v242, didSend: v122, from: v241 } = txn4;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:36:63:application',
      fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:60:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'OmegaUser'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v184, time: v183, didSend: v48, from: v182 } = txn3;
    ;
    stdlib.protect(ctc3, await interact.seeProposal(v165), {
      at: './index.rsh:64:25:application',
      fs: ['at ./index.rsh:63:7:application call to [unknown function] (defined at: ./index.rsh:63:36:function exp)'],
      msg: 'seeProposal',
      who: 'OmegaUser'
      });
    
    let v191 = stdlib.checkedBigNumberify('./index.rsh:67:29:decimal', stdlib.UInt_max, '4');
    let v192 = stdlib.checkedBigNumberify('./index.rsh:67:35:decimal', stdlib.UInt_max, '5');
    let v193 = stdlib.checkedBigNumberify('./index.rsh:67:32:decimal', stdlib.UInt_max, '5');
    let v194 = v183;
    let v201 = v166;
    
    while (await (async () => {
      const v207 = stdlib.gt(v191, stdlib.checkedBigNumberify('./index.rsh:71:20:decimal', stdlib.UInt_max, '0'));
      
      return v207;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 3,
        funcNum: 5,
        out_tys: [ctc1, ctc2, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v212, v213, v214], secs: v216, time: v215, didSend: v76, from: v211 } = txn4;
      ;
      const v217 = stdlib.eq(v212, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v217) {
        const v218 = stdlib.safeSub(v191, stdlib.checkedBigNumberify('./index.rsh:82:39:decimal', stdlib.UInt_max, '1'));
        const v219 = stdlib.safeAdd(v193, stdlib.checkedBigNumberify('./index.rsh:82:48:decimal', stdlib.UInt_max, '1'));
        const cv191 = v218;
        const cv192 = v192;
        const cv193 = v219;
        const cv194 = v215;
        const cv201 = v201;
        
        v191 = cv191;
        v192 = cv192;
        v193 = cv193;
        v194 = cv194;
        v201 = cv201;
        
        continue;}
      else {
        const v220 = stdlib.safeSub(v191, stdlib.checkedBigNumberify('./index.rsh:85:39:decimal', stdlib.UInt_max, '1'));
        const v221 = stdlib.safeAdd(v192, stdlib.checkedBigNumberify('./index.rsh:85:52:decimal', stdlib.UInt_max, '1'));
        const cv191 = v220;
        const cv192 = v221;
        const cv193 = v193;
        const cv194 = v215;
        const cv201 = v201;
        
        v191 = cv191;
        v192 = cv192;
        v193 = cv193;
        v194 = cv194;
        v201 = cv201;
        
        continue;}
      
      }
    stdlib.protect(ctc3, await interact.seeYes(v193), {
      at: './index.rsh:93:20:application',
      fs: ['at ./index.rsh:92:7:application call to [unknown function] (defined at: ./index.rsh:92:36:function exp)'],
      msg: 'seeYes',
      who: 'OmegaUser'
      });
    
    stdlib.protect(ctc3, await interact.seeNo(v192), {
      at: './index.rsh:97:19:application',
      fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:36:function exp)'],
      msg: 'seeNo',
      who: 'OmegaUser'
      });
    
    stdlib.protect(ctc3, await interact.execute(), {
      at: './index.rsh:101:21:application',
      fs: ['at ./index.rsh:100:17:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
      msg: 'execute',
      who: 'OmegaUser'
      });
    
    ;
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAECBSgDBiYCAQAAIjUAMRhBAmopZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAD9SSEFDEAAt0klDEAAhiUSRCEGNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/4EgWzX+IQRbNf2BMFs1/IE4WzX7STUFSUkiWzX6VwhANflXSCA1+IAEMFVZcDT6FlA0+VA0+FCwNPoiEkEAEzT/NP4jCTT9NPwjCDIGNPtCASI0/zT+Iwk0/SMINPwyBjT7QgEPIQUSRCQ0ARJENARJIhJMNAISEUQoZDUDgASnZcS0sDIGNAMhBFsPREIBL0gkNAESRDQESSISTDQCEhFEKGRJNQMiWzX/gARBsUBNsDIGNAMhBFsMRDT/iAFsNANXCCCBBCUlMgY0/0IApUkjDEAAbEgjNAESRDQESSISTDQCEhFEKGQ1A0k1BUlKVwBANf+BQFs1/oFIWzX9V1AgNfyABBCU5Wg0/1A0/hZQNP0WUDT8ULA0AzEAEkQyBjT9CDX7NP4WNPxQNPsWUChLAVcAMGdIJDUBMgY1AkIAmUiBoI0GiADiIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIAZjX/Nf41/TX8Nfs1+jT7Ig1BACU0+jT7FlA0/BZQNP0WUDT/FlAoSwFXAEBnSCEGNQEyBjUCQgAusSKyATT/sggjshA0+rIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "internalType": "struct T4",
                "name": "v165",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v166",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v168",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
        "internalType": "struct T2",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v212",
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
                "internalType": "struct T4",
                "name": "v213",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v214",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "struct T4",
                "name": "v165",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v166",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v168",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
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
        "internalType": "struct T2",
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
        "internalType": "struct T2",
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
                "name": "v212",
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
                "internalType": "struct T4",
                "name": "v213",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v214",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620011c2380380620011c28339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b610f66806200025c6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063ab53f2c6146100d6578063b6b047b5146100f9578063ef4ed7f01461010c57005b80631e93b0f11461007757806373b4522c1461009b5780637eea518c146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610b94565b61011f565b6100756100bc366004610b94565b61025f565b3480156100cd57600080fd5b50600154610088565b3480156100e257600080fd5b506100eb6103de565b604051610092929190610bac565b610075610107366004610c09565b61047b565b61007561011a366004610c1b565b61066a565b61012f600260005414601161086f565b6101498135158061014257506001548235145b601261086f565b60008080556002805461015b90610c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c2d565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610c77565b90506102008160400151431015601361086f565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610231929190610ce7565b60405180910390a16102453415601061086f565b6000808055600181905561025b90600290610a70565b5050565b61026f600260005414600d61086f565b6102898135158061028257506001548235145b600e61086f565b60008080556002805461029b90610c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546102c790610c2d565b80156103145780601f106102e957610100808354040283529160200191610314565b820191906000526020600020905b8154815290600101906020018083116102f757829003601f168201915b505050505080602001905181019061032c9190610c77565b905061033f81604001514310600f61086f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610370929190610ce7565b60405180910390a18051610387903414600c61086f565b61038f610aaa565b60208083015182516001600160a01b03909116905281810180516004905280516005920182905280516040019190915280514360609091015282519051608001526103d981610895565b505050565b6000606060005460028080546103f390610c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461041f90610c2d565b801561046c5780601f106104415761010080835404028352916020019161046c565b820191906000526020600020905b81548152906001019060200180831161044f57829003601f168201915b50505050509050915091509091565b61048b600160005414600a61086f565b6104a58135158061049e57506001548235145b600b61086f565b6000808055600280546104b790610c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546104e390610c2d565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b50505050508060200190518101906105489190610d24565b90506105606040518060200160405280600081525090565b7f1c179c1281e6c4fc426a0c130d2cfe067d264c0eac72447273649d3e9f51a5213384604051610591929190610d7e565b60405180910390a16105a53415600861086f565b81516105bd906001600160a01b03163314600961086f565b6105cb4360808501356109ce565b81526040805160608082018352600060208301819052928201929092529084013581526105fe60c0850160a08601610de2565b6001600160a01b0390811660208381019182528451604080860191825260026000819055436001558151875181860152945190951684820152905160608085019190915281518085039091018152608090930190528151610663939290910190610afb565b5050505050565b61067a600660005414601561086f565b6106948135158061068d57506001548235145b601661086f565b6000808055600280546106a690610c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546106d290610c2d565b801561071f5780601f106106f45761010080835404028352916020019161071f565b820191906000526020600020905b81548152906001019060200180831161070257829003601f168201915b50505050508060200190518101906107379190610e06565b90507f068963b342d3b9567117d8fc99fe69f0572e7a1043ba1a6332e31cea1d10ba31338360405161076a929190610e8d565b60405180910390a161077e3415601461086f565b60208201356107fd5761078f610aaa565b815181516001600160a01b03909116905260208201516107b0906001610a21565b602080830180519290925260408401519151015260608201516107d49060016109ce565b60208201805160400191909152805143606090910152608080840151915101526103d981610895565b610805610aaa565b815181516001600160a01b0390911690526020820151610826906001610a21565b602082015152604082015161083c9060016109ce565b6020808301805190910191909152606080840151825160400152815143910152608080840151915101526103d981610895565b8161025b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60208101515115610972576108db6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252602080840180515182850190815281518301516040808701918252835181015160608089019182529451608090810151818a019081526006600055436001558351808901999099529451888401529251948701949094529251908501525160a0808501919091528151808503909101815260c0909301905281516103d9926002920190610afb565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109b4573d6000803e3d6000fd5b50600080805560018190556109cb90600290610a70565b50565b6000826109db8382610f01565b9150811015610a1b5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161088c565b92915050565b600082610a2e8382610f19565b9150811115610a1b5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161088c565b508054610a7c90610c2d565b6000825580601f10610a8c575050565b601f0160209004906000526020600020908101906109cb9190610b7f565b6040805160608101825260009181019182529081908152602001610af66040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b828054610b0790610c2d565b90600052602060002090601f016020900481019282610b295760008555610b6f565b82601f10610b4257805160ff1916838001178555610b6f565b82800160010185558215610b6f579182015b82811115610b6f578251825591602001919060010190610b54565b50610b7b929150610b7f565b5090565b5b80821115610b7b5760008155600101610b80565b600060408284031215610ba657600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610be057858101830151858201606001528201610bc4565b81811115610bf2576000606083870101525b50601f01601f191692909201606001949350505050565b600060c08284031215610ba657600080fd5b600060a08284031215610ba657600080fd5b600181811c90821680610c4157607f821691505b60208210811415610ba657634e487b7160e01b600052602260045260246000fd5b6001600160a01b03811681146109cb57600080fd5b600060608284031215610c8957600080fd5b6040516060810181811067ffffffffffffffff82111715610cba57634e487b7160e01b600052604160045260246000fd5b604052825181526020830151610ccf81610c62565b60208201526040928301519281019290925250919050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610d1557600080fd5b80604085015250509392505050565b600060208284031215610d3657600080fd5b6040516020810181811067ffffffffffffffff82111715610d6757634e487b7160e01b600052604160045260246000fd5b6040528251610d7581610c62565b81529392505050565b6001600160a01b0383811682528235602080840191909152830135604080840191909152830135606083015260e082019060608401356080840152608084013560a084015260a0840135610dd181610c62565b81811660c085015250509392505050565b600060208284031215610df457600080fd5b8135610dff81610c62565b9392505050565b600060a08284031215610e1857600080fd5b60405160a0810181811067ffffffffffffffff82111715610e4957634e487b7160e01b600052604160045260246000fd5b6040528251610e5781610c62565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600060c08201905060018060a01b0380851683528335602084015260208401356040840152610ecc606084016040860180358252602090810135910152565b6080840135610eda81610c62565b81811660a085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f1457610f14610eeb565b500190565b600082821015610f2b57610f2b610eeb565b50039056fea26469706673582212208beed7fdbe3d505191c8255b5726259d9483fa558aeb0f625a0b4934811f917464736f6c634300080c0033`,
  BytecodeLen: 4546,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:107:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
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
