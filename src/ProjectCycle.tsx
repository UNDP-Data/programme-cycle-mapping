import { useRef, useState, useEffect } from "react";
import { zoom } from "d3-zoom";
import { select } from 'd3-selection';

interface Props {
  sharePoint: boolean;
  erc: boolean;
  powerBi: boolean;
  unInfo: boolean;
  UNDocs: boolean;
  website: boolean;
  online: boolean;
  all: boolean;
  roles: string[];
}

export const ProjectCycle = (props: Props) => {
  const {
    sharePoint,
    erc,
    powerBi,
    unInfo,
    UNDocs,
    website,
    online,
    roles,
    all,
  } = props;
  const [selectedHeader, setSelectedHeader] = useState<string | null>(null);
  const SVG = useRef<SVGSVGElement>(null);
  const mapG = useRef<SVGGElement>(null);
  useEffect(() => {
    const mapGSelect = select(mapG.current);
    const mapSvgSelect = select(SVG.current);
    const zoomBehaviour = zoom()
      .scaleExtent([1, 3])
      .translateExtent([[0, 0], [3115, 2033]])
      .on('zoom', ({ transform }) => {
        mapGSelect.attr('transform', transform);
      });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapSvgSelect.call(zoomBehaviour as any);
  }, []);
  console.log((all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RBx") !== -1) ? 1 : 0.25)
  return (
    <div style={{width: "calc(100% - 40px)", height: "calc(100vh - 145px)"}}>
      <svg width="100%" height="100%" style={{padding:"0 20px 20px 20px"}} viewBox="0 0 3115 1857" fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
  <g id="Group 64" ref={mapG}>
    <rect id="Rectangle 1" x="35" y="104" width="3074" height="1691" rx="30" stroke="#E4882E" strokeWidth="12" />
    <path id="Rectangle 3" d="M1581 1795H65C48.4314 1795 35 1781.57 35 1765V1622" stroke="#BCBEC0" strokeWidth="12" />
    <path id="Rectangle 2" d="M1086 104H3079C3095.57 104 3109 117.431 3109 134V1765C3109 1781.57 3095.57 1795 3079 1795H1086" stroke="#56ACC3" strokeWidth="12" />
    <g id="CPDFramework" opacity={selectedHeader === 'CPDFramework' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'CPDFramework' ? setSelectedHeader('CPDFramework') : setSelectedHeader(null)}}>
        <circle id="Ellipse 1" cx="197" cy="104" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
        <text id="1" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="190.422" y="113.28">1</tspan>
        </text>
        <text id="Develop Cooperation Framework / CPD or RPD" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="162" y="25.28">Develop Cooperation </tspan>
          <tspan x="162" y="57.28">Framework / CPD or RPD</tspan>
        </text>
      </g>
      <g id="Connectors">
        <path id="Rectangle 7" d="M198 252V374C198 379.523 202.477 384 208 384H231" stroke="#E4882E" />
        <path id="Rectangle 16" d="M198 416V1276C198 1281.52 202.477 1286 208 1286H224" stroke="#E4882E" />
        <path id="Rectangle 17" d="M198 574V1380C198 1385.52 202.477 1390 208 1390H224" stroke="#E4882E" />
        <path id="Rectangle 8" d="M198 356V478C198 483.523 202.477 488 208 488H231" stroke="#E4882E" />
        <path id="Rectangle 6" d="M198 139V270C198 275.523 202.477 280 208 280H231" stroke="#E4882E" />
        <path id="Rectangle 9" d="M198 554V584C198 589.523 202.477 594 208 594H231" stroke="#E4882E" />
        <path id="Rectangle 10" d="M198 576V670C198 675.523 202.477 680 208 680H231" stroke="#E4882E" />
        <path id="Rectangle 11" d="M198 644V774C198 779.523 202.477 784 208 784H224" stroke="#E4882E" />
        <path id="Rectangle 12" d="M198 748V878C198 883.523 202.477 888 208 888H224" stroke="#E4882E" />
        <path id="Rectangle 13" d="M198 844V963C198 968.523 202.477 973 208 973H224" stroke="#E4882E" />
        <path id="Rectangle 14" d="M198 950V1050C198 1055.52 202.477 1060 208 1060H224" stroke="#E4882E" />
        <path id="Rectangle 15" d="M198 1035V1154C198 1159.52 202.477 1164 208 1164H224" stroke="#E4882E" />
        <path id="Rectangle 5" d="M198 139V184C198 189.523 202.477 194 208 194H231" stroke="#E4882E" />
      </g>
      <g id="TOC Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RBx") !== -1) ? 1 : 0.25}>
        <g id="Rectangle 6_2" filter="url(#filter0_d_20_221)">
          <rect x="231" y="176" width="234" height="66" rx="6" fill="white" />
          <rect x="231.5" y="176.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Theory of Change (ToC) Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="200.22">Theory of Change (ToC)&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="228.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12" cx="231.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13" cx="231.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="CPAP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_3" filter="url(#filter1_d_20_221)">
          <rect x="231" y="262" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="262.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Country Programme Action Plan (CPAP) Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="286.22">Country Programme </tspan>
            <tspan x="251" y="304.22">Action Plan (CPAP)&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="332.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_2" cx="231.5" cy="279.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_2" cx="231.5" cy="279.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="RPD SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_4" filter="url(#filter2_d_20_221)">
          <rect x="231" y="366" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="366.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Regional Programme Document (RPD) SharePoint">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="390.22">Regional Programme </tspan>
            <tspan x="251" y="408.22">Document (RPD)&#10;</tspan>
          </text>
          <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="436.22">SharePoint</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_3" cx="231.5" cy="383.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_3" cx="231.5" cy="383.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="CPD UNDOCS" opacity={(UNDocs || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_5" filter="url(#filter3_d_20_221)">
          <rect x="231" y="470" width="234" height="86" rx="6" fill="white" />
          <rect x="231.5" y="470.5" width="233" height="85" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Country Programme Document (CPD) UNDOCS">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="494.22">Country Programme </tspan>
            <tspan x="251" y="512.22">Document (CPD)&#10;</tspan>
          </text>
          <text fill="#0078D4" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="540.22">UNDOCS</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_4" cx="231.5" cy="487.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_4" cx="231.5" cy="487.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="UNSDGR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_6" filter="url(#filter4_d_20_221)">
          <rect x="231" y="576" width="234" height="66" rx="6" fill="white" />
          <rect x="231.5" y="576.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="UNSDG Roadmap Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="600.22">UNSDG Roadmap&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="628.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_5" cx="231.5" cy="593.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_5" cx="231.5" cy="593.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="UNSDGCCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_7" filter="url(#filter5_d_20_221)">
          <rect x="231" y="662" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="662.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="UNSDG Common Country Assessment Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="686.22">UNSDG Common </tspan>
            <tspan x="251" y="704.22">Country Assessment&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="732.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_6" cx="231.5" cy="679.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_6" cx="231.5" cy="679.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="CLMAHACT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_8" filter="url(#filter6_d_20_221)">
          <rect x="231" y="766" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="766.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Country-level Macro Assessment of HACT Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="790.22">Country-level Macro </tspan>
            <tspan x="251" y="808.22">Assessment of HACT&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="836.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_7" cx="231.5" cy="783.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_7" cx="231.5" cy="783.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="CF UNSDGWebsite" opacity={(website || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_9" filter="url(#filter7_d_20_221)">
          <rect x="231" y="870" width="234" height="66" rx="6" fill="white" />
          <rect x="231.5" y="870.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Cooperation Framework UNSDG Website">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="894.22">Cooperation Framework&#10;</tspan>
          </text>
          <text fill="#0078D4" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="922.22">UNSDG Website</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_8" cx="231.5" cy="887.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_8" cx="231.5" cy="887.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="EP ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_10" filter="url(#filter8_d_20_221)">
          <rect x="231" y="956" width="234" height="66" rx="6" fill="white" />
          <rect x="231.5" y="956.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Evaluation Plan ERC">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="980.22">Evaluation Plan&#10;</tspan>
          </text>
          <text fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="1008.22">ERC</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_9" cx="231.5" cy="973.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_9" cx="231.5" cy="973.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="RMT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_11" filter="url(#filter9_d_20_221)">
          <rect x="231" y="1042" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="1042.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Resource Mobilization Target (RMT) Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="1066.22">Resource Mobilization </tspan>
            <tspan x="251" y="1084.22">Target (RMT) &#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="1112.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_10" cx="231.5" cy="1059.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_10" cx="231.5" cy="1059.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="PCS Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_12" filter="url(#filter10_d_20_221)">
          <rect x="231" y="1146" width="234" height="102" rx="6" fill="white" />
          <rect x="231.5" y="1146.5" width="233" height="101" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Partnership and Communications Strategy Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="1170.22">Partnership and </tspan>
            <tspan x="251" y="1188.22">Communications </tspan>
            <tspan x="251" y="1206.22">Strategy&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="1234.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_11" cx="231.5" cy="1163.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_11" cx="231.5" cy="1163.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="PCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_13" filter="url(#filter11_d_20_221)">
          <rect x="231" y="1268" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="1268.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Programme Criticality Assessment Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="1292.22">Programme Criticality </tspan>
            <tspan x="251" y="1310.22">Assessment&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="1338.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_12" cx="231.5" cy="1285.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_12" cx="231.5" cy="1285.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="JRGWP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Joint Results Group") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_14" filter="url(#filter12_d_20_221)">
          <rect x="231" y="1372" width="234" height="84" rx="6" fill="white" />
          <rect x="231.5" y="1372.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Joint Results Group Work Plans Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="251" y="1396.22">Joint Results Group </tspan>
            <tspan x="251" y="1414.22">Work Plans&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="251" y="1442.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_13" cx="231.5" cy="1389.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_13" cx="231.5" cy="1389.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
    </g>
    <g id="AppraiseAndAprrove" opacity={selectedHeader === 'AppraiseAndAprrove' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head_2" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'AppraiseAndAprrove' ? setSelectedHeader('AppraiseAndAprrove') : setSelectedHeader(null)}}>
        <circle id="Ellipse 4" cx="745" cy="104" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
        <text id="Appraise &#38; Approve" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="710" y="57.28">Appraise &#38; Approve</tspan>
        </text>
        <text id="2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="735.406" y="113.28">2</tspan>
        </text>
      </g>
      <g id="Connectors_2">
        <path id="Rectangle 26" d="M744 139V184C744 189.523 748.477 194 754 194H777" stroke="#E4882E" />
        <path id="Rectangle 30" d="M744 288V410C744 415.523 748.477 420 754 420H770" stroke="#E4882E" />
        <path id="Rectangle 31" d="M744 175V306C744 311.523 748.477 316 754 316H777" stroke="#E4882E" />
      </g>
      <g id="IPACP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PAC") !== -1 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_15" filter="url(#filter13_d_20_221)">
          <rect x="777" y="176" width="234" height="102" rx="6" fill="white" />
          <rect x="777.5" y="176.5" width="233" height="101" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Integrated Programme Assessment Committee (IPAC) of programme Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="797" y="200.22">Integrated Programme </tspan>
            <tspan x="797" y="218.22">Assessment Committee </tspan>
            <tspan x="797" y="236.22">(IPAC) of programme&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="797" y="264.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_14" cx="777.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_14" cx="777.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="COPBCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_16" filter="url(#filter14_d_20_221)">
          <rect x="777" y="298" width="234" height="84" rx="6" fill="white" />
          <rect x="777.5" y="298.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="CO Performance-Based Capacity Assessment Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="797" y="322.22">CO Performance-Based </tspan>
            <tspan x="797" y="340.22">Capacity Assessment&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="797" y="368.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_15" cx="777.5" cy="315.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_15" cx="777.5" cy="315.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="ACF Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PACr") !== -1 || roles.indexOf("OPG") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_17" filter="url(#filter15_d_20_221)">
          <rect x="777" y="402" width="234" height="84" rx="6" fill="white" />
          <rect x="777.5" y="402.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Appraise Cooperation Framework/CPD/RPD Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="797" y="426.22">Appraise Cooperation </tspan>
            <tspan x="797" y="444.22">Framework/CPD/RPD&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="797" y="472.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_16" cx="777.5" cy="419.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_16" cx="777.5" cy="419.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
    </g>
    <g id="AnnualPlanning" opacity={selectedHeader === 'AnnualPlanning' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head_3" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'AnnualPlanning' ? setSelectedHeader('AnnualPlanning') : setSelectedHeader(null)}}>
        <circle id="Ellipse 5" cx="1279" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
        <text id="Annual Planning" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="1244" y="57.28">Annual Planning</tspan>
        </text>
        <text id="3" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="1269.61" y="113.28">3</tspan>
        </text>
      </g>
      <g id="Connectors_3">
        <path id="Rectangle 34" d="M1279 139V184C1279 189.523 1283.48 194 1289 194H1312" stroke="#56ACC3" />
        <path id="Rectangle 38" d="M1279 139V288C1279 293.523 1283.48 298 1289 298H1312" stroke="#56ACC3" />
      </g>
      <g id="IWP SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_18" filter="url(#filter16_d_20_221)">
          <rect x="1312" y="176" width="234" height="84" rx="6" fill="white" />
          <rect x="1312.5" y="176.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Integrated Workplan (IWP) SharePoint">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1332" y="200.22">Integrated Workplan </tspan>
            <tspan x="1332" y="218.22">(IWP)&#10;</tspan>
          </text>
          <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1332" y="246.22">SharePoint</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_17" cx="1312.5" cy="193.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_17" cx="1312.5" cy="193.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="PP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Procurement") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_19" filter="url(#filter17_d_20_221)">
          <rect x="1312" y="280" width="234" height="66" rx="6" fill="white" />
          <rect x="1312.5" y="280.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Procurement Planning Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1332" y="304.22">Procurement Planning&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1332" y="332.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_18" cx="1312.5" cy="297.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_18" cx="1312.5" cy="297.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
    </g>
    <g id="Monitor" opacity={selectedHeader === 'Monitor' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head_4" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Monitor' ? setSelectedHeader('Monitor') : setSelectedHeader(null)}}>
        <circle id="Ellipse 7" cx="1769" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
        <text id="Monitor_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="1734" y="57.28">Monitor</tspan>
        </text>
        <text id="4" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="1759.45" y="113.28">4</tspan>
        </text>
      </g>
      <g id="Connectors_4">
        <path id="Rectangle 45" d="M1769 139V184C1769 189.523 1773.48 194 1779 194H1802" stroke="#56ACC3" />
        <path id="Rectangle 46" d="M1769 270V392C1769 397.523 1773.48 402 1779 402H1802" stroke="#56ACC3" />
        <path id="Rectangle 47" d="M1769 356V478C1769 483.523 1773.48 488 1779 488H1802" stroke="#56ACC3" />
        <path id="Rectangle 48" d="M1769 338V564C1769 569.523 1773.48 574 1779 574H1802" stroke="#56ACC3" />
        <path id="Rectangle 49" d="M1769 338V668C1769 673.523 1773.48 678 1779 678H1802" stroke="#56ACC3" />
        <path id="Rectangle 50" d="M1769 139V288C1769 293.523 1773.48 298 1779 298H1802" stroke="#56ACC3" />
      </g>
      <g id="DCII Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("M&E Officer") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_20" filter="url(#filter18_d_20_221)">
          <rect x="1802" y="176" width="234" height="84" rx="6" fill="white" />
          <rect x="1802.5" y="176.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Data for CPD/RPD Indicators and IRRF Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1822" y="200.22">Data for CPD/RPD </tspan>
            <tspan x="1822" y="218.22">Indicators and IRRF&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1822" y="246.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_19" cx="1802.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_19" cx="1802.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="IFRP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_21" filter="url(#filter19_d_20_221)">
          <rect x="1802" y="280" width="234" height="84" rx="6" fill="white" />
          <rect x="1802.5" y="280.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Identify Factors Related to Progress Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1822" y="304.22">Identify Factors Related </tspan>
            <tspan x="1822" y="322.22">to Progress&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1822" y="350.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_20" cx="1802.5" cy="297.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_20" cx="1802.5" cy="297.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="QA SharePoinr" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_22" filter="url(#filter20_d_20_221)">
          <rect x="1802" y="384" width="234" height="66" rx="6" fill="white" />
          <rect x="1802.5" y="384.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Quality Assessment SharePoint">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1822" y="408.22">Quality Assessment&#10;</tspan>
          </text>
          <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1822" y="436.22">SharePoint</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_21" cx="1802.5" cy="401.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_21" cx="1802.5" cy="401.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="RA PowerBI" opacity={(powerBi || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_23" filter="url(#filter21_d_20_221)">
          <rect x="1802" y="470" width="234" height="66" rx="6" fill="white" />
          <rect x="1802.5" y="470.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Risk Assessment PowerBi">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1822" y="494.22">Risk Assessment&#10;</tspan>
          </text>
          <text fill="#F1C911" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1822" y="522.22">PowerBi</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_22" cx="1802.5" cy="487.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_22" cx="1802.5" cy="487.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="OPM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_24" filter="url(#filter22_d_20_221)">
          <rect x="1802" y="556" width="234" height="84" rx="6" fill="white" />
          <rect x="1802.5" y="556.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Operational Performance Monitoring Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1822" y="580.22">Operational </tspan>
            <tspan x="1822" y="598.22">Performance Monitoring&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1822" y="626.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_23" cx="1802.5" cy="573.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_23" cx="1802.5" cy="573.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="LLD Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_25" filter="url(#filter23_d_20_221)">
          <rect x="1802" y="660" width="234" height="84" rx="6" fill="white" />
          <rect x="1802.5" y="660.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Lessons Learned Document Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="1822" y="684.22">Lessons Learned </tspan>
            <tspan x="1822" y="702.22">Document&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="1822" y="730.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_24" cx="1802.5" cy="677.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_24" cx="1802.5" cy="677.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
    </g>
    <g id="Oversight" opacity={selectedHeader === 'Oversight' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head_5" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Oversight' ? setSelectedHeader('Oversight') : setSelectedHeader(null)}}>
        <circle id="Ellipse 8" cx="2255" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
        <text id="Oversight_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="2220" y="57.28">Oversight</tspan>
        </text>
        <text id="5" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="2245.27" y="113.28">5</tspan>
        </text>
      </g>
      <g id="Connectors_5">
        <path id="Rectangle 51" d="M2255 139V184C2255 189.523 2259.48 194 2265 194H2288" stroke="#56ACC3" />
        <path id="Rectangle 66" d="M2255 159V288C2255 293.523 2259.48 298 2265 298H2281" stroke="#56ACC3" />
        <path id="Rectangle 67" d="M2255 263V392C2255 397.523 2259.48 402 2265 402H2281" stroke="#56ACC3" />
        <path id="Rectangle 68" d="M2255 259V496C2255 501.523 2259.48 506 2265 506H2281" stroke="#56ACC3" />
      </g>
      <g id="MPB Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Board") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_26" filter="url(#filter24_d_20_221)">
          <rect x="2288" y="176" width="234" height="84" rx="6" fill="white" />
          <rect x="2288.5" y="176.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Minutes Programme Board Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="2308" y="200.22">Minutes Programme </tspan>
            <tspan x="2308" y="218.22">Board&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="2308" y="246.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_25" cx="2288.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_25" cx="2288.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="PSN Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_27" filter="url(#filter25_d_20_221)">
          <rect x="2288" y="280" width="234" height="84" rx="6" fill="white" />
          <rect x="2288.5" y="280.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Programme Suspension Note Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="2308" y="304.22">Programme Suspension </tspan>
            <tspan x="2308" y="322.22">Note&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="2308" y="350.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_26" cx="2288.5" cy="297.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_26" cx="2288.5" cy="297.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="PEL Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_28" filter="url(#filter26_d_20_221)">
          <rect x="2288" y="384" width="234" height="84" rx="6" fill="white" />
          <rect x="2288.5" y="384.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Programme Extension Letter Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="2308" y="408.22">Programme Extension </tspan>
            <tspan x="2308" y="426.22">Letter&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="2308" y="454.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_27" cx="2288.5" cy="401.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_27" cx="2288.5" cy="401.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
      <g id="PA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_29" filter="url(#filter27_d_20_221)">
          <rect x="2288" y="488" width="234" height="84" rx="6" fill="white" />
          <rect x="2288.5" y="488.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
        </g>
        <g id="Programme Ammendments Offline">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="2308" y="512.22">Programme </tspan>
            <tspan x="2308" y="530.22">Ammendments&#10;</tspan>
          </text>
          <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="2308" y="558.22">Offline</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_28" cx="2288.5" cy="505.5" r="7" fill="white" stroke="#D52B1E" />
        <circle id="Ellipse 13_28" cx="2288.5" cy="505.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
      </g>
    </g>
    <g id="Report" opacity={selectedHeader === 'Report' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head_6" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Report' ? setSelectedHeader('Report') : setSelectedHeader(null)}}>
        <circle id="Ellipse 10" cx="2741" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
        <text id="Report_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="2706" y="57.28">Report</tspan>
        </text>
        <text id="6" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="2731.27" y="113.28">6</tspan>
        </text>
      </g>
      <g id="Connectors_6">
        <path id="Rectangle 55" d="M2741 139V184C2741 189.523 2745.48 194 2751 194H2774" stroke="#56ACC3" />
        <path id="Rectangle 58" d="M2741 121V270C2741 275.523 2745.48 280 2751 280H2774" stroke="#56ACC3" />
      </g>
      <g id="OUCR UNINFO" opacity={(unInfo || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_30" filter="url(#filter28_d_20_221)">
          <rect x="2774" y="176" width="234" height="66" rx="6" fill="white" />
          <rect x="2774.5" y="176.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="One UN Country Report UNINFO">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="2794" y="200.22">One UN Country Report&#10;</tspan>
          </text>
          <text fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="2794" y="228.22">UNINFO</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_29" cx="2774.5" cy="193.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_29" cx="2774.5" cy="193.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
      <g id="ROAR SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_31" filter="url(#filter29_d_20_221)">
          <rect x="2774" y="262" width="234" height="70" rx="6" fill="white" />
          <rect x="2774.5" y="262.5" width="233" height="69" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="ROAR SharePoint_2">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="2794" y="286.22">ROAR&#10;</tspan>
          </text>
          <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="2794" y="314.22">SharePoint</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_30" cx="2774.5" cy="279.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_30" cx="2774.5" cy="279.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
    </g>
    <g id="ProgrammeTransition" opacity={selectedHeader === 'ProgrammeTransition' || selectedHeader === null ? 1 : 0.25}>
      <g id="Head_7" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'ProgrammeTransition' ? setSelectedHeader('ProgrammeTransition') : setSelectedHeader(null)}}>
        <circle id="Ellipse 11" cx="35" cy="1622" r="31" fill="white" stroke="#BCBEC0" strokeWidth="8" />
        <text id="Programme Transition" fill="#BCBEC0" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="35" y="1850.28">Programme Transition</tspan>
        </text>
        <text id="10" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
          <tspan x="18.5" y="1631.28">10</tspan>
        </text>
      </g>
      <path id="Rectangle 62" d="M70 1622L100.872 1622C106.395 1622 110.872 1626.48 110.872 1632L110.872 1663C110.872 1668.52 115.349 1673 120.872 1673L124 1673" stroke="#BCBEC0" />
      <g id="ICPE ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("IEO") !== -1)  ? 1 : 0.25}>
        <g id="Rectangle 6_32" filter="url(#filter30_d_20_221)">
          <rect x="131" y="1655" width="284" height="84" rx="6" fill="white" />
          <rect x="131.5" y="1655.5" width="283" height="83" rx="5.5" stroke="#0F8B79" />
        </g>
        <g id="Independent Country Programme Evaluaitons (ICPE) ERC">
          <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
            <tspan x="151" y="1679.22">Independent Country </tspan>
            <tspan x="151" y="1697.22">Programme Evaluaitons (ICPE)&#10;</tspan>
          </text>
          <text fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
            <tspan x="151" y="1725.22">ERC</tspan>
          </text>
        </g>
        <circle id="Ellipse 12_31" cx="131.5" cy="1672.5" r="7" fill="white" stroke="#0F8B79" />
        <circle id="Ellipse 13_31" cx="131.5" cy="1672.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_d_20_221" x="216" y="161" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter1_d_20_221" x="216" y="247" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter2_d_20_221" x="216" y="351" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter3_d_20_221" x="216" y="455" width="264" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter4_d_20_221" x="216" y="561" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter5_d_20_221" x="216" y="647" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter6_d_20_221" x="216" y="751" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter7_d_20_221" x="216" y="855" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter8_d_20_221" x="216" y="941" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter9_d_20_221" x="216" y="1027" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter10_d_20_221" x="216" y="1131" width="264" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter11_d_20_221" x="216" y="1253" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter12_d_20_221" x="216" y="1357" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter13_d_20_221" x="762" y="161" width="264" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter14_d_20_221" x="762" y="283" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter15_d_20_221" x="762" y="387" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter16_d_20_221" x="1297" y="161" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter17_d_20_221" x="1297" y="265" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter18_d_20_221" x="1787" y="161" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter19_d_20_221" x="1787" y="265" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter20_d_20_221" x="1787" y="369" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter21_d_20_221" x="1787" y="455" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter22_d_20_221" x="1787" y="541" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter23_d_20_221" x="1787" y="645" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter24_d_20_221" x="2273" y="161" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter25_d_20_221" x="2273" y="265" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter26_d_20_221" x="2273" y="369" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter27_d_20_221" x="2273" y="473" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter28_d_20_221" x="2759" y="161" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter29_d_20_221" x="2759" y="247" width="264" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
    <filter id="filter30_d_20_221" x="116" y="1640" width="314" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_20_221" />
      <feOffset />
      <feGaussianBlur stdDeviation="5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_221" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_221" result="shape" />
    </filter>
  </defs>
</svg>
  </div>
)}