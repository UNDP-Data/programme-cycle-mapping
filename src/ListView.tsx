import { useRef, useEffect } from "react";
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

export const ListView = (props: Props) => {
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
    <div style={{width: "calc(100% - 40px)", height: "calc(100vh - 195px)"}}>
      <svg width="100%" height="100%" style={{padding:"50px 20px 20px 20px"}} viewBox="0 0 1513 625"  fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
        <g id="Group 83"ref={mapG}>
          <g id="Group 81">
            <text id="Assets Available Organization Wide (10 out of 31)" fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="8" y="479.28">Assets Available Organization Wide (10 out of 31)</tspan>
            </text>
            <g id="Group 80">
              <g id="RPD SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6" filter="url(#filter0_d_67_438)">
                  <rect x="15" y="506" width="339" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="506.5" width="338" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Regional Programme Document (RPD)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="532.22">Regional Programme Document (RPD)</tspan>
                </text>
                <circle id="Ellipse 12" cx="15.5" cy="523.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13" cx="15.5" cy="523.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="CPD UNDOCS" opacity={(UNDocs || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_2" filter="url(#filter1_d_67_438)">
                  <rect x="381" y="506" width="334" height="42" rx="6" fill="white" />
                  <rect x="381.5" y="506.5" width="333" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Country Programme Document (CPD)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="401" y="532.22">Country Programme Document (CPD)</tspan>
                </text>
                <circle id="Ellipse 12_2" cx="381.5" cy="523.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_2" cx="381.5" cy="523.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="CF UNSDGWebsite" opacity={(website || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_3" filter="url(#filter2_d_67_438)">
                  <rect x="742" y="506" width="232" height="42" rx="6" fill="white" />
                  <rect x="742.5" y="506.5" width="231" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Cooperation Framework" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="762" y="532.22">Cooperation Framework</tspan>
                </text>
                <circle id="Ellipse 12_3" cx="742.5" cy="523.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_3" cx="742.5" cy="523.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="EP ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_4" filter="url(#filter3_d_67_438)">
                  <rect x="1001" y="506" width="161" height="42" rx="6" fill="white" />
                  <rect x="1001.5" y="506.5" width="160" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Evaluation Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1021" y="532.22">Evaluation Plan</tspan>
                </text>
                <circle id="Ellipse 12_4" cx="1001.5" cy="523.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_4" cx="1001.5" cy="523.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="IWP SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_5" filter="url(#filter4_d_67_438)">
                  <rect x="1189" y="506" width="245" height="42" rx="6" fill="white" />
                  <rect x="1189.5" y="506.5" width="244" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Integrated Workplan (IWP)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1209" y="532.22">Integrated Workplan (IWP)</tspan>
                </text>
                <circle id="Ellipse 12_5" cx="1189.5" cy="523.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_5" cx="1189.5" cy="523.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="QA SharePoinr" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_6" filter="url(#filter5_d_67_438)">
                  <rect x="15" y="568" width="196" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="568.5" width="195" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Quality Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="594.22">Quality Assessment</tspan>
                </text>
                <circle id="Ellipse 12_6" cx="15.5" cy="585.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_6" cx="15.5" cy="585.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="RA PowerBI" opacity={(powerBi || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_7" filter="url(#filter6_d_67_438)">
                  <rect x="238" y="568" width="173" height="42" rx="6" fill="white" />
                  <rect x="238.5" y="568.5" width="172" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Risk Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="258" y="594.22">Risk Assessment</tspan>
                </text>
                <circle id="Ellipse 12_7" cx="238.5" cy="585.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_7" cx="238.5" cy="585.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="OUCR UNINFO" opacity={(unInfo || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_8" filter="url(#filter7_d_67_438)">
                  <rect x="438" y="568" width="228" height="42" rx="6" fill="white" />
                  <rect x="438.5" y="568.5" width="227" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="One UN Country Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="458" y="594.22">One UN Country Report</tspan>
                </text>
                <circle id="Ellipse 12_8" cx="438.5" cy="585.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_8" cx="438.5" cy="585.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ROAR SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_9" filter="url(#filter8_d_67_438)">
                  <rect x="693" y="568" width="87" height="42" rx="6" fill="white" />
                  <rect x="693.5" y="568.5" width="86" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="ROAR" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="713" y="594.22">ROAR</tspan>
                </text>
                <circle id="Ellipse 12_9" cx="693.5" cy="585.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_9" cx="693.5" cy="585.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ICPE ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("IEO") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_10" filter="url(#filter9_d_67_438)">
                  <rect x="807" y="568" width="450" height="42" rx="6" fill="white" />
                  <rect x="807.5" y="568.5" width="449" height="41" rx="5.5" stroke="#0F8B79" />
                </g>
                <text id="Independent Country Programme Evaluaitons (ICPE)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="827" y="594.22">Independent Country Programme Evaluaitons (ICPE)</tspan>
                </text>
                <circle id="Ellipse 12_10" cx="807.5" cy="585.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_10" cx="807.5" cy="585.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
            </g>
          </g>
          <g id="Group 82">
            <text id="Assets Not Available Organization Wide (21 out of 31)" fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="8" y="25.28">Assets Not Available Organization Wide (21 out of 31)</tspan>
            </text>
            <g id="TOC Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RBx") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_11" filter="url(#filter10_d_67_438)">
                <rect x="392" y="52" width="227" height="42" rx="6" fill="white" />
                <rect x="392.5" y="52.5" width="226" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Theory of Change (ToC)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="412" y="78.22">Theory of Change (ToC)</tspan>
              </text>
              <circle id="Ellipse 12_11" cx="392.5" cy="69.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_11" cx="392.5" cy="69.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="CPAP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_12" filter="url(#filter11_d_67_438)">
                <rect x="15" y="52" width="350" height="42" rx="6" fill="white" />
                <rect x="15.5" y="52.5" width="349" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Country Programme Action Plan (CPAP" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="35" y="78.22">Country Programme Action Plan (CPAP</tspan>
              </text>
              <circle id="Ellipse 12_12" cx="15.5" cy="69.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_12" cx="15.5" cy="69.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="UNSDGR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_13" filter="url(#filter12_d_67_438)">
                <rect x="646" y="52" width="181" height="42" rx="6" fill="white" />
                <rect x="646.5" y="52.5" width="180" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="UNSDG Roadmap" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="666" y="78.22">UNSDG Roadmap</tspan>
              </text>
              <circle id="Ellipse 12_13" cx="646.5" cy="69.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_13" cx="646.5" cy="69.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="UNSDGCCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_14" filter="url(#filter13_d_67_438)">
                <rect x="854" y="52" width="345" height="42" rx="6" fill="white" />
                <rect x="854.5" y="52.5" width="344" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="UNSDG Common Country Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="874" y="78.22">UNSDG Common Country Assessment</tspan>
              </text>
              <circle id="Ellipse 12_14" cx="854.5" cy="69.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_14" cx="854.5" cy="69.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="CLMAHACT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_15" filter="url(#filter14_d_67_438)">
                <rect x="15" y="114" width="371" height="42" rx="6" fill="white" />
                <rect x="15.5" y="114.5" width="370" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Country-level Macro Assessment of HACT" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="35" y="140.22">Country-level Macro Assessment of HACT</tspan>
              </text>
              <circle id="Ellipse 12_15" cx="15.5" cy="131.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_15" cx="15.5" cy="131.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="RMT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_16" filter="url(#filter15_d_67_438)">
                <rect x="413" y="114" width="318" height="42" rx="6" fill="white" />
                <rect x="413.5" y="114.5" width="317" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Resource Mobilization Target (RMT)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="433" y="140.22">Resource Mobilization Target (RMT) </tspan>
              </text>
              <circle id="Ellipse 12_16" cx="413.5" cy="131.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_16" cx="413.5" cy="131.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PCS Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_17" filter="url(#filter16_d_67_438)">
                <rect x="758" y="114" width="371" height="42" rx="6" fill="white" />
                <rect x="758.5" y="114.5" width="370" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Partnership and Communications Strategy" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="778" y="140.22">Partnership and Communications Strategy</tspan>
              </text>
              <circle id="Ellipse 12_17" cx="758.5" cy="131.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_17" cx="758.5" cy="131.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_18" filter="url(#filter17_d_67_438)">
                <rect x="1156" y="114" width="309" height="42" rx="6" fill="white" />
                <rect x="1156.5" y="114.5" width="308" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Programme Criticality Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1176" y="140.22">Programme Criticality Assessment</tspan>
              </text>
              <circle id="Ellipse 12_18" cx="1156.5" cy="131.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_18" cx="1156.5" cy="131.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="JRGWP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Joint Results Group") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_19" filter="url(#filter18_d_67_438)">
                <rect x="15" y="176" width="286" height="42" rx="6" fill="white" />
                <rect x="15.5" y="176.5" width="285" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Joint Results Group Work Plans" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="35" y="202.22">Joint Results Group Work Plans</tspan>
              </text>
              <circle id="Ellipse 12_19" cx="15.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_19" cx="15.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="COPBCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_20" filter="url(#filter19_d_67_438)">
                <rect x="695" y="176" width="400" height="42" rx="6" fill="white" />
                <rect x="695.5" y="176.5" width="399" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="CO Performance-Based Capacity Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="715" y="202.22">CO Performance-Based Capacity Assessment</tspan>
              </text>
              <circle id="Ellipse 12_20" cx="695.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_20" cx="695.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="IPACP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PAC") !== -1 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_21" filter="url(#filter20_d_67_438)">
                <rect x="328" y="176" width="340" height="42" rx="6" fill="white" />
                <rect x="328.5" y="176.5" width="339" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="IPAC of programme Theory of Change" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="348" y="202.22">IPAC of programme Theory of Change</tspan>
              </text>
              <circle id="Ellipse 12_21" cx="328.5" cy="193.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_21" cx="328.5" cy="193.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="ACF Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PACr") !== -1 || roles.indexOf("OPG") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_22" filter="url(#filter21_d_67_438)">
                <rect x="15" y="238" width="411" height="42" rx="6" fill="white" />
                <rect x="15.5" y="238.5" width="410" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Appraisal of Cooperation Framework/CPD/RPD" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="35" y="264.22">Appraisal of Cooperation Framework/CPD/RPD</tspan>
              </text>
              <circle id="Ellipse 12_22" cx="15.5" cy="255.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_22" cx="15.5" cy="255.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Procurement") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_23" filter="url(#filter22_d_67_438)">
                <rect x="453" y="238" width="181" height="42" rx="6" fill="white" />
                <rect x="453.5" y="238.5" width="180" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Procurement Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="473" y="264.22">Procurement Plan</tspan>
              </text>
              <circle id="Ellipse 12_23" cx="453.5" cy="255.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_23" cx="453.5" cy="255.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="DCII Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("M&E Officer") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_24" filter="url(#filter23_d_67_438)">
                <rect x="671" y="238" width="339" height="42" rx="6" fill="white" />
                <rect x="671.5" y="238.5" width="338" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Data for CPD/RPD Indicators and IRRF" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="691" y="264.22">Data for CPD/RPD Indicators and IRRF</tspan>
              </text>
              <circle id="Ellipse 12_24" cx="671.5" cy="255.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_24" cx="671.5" cy="255.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="IFRP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_25" filter="url(#filter24_d_67_438)">
                <rect x="1037" y="238" width="320" height="42" rx="6" fill="white" />
                <rect x="1037.5" y="238.5" width="319" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Identify Factors Related to Progress" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1057" y="264.22">Identify Factors Related to Progress</tspan>
              </text>
              <circle id="Ellipse 12_25" cx="1037.5" cy="255.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_25" cx="1037.5" cy="255.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="OPM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_26" filter="url(#filter25_d_67_438)">
                <rect x="15" y="300" width="328" height="42" rx="6" fill="white" />
                <rect x="15.5" y="300.5" width="327" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Operational Performance Monitoring" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="35" y="326.22">Operational Performance Monitoring</tspan>
              </text>
              <circle id="Ellipse 12_26" cx="15.5" cy="317.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_26" cx="15.5" cy="317.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="LLD Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_27" filter="url(#filter26_d_67_438)">
                <rect x="370" y="300" width="260" height="42" rx="6" fill="white" />
                <rect x="370.5" y="300.5" width="259" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Lessons Learned Document" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="390" y="326.22">Lessons Learned Document</tspan>
              </text>
              <circle id="Ellipse 12_27" cx="370.5" cy="317.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_27" cx="370.5" cy="317.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="MPB Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Board") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_28" filter="url(#filter27_d_67_438)">
                <rect x="657" y="300" width="251" height="42" rx="6" fill="white" />
                <rect x="657.5" y="300.5" width="250" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Minutes Programme Board" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="677" y="326.22">Minutes Programme Board</tspan>
              </text>
              <circle id="Ellipse 12_28" cx="657.5" cy="317.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_28" cx="657.5" cy="317.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PSN Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_29" filter="url(#filter28_d_67_438)">
                <rect x="935" y="300" width="272" height="42" rx="6" fill="white" />
                <rect x="935.5" y="300.5" width="271" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Programme Suspension Note" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="955" y="326.22">Programme Suspension Note</tspan>
              </text>
              <circle id="Ellipse 12_29" cx="935.5" cy="317.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_29" cx="935.5" cy="317.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PEL Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_30" filter="url(#filter29_d_67_438)">
                <rect x="1234" y="300" width="264" height="42" rx="6" fill="white" />
                <rect x="1234.5" y="300.5" width="263" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Programme Extension Letter" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1254" y="326.22">Programme Extension Letter</tspan>
              </text>
              <circle id="Ellipse 12_30" cx="1234.5" cy="317.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_30" cx="1234.5" cy="317.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_31" filter="url(#filter30_d_67_438)">
                <rect x="15" y="362" width="257" height="42" rx="6" fill="white" />
                <rect x="15.5" y="362.5" width="256" height="41" rx="5.5" stroke="#D52B1E" />
              </g>
              <text id="Programme Ammendments" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="35" y="388.22">Programme Ammendments</tspan>
              </text>
              <circle id="Ellipse 12_31" cx="15.5" cy="379.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_31" cx="15.5" cy="379.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_67_438" x="0" y="491" width="369" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter1_d_67_438" x="366" y="491" width="364" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter2_d_67_438" x="727" y="491" width="262" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter3_d_67_438" x="986" y="491" width="191" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter4_d_67_438" x="1174" y="491" width="275" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter5_d_67_438" x="0" y="553" width="226" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter6_d_67_438" x="223" y="553" width="203" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter7_d_67_438" x="423" y="553" width="258" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter8_d_67_438" x="678" y="553" width="117" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter9_d_67_438" x="792" y="553" width="480" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter10_d_67_438" x="377" y="37" width="257" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter11_d_67_438" x="0" y="37" width="380" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter12_d_67_438" x="631" y="37" width="211" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter13_d_67_438" x="839" y="37" width="375" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter14_d_67_438" x="0" y="99" width="401" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter15_d_67_438" x="398" y="99" width="348" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter16_d_67_438" x="743" y="99" width="401" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter17_d_67_438" x="1141" y="99" width="339" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter18_d_67_438" x="0" y="161" width="316" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter19_d_67_438" x="680" y="161" width="430" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter20_d_67_438" x="313" y="161" width="370" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter21_d_67_438" x="0" y="223" width="441" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter22_d_67_438" x="438" y="223" width="211" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter23_d_67_438" x="656" y="223" width="369" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter24_d_67_438" x="1022" y="223" width="350" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter25_d_67_438" x="0" y="285" width="358" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter26_d_67_438" x="355" y="285" width="290" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter27_d_67_438" x="642" y="285" width="281" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter28_d_67_438" x="920" y="285" width="302" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter29_d_67_438" x="1219" y="285" width="294" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
          <filter id="filter30_d_67_438" x="0" y="347" width="287" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_67_438" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_438" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_438" result="shape" />
          </filter>
        </defs>
      </svg>
  </div>
)}