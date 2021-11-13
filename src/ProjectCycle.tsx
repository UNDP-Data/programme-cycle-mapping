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
  return (
    <div style={{width: "calc(100% - 40px)", height: "calc(100vh - 145px)"}}>
      <svg width="100%" height="100%" style={{padding:"0 20px 20px 20px"}} viewBox="0 0 3028 1477" fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
        <g id="Group 64" ref={mapG}>
          <rect id="Rectangle 1" x="35" y="104" width="2987" height="1311" rx="30" stroke="#E4882E" strokeWidth="12" />
          <path id="Rectangle 3" d="M1494 1415H65C48.4315 1415 35 1401.57 35 1385V1242" stroke="#BCBEC0" strokeWidth="12" />
          <path id="Rectangle 2" d="M999 104H2992C3008.57 104 3022 117.431 3022 134V1385C3022 1401.57 3008.57 1415 2992 1415H999" stroke="#56ACC3" strokeWidth="12" />
          <g id="CPDFramework" opacity={selectedHeader === 'CPDFramework' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'CPDFramework' ? setSelectedHeader('CPDFramework') : setSelectedHeader(null)}}>
              <circle id="Ellipse 1" cx="110" cy="104" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
              <text id="1" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="103.422" y="113.28">1</tspan>
              </text>
              <text id="Develop Cooperation Framework / CPD or RPD" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="75" y="25.28">Develop Cooperation </tspan>
                <tspan x="75" y="57.28">Framework / CPD or RPD</tspan>
              </text>
            </g>
            <g id="Connectors">
              <path id="Rectangle 16" d="M111 338L111 964C111 969.523 115.477 974 121 974H137" stroke="#E4882E" />
              <path id="Rectangle 17" d="M111 252L111 1058C111 1063.52 115.477 1068 121 1068H137" stroke="#E4882E" />
              <path id="Rectangle 6" d="M111 163L111 256C111 261.523 115.477 266 121 266H144" stroke="#E4882E" />
              <path id="Rectangle 9" d="M111 320L111 350C111 355.523 115.477 360 121 360H144" stroke="#E4882E" />
              <path id="Rectangle 10" d="M111 328L111 422C111 427.523 115.477 432 121 432H144" stroke="#E4882E" />
              <path id="Rectangle 11" d="M111 386L111 516C111 521.523 115.477 526 121 526H137" stroke="#E4882E" />
              <path id="Rectangle 12" d="M111 480L111 610C111 615.523 115.477 620 121 620H137" stroke="#E4882E" />
              <path id="Rectangle 13" d="M111 562L111 681C111 686.523 115.477 691 121 691H137" stroke="#E4882E" />
              <path id="Rectangle 14" d="M111 654L111 754C111 759.523 115.477 764 121 764H137" stroke="#E4882E" />
              <path id="Rectangle 15" d="M111 729L111 848C111 853.523 115.477 858 121 858H137" stroke="#E4882E" />
              <path id="Rectangle 5" d="M111 139L111 184C111 189.523 115.477 194 121 194H144" stroke="#E4882E" />
            </g>
            <g id="TOC Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RBx") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_2" filter="url(#filter0_d_87_410)">
                <rect x="144" y="176" width="234" height="42" rx="6" fill="white" />
                <rect x="144.5" y="176.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Theory of Change (ToC)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="202.22">Theory of Change (ToC)</tspan>
              </text>
              <circle id="Ellipse 12" cx="144.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13" cx="144.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="CPAP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_3" filter="url(#filter1_d_87_410)">
                <rect x="144" y="248" width="234" height="64" rx="6" fill="white" />
                <rect x="144.5" y="248.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Country Programme Action Plan (CPAP)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="274.22">Country Programme </tspan>
                <tspan x="164" y="296.22">Action Plan (CPAP)</tspan>
              </text>
              <circle id="Ellipse 12_2" cx="144.5" cy="265.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_2" cx="144.5" cy="265.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="UNSDGR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_4" filter="url(#filter2_d_87_410)">
                <rect x="144" y="342" width="234" height="42" rx="6" fill="white" />
                <rect x="144.5" y="342.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="UNSDG Roadmap" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="368.22">UNSDG Roadmap</tspan>
              </text>
              <circle id="Ellipse 12_3" cx="144.5" cy="359.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_3" cx="144.5" cy="359.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="UNSDGCCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_5" filter="url(#filter3_d_87_410)">
                <rect x="144" y="414" width="234" height="64" rx="6" fill="white" />
                <rect x="144.5" y="414.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="UNSDG Common Country Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="440.22">UNSDG Common </tspan>
                <tspan x="164" y="462.22">Country Assessment</tspan>
              </text>
              <circle id="Ellipse 12_4" cx="144.5" cy="431.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_4" cx="144.5" cy="431.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="CLMAHACT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_6" filter="url(#filter4_d_87_410)">
                <rect x="144" y="508" width="234" height="64" rx="6" fill="white" />
                <rect x="144.5" y="508.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Country-level Macro Assessment of HACT" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="534.22">Country-level Macro </tspan>
                <tspan x="164" y="556.22">Assessment of HACT</tspan>
              </text>
              <circle id="Ellipse 12_5" cx="144.5" cy="525.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_5" cx="144.5" cy="525.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="CF UNSDGWebsite" opacity={(website || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_7" filter="url(#filter5_d_87_410)">
                <rect x="144" y="602" width="234" height="42" rx="6" fill="white" />
                <rect x="144.5" y="602.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Cooperation Framework" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="628.22">Cooperation Framework</tspan>
              </text>
              <circle id="Ellipse 12_6" cx="144.5" cy="619.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_6" cx="144.5" cy="619.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="EP ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_8" filter="url(#filter6_d_87_410)">
                <rect x="144" y="674" width="234" height="42" rx="6" fill="white" />
                <rect x="144.5" y="674.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Evaluation Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="700.22">Evaluation Plan</tspan>
              </text>
              <circle id="Ellipse 12_7" cx="144.5" cy="691.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_7" cx="144.5" cy="691.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="RMT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_9" filter="url(#filter7_d_87_410)">
                <rect x="144" y="746" width="234" height="64" rx="6" fill="white" />
                <rect x="144.5" y="746.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Resource Mobilization Target (RMT)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="772.22">Resource Mobilization </tspan>
                <tspan x="164" y="794.22">Target (RMT) </tspan>
              </text>
              <circle id="Ellipse 12_8" cx="144.5" cy="763.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_8" cx="144.5" cy="763.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PCS Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_10" filter="url(#filter8_d_87_410)">
                <rect x="144" y="840" width="234" height="86" rx="6" fill="white" />
                <rect x="144.5" y="840.5" width="233" height="85" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Partnership and Communications Strategy" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="866.22">Partnership and </tspan>
                <tspan x="164" y="888.22">Communications </tspan>
                <tspan x="164" y="910.22">Strategy</tspan>
              </text>
              <circle id="Ellipse 12_9" cx="144.5" cy="857.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_9" cx="144.5" cy="857.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_11" filter="url(#filter9_d_87_410)">
                <rect x="144" y="956" width="234" height="64" rx="6" fill="white" />
                <rect x="144.5" y="956.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Programme Criticality Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="982.22">Programme Criticality </tspan>
                <tspan x="164" y="1004.22">Assessment</tspan>
              </text>
              <circle id="Ellipse 12_10" cx="144.5" cy="973.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_10" cx="144.5" cy="973.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="JRGWP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Joint Results Group") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_12" filter="url(#filter10_d_87_410)">
                <rect x="144" y="1050" width="234" height="64" rx="6" fill="white" />
                <rect x="144.5" y="1050.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Joint Results Group Work Plans" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="164" y="1076.22">Joint Results Group </tspan>
                <tspan x="164" y="1098.22">Work Plans</tspan>
              </text>
              <circle id="Ellipse 12_11" cx="144.5" cy="1067.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_11" cx="144.5" cy="1067.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="AppraiseAndApprove" opacity={selectedHeader === 'AppraiseAndApprove' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_2" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'AppraiseAndApprove' ? setSelectedHeader('AppraiseAndApprove') : setSelectedHeader(null)}}>
              <circle id="Ellipse 4" cx="658" cy="104" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
              <text id="Appraise &#38; Approve" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="623" y="57.28">Appraise &#38; Approve</tspan>
              </text>
              <text id="2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="648.406" y="113.28">2</tspan>
              </text>
            </g>
            <g id="Connectors_2">
              <path id="Rectangle 26" d="M657 276V372C657 377.523 661.477 382 667 382H690" stroke="#E4882E" />
              <path id="Rectangle 30" d="M657 438V560C657 565.523 661.477 570 667 570H683" stroke="#E4882E" />
              <path id="Rectangle 31" d="M657 335V466C657 471.523 661.477 476 667 476H690" stroke="#E4882E" />
              <path id="Rectangle 7" d="M657 139V184C657 189.523 661.477 194 667 194H690" stroke="#E4882E" />
              <path id="Rectangle 8" d="M657 176V278C657 283.523 661.477 288 667 288H690" stroke="#E4882E" />
            </g>
            <g id="RPD SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_13" filter="url(#filter11_d_87_410)">
                <rect x="690" y="176" width="234" height="64" rx="6" fill="white" />
                <rect x="690.5" y="176.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Regional Programme Document (RPD)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="710" y="202.22">Regional Programme </tspan>
                <tspan x="710" y="224.22">Document (RPD)</tspan>
              </text>
              <circle id="Ellipse 12_12" cx="690.5" cy="193.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_12" cx="690.5" cy="193.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="CPD UNDOCS" opacity={(UNDocs || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_14" filter="url(#filter12_d_87_410)">
                <rect x="690" y="270" width="234" height="64" rx="6" fill="white" />
                <rect x="690.5" y="270.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Country Programme Document (CPD)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="710" y="296.22">Country Programme </tspan>
                <tspan x="710" y="318.22">Document (CPD)</tspan>
              </text>
              <circle id="Ellipse 12_13" cx="690.5" cy="287.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_13" cx="690.5" cy="287.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="IPACP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PAC") !== -1 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_15" filter="url(#filter13_d_87_410)">
                <rect x="690" y="364" width="234" height="64" rx="6" fill="white" />
                <rect x="690.5" y="364.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="IPAC of programme Theory of Change" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="710" y="390.22">IPAC of programme </tspan>
                <tspan x="710" y="412.22">Theory of Change</tspan>
              </text>
              <circle id="Ellipse 12_14" cx="690.5" cy="381.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_14" cx="690.5" cy="381.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="COPBCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_16" filter="url(#filter14_d_87_410)">
                <rect x="690" y="458" width="234" height="64" rx="6" fill="white" />
                <rect x="690.5" y="458.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="CO Performance-Based Capacity Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="710" y="484.22">CO Performance-Based </tspan>
                <tspan x="710" y="506.22">Capacity Assessment</tspan>
              </text>
              <circle id="Ellipse 12_15" cx="690.5" cy="475.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_15" cx="690.5" cy="475.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="ACF Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PACr") !== -1 || roles.indexOf("OPG") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_17" filter="url(#filter15_d_87_410)">
                <rect x="690" y="552" width="234" height="86" rx="6" fill="white" />
                <rect x="690.5" y="552.5" width="233" height="85" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Appraisal of Cooperation Framework/CPD/RPD" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="710" y="578.22">Appraisal of </tspan>
                <tspan x="710" y="600.22">Cooperation </tspan>
                <tspan x="710" y="622.22">Framework/CPD/RPD</tspan>
              </text>
              <circle id="Ellipse 12_16" cx="690.5" cy="569.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_16" cx="690.5" cy="569.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="AnnualPlanning" opacity={selectedHeader === 'AnnualPlanning' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_3" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'AnnualPlanning' ? setSelectedHeader('AnnualPlanning') : setSelectedHeader(null)}}>
              <circle id="Ellipse 5" cx="1192" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Annual Planning" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1157" y="57.28">Annual Planning</tspan>
              </text>
              <text id="3" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1182.61" y="113.28">3</tspan>
              </text>
            </g>
            <g id="Connectors_3">
              <path id="Rectangle 34" d="M1192 139V184C1192 189.523 1196.48 194 1202 194H1225" stroke="#56ACC3" />
              <path id="Rectangle 38" d="M1192 146V278C1192 283.523 1196.48 288 1202 288H1225" stroke="#56ACC3" />
            </g>
            <g id="IWP SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_18" filter="url(#filter16_d_87_410)">
                <rect x="1225" y="176" width="234" height="64" rx="6" fill="white" />
                <rect x="1225.5" y="176.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Integrated Workplan (IWP)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1245" y="202.22">Integrated Workplan </tspan>
                <tspan x="1245" y="224.22">(IWP)</tspan>
              </text>
              <circle id="Ellipse 12_17" cx="1225.5" cy="193.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_17" cx="1225.5" cy="193.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="PP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Procurement") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_19" filter="url(#filter17_d_87_410)">
                <rect x="1225" y="270" width="234" height="42" rx="6" fill="white" />
                <rect x="1225.5" y="270.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Procurement Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1245" y="296.22">Procurement Plan</tspan>
              </text>
              <circle id="Ellipse 12_18" cx="1225.5" cy="287.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_18" cx="1225.5" cy="287.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="Monitor" opacity={selectedHeader === 'Monitor' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_4" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Monitor' ? setSelectedHeader('Monitor') : setSelectedHeader(null)}}>
              <circle id="Ellipse 7" cx="1682" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Monitor_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1647" y="57.28">Monitor</tspan>
              </text>
              <text id="4" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1672.45" y="113.28">4</tspan>
              </text>
            </g>
            <g id="Connectors_4">
              <path id="Rectangle 45" d="M1682 139V184C1682 189.523 1686.48 194 1692 194H1715" stroke="#56ACC3" />
              <path id="Rectangle 46" d="M1682 250V372C1682 377.523 1686.48 382 1692 382H1715" stroke="#56ACC3" />
              <path id="Rectangle 47" d="M1682 322V444C1682 449.523 1686.48 454 1692 454H1715" stroke="#56ACC3" />
              <path id="Rectangle 48" d="M1682 290V516C1682 521.523 1686.48 526 1692 526H1715" stroke="#56ACC3" />
              <path id="Rectangle 49" d="M1682 280V610C1682 615.523 1686.48 620 1692 620H1715" stroke="#56ACC3" />
              <path id="Rectangle 50" d="M1682 146V278C1682 283.523 1686.48 288 1692 288H1715" stroke="#56ACC3" />
            </g>
            <g id="DCII Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("M&E Officer") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_20" filter="url(#filter18_d_87_410)">
                <rect x="1715" y="176" width="234" height="64" rx="6" fill="white" />
                <rect x="1715.5" y="176.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Data for CPD/RPD Indicators and IRRF" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1735" y="202.22">Data for CPD/RPD </tspan>
                <tspan x="1735" y="224.22">Indicators and IRRF</tspan>
              </text>
              <circle id="Ellipse 12_19" cx="1715.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_19" cx="1715.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="IFRP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_21" filter="url(#filter19_d_87_410)">
                <rect x="1715" y="270" width="234" height="64" rx="6" fill="white" />
                <rect x="1715.5" y="270.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Identification of Factors Related to Progress" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1735" y="296.22">Identification of Factors </tspan>
                <tspan x="1735" y="318.22">Related to Progress</tspan>
              </text>
              <circle id="Ellipse 12_20" cx="1715.5" cy="287.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_20" cx="1715.5" cy="287.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="QA SharePoinr" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_22" filter="url(#filter20_d_87_410)">
                <rect x="1715" y="364" width="234" height="42" rx="6" fill="white" />
                <rect x="1715.5" y="364.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Quality Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1735" y="390.22">Quality Assessment</tspan>
              </text>
              <circle id="Ellipse 12_21" cx="1715.5" cy="381.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_21" cx="1715.5" cy="381.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="RA PowerBI" opacity={(powerBi || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_23" filter="url(#filter21_d_87_410)">
                <rect x="1715" y="436" width="234" height="42" rx="6" fill="white" />
                <rect x="1715.5" y="436.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Risk Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1735" y="462.22">Risk Assessment</tspan>
              </text>
              <circle id="Ellipse 12_22" cx="1715.5" cy="453.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_22" cx="1715.5" cy="453.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="OPM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_24" filter="url(#filter22_d_87_410)">
                <rect x="1715" y="508" width="234" height="64" rx="6" fill="white" />
                <rect x="1715.5" y="508.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Operational Performance Monitoring" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1735" y="534.22">Operational </tspan>
                <tspan x="1735" y="556.22">Performance Monitoring</tspan>
              </text>
              <circle id="Ellipse 12_23" cx="1715.5" cy="525.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_23" cx="1715.5" cy="525.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="LLD Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_25" filter="url(#filter23_d_87_410)">
                <rect x="1715" y="602" width="234" height="64" rx="6" fill="white" />
                <rect x="1715.5" y="602.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Lessons Learned Document" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1735" y="628.22">Lessons Learned </tspan>
                <tspan x="1735" y="650.22">Document</tspan>
              </text>
              <circle id="Ellipse 12_24" cx="1715.5" cy="619.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_24" cx="1715.5" cy="619.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="Oversight" opacity={selectedHeader === 'Oversight' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_5" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Oversight' ? setSelectedHeader('Oversight') : setSelectedHeader(null)}}>
              <circle id="Ellipse 8" cx="2168" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Oversight_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2133" y="57.28">Oversight</tspan>
              </text>
              <text id="5" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2158.27" y="113.28">5</tspan>
              </text>
            </g>
            <g id="Connectors_5">
              <path id="Rectangle 51" d="M2168 139V184C2168 189.523 2172.48 194 2178 194H2201" stroke="#56ACC3" />
              <path id="Rectangle 66" d="M2168 149V278C2168 283.523 2172.48 288 2178 288H2194" stroke="#56ACC3" />
              <path id="Rectangle 67" d="M2168 243V372C2168 377.523 2172.48 382 2178 382H2194" stroke="#56ACC3" />
              <path id="Rectangle 68" d="M2168 229V466C2168 471.523 2172.48 476 2178 476H2194" stroke="#56ACC3" />
            </g>
            <g id="MPB Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Board") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_26" filter="url(#filter24_d_87_410)">
                <rect x="2201" y="176" width="234" height="64" rx="6" fill="white" />
                <rect x="2201.5" y="176.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Minutes Programme Board" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2221" y="202.22">Minutes Programme </tspan>
                <tspan x="2221" y="224.22">Board</tspan>
              </text>
              <circle id="Ellipse 12_25" cx="2201.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_25" cx="2201.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PSN Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_27" filter="url(#filter25_d_87_410)">
                <rect x="2201" y="270" width="234" height="64" rx="6" fill="white" />
                <rect x="2201.5" y="270.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Programme Suspension Note" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2221" y="296.22">Programme Suspension </tspan>
                <tspan x="2221" y="318.22">Note</tspan>
              </text>
              <circle id="Ellipse 12_26" cx="2201.5" cy="287.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_26" cx="2201.5" cy="287.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PEL Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_28" filter="url(#filter26_d_87_410)">
                <rect x="2201" y="364" width="234" height="64" rx="6" fill="white" />
                <rect x="2201.5" y="364.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Programme Extension Letter" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2221" y="390.22">Programme Extension </tspan>
                <tspan x="2221" y="412.22">Letter</tspan>
              </text>
              <circle id="Ellipse 12_27" cx="2201.5" cy="381.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_27" cx="2201.5" cy="381.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_29" filter="url(#filter27_d_87_410)">
                <rect x="2201" y="458" width="234" height="64" rx="6" fill="white" />
                <rect x="2201.5" y="458.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Programme Ammendments" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2221" y="484.22">Programme </tspan>
                <tspan x="2221" y="506.22">Ammendments</tspan>
              </text>
              <circle id="Ellipse 12_28" cx="2201.5" cy="475.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_28" cx="2201.5" cy="475.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="Report" opacity={selectedHeader === 'Report' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_6" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Report' ? setSelectedHeader('Report') : setSelectedHeader(null)}}>
              <circle id="Ellipse 10" cx="2654" cy="104" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Report_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2619" y="57.28">Report</tspan>
              </text>
              <text id="6" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2644.27" y="113.28">6</tspan>
              </text>
            </g>
            <g id="Connectors_6">
              <path id="Rectangle 55" d="M2654 139V184C2654 189.523 2658.48 194 2664 194H2687" stroke="#56ACC3" />
              <path id="Rectangle 58" d="M2654 139V256C2654 261.523 2658.48 266 2664 266H2687" stroke="#56ACC3" />
            </g>
            <g id="OUCR UNINFO" opacity={(unInfo || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_30" filter="url(#filter28_d_87_410)">
                <rect x="2687" y="176" width="234" height="42" rx="6" fill="white" />
                <rect x="2687.5" y="176.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="One UN Country Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2707" y="202.22">One UN Country Report</tspan>
              </text>
              <circle id="Ellipse 12_29" cx="2687.5" cy="193.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_29" cx="2687.5" cy="193.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="ROAR SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_31" filter="url(#filter29_d_87_410)">
                <rect x="2687" y="248" width="234" height="42" rx="6" fill="white" />
                <rect x="2687.5" y="248.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="ROAR" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2707" y="274.22">ROAR</tspan>
              </text>
              <circle id="Ellipse 12_30" cx="2687.5" cy="265.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_30" cx="2687.5" cy="265.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
          <g id="ProgrammeTransition" opacity={selectedHeader === 'ProgrammeTransition' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_7" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'ProgrammeTransition' ? setSelectedHeader('ProgrammeTransition') : setSelectedHeader(null)}}>
              <circle id="Ellipse 11" cx="35" cy="1242" r="31" fill="white" stroke="#BCBEC0" strokeWidth="8" />
              <text id="Programme Transition" fill="#BCBEC0" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="35" y="1470.28">Programme Transition</tspan>
              </text>
              <text id="10" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="18.5" y="1251.28">10</tspan>
              </text>
            </g>
            <path id="Rectangle 62" d="M70 1242L100.872 1242C106.395 1242 110.872 1246.48 110.872 1252L110.872 1283C110.872 1288.52 115.349 1293 120.872 1293L124 1293" stroke="#BCBEC0" />
            <g id="ICPE ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("IEO") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_32" filter="url(#filter30_d_87_410)">
                <rect x="131" y="1275" width="284" height="64" rx="6" fill="white" />
                <rect x="131.5" y="1275.5" width="283" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Independent Country Programme Evaluaitons (ICPE)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1301.22">Independent Country </tspan>
                <tspan x="151" y="1323.22">Programme Evaluaitons (ICPE)</tspan>
              </text>
              <circle id="Ellipse 12_31" cx="131.5" cy="1292.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_31" cx="131.5" cy="1292.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_87_410" x="129" y="161" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter1_d_87_410" x="129" y="233" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter2_d_87_410" x="129" y="327" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter3_d_87_410" x="129" y="399" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter4_d_87_410" x="129" y="493" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter5_d_87_410" x="129" y="587" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter6_d_87_410" x="129" y="659" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter7_d_87_410" x="129" y="731" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter8_d_87_410" x="129" y="825" width="264" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter9_d_87_410" x="129" y="941" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter10_d_87_410" x="129" y="1035" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter11_d_87_410" x="675" y="161" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter12_d_87_410" x="675" y="255" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter13_d_87_410" x="675" y="349" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter14_d_87_410" x="675" y="443" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter15_d_87_410" x="675" y="537" width="264" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter16_d_87_410" x="1210" y="161" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter17_d_87_410" x="1210" y="255" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter18_d_87_410" x="1700" y="161" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter19_d_87_410" x="1700" y="255" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter20_d_87_410" x="1700" y="349" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter21_d_87_410" x="1700" y="421" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter22_d_87_410" x="1700" y="493" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter23_d_87_410" x="1700" y="587" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter24_d_87_410" x="2186" y="161" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter25_d_87_410" x="2186" y="255" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter26_d_87_410" x="2186" y="349" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter27_d_87_410" x="2186" y="443" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter28_d_87_410" x="2672" y="161" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter29_d_87_410" x="2672" y="233" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
          <filter id="filter30_d_87_410" x="116" y="1260" width="314" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_410" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_410" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_410" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
)}