import {
  flowRendererV2,
  flowStyles
} from "./chunk-GG6HJNJ2.js";
import "./chunk-NX6P2L5C.js";
import {
  flowDb,
  parser$1
} from "./chunk-V5HE4VST.js";
import "./chunk-T7V3BOC2.js";
import "./chunk-J7DOHF73.js";
import "./chunk-RQZZX3RV.js";
import "./chunk-HFFILGY7.js";
import "./chunk-WSCHW7GZ.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-BNFXFYNR.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-476db779.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-476db779-G7EYM2QV.js.map
