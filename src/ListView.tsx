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
      <svg width="100%" height="100%" style={{padding:"50px 20px 20px 20px"}} viewBox="0 0 1513 827"  fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
        <g id="Group 83"ref={mapG}>
          <g id="Group 81">
            <text id="Online Assets (10 out of 31)" fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" font-weight="bold" letterSpacing="0em">
              <tspan x="8" y="638.28">Online Assets (10 out of 31)</tspan>
            </text>
            <g id="Group 80">
              <g id="RPD SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6" filter="url(#filter0_d_67_438)">
                  <rect x="15" y="660" width="339" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="660.5" width="338" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Regional Programme Document (RPD) SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="684.22">Regional Programme Document (RPD)&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="712.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12" cx="15.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13" cx="15.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="CPD UNDOCS" opacity={(UNDocs || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_2" filter="url(#filter1_d_67_438)">
                  <rect x="381" y="660" width="334" height="66" rx="6" fill="white" />
                  <rect x="381.5" y="660.5" width="333" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Country Programme Document (CPD) UNDOCS">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="401" y="684.22">Country Programme Document (CPD)&#10;</tspan>
                  </text>
                  <text fill="#0078D4" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="401" y="712.22">UNDOCS</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_2" cx="381.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_2" cx="381.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="CF UNSDGWebsite" opacity={(website || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_3" filter="url(#filter2_d_67_438)">
                  <rect x="742" y="660" width="232" height="66" rx="6" fill="white" />
                  <rect x="742.5" y="660.5" width="231" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Cooperation Framework UNSDG Website">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="762" y="684.22">Cooperation Framework&#10;</tspan>
                  </text>
                  <text fill="#0078D4" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="762" y="712.22">UNSDG Website</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_3" cx="742.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_3" cx="742.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="EP ERC" opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_4" filter="url(#filter3_d_67_438)">
                  <rect x="1001" y="660" width="161" height="66" rx="6" fill="white" />
                  <rect x="1001.5" y="660.5" width="160" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Evaluation Plan ERC">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1021" y="684.22">Evaluation Plan&#10;</tspan>
                  </text>
                  <text fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1021" y="712.22">ERC</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_4" cx="1001.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_4" cx="1001.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="IWP SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_5" filter="url(#filter4_d_67_438)">
                  <rect x="1189" y="660" width="245" height="66" rx="6" fill="white" />
                  <rect x="1189.5" y="660.5" width="244" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Integrated Workplan (IWP) SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1209" y="684.22">Integrated Workplan (IWP)&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1209" y="712.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_5" cx="1189.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_5" cx="1189.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="QA SharePoinr" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_6" filter="url(#filter5_d_67_438)">
                  <rect x="15" y="746" width="196" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="746.5" width="195" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Quality Assessment SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="770.22">Quality Assessment&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="798.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_6" cx="15.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_6" cx="15.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="RA PowerBI" opacity={(powerBi || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_7" filter="url(#filter6_d_67_438)">
                  <rect x="238" y="746" width="173" height="66" rx="6" fill="white" />
                  <rect x="238.5" y="746.5" width="172" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Risk Assessment PowerBi">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="258" y="770.22">Risk Assessment&#10;</tspan>
                  </text>
                  <text fill="#F1C911" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="258" y="798.22">PowerBi</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_7" cx="238.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_7" cx="238.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="OUCR UNINFO" opacity={(unInfo || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_8" filter="url(#filter7_d_67_438)">
                  <rect x="438" y="746" width="228" height="66" rx="6" fill="white" />
                  <rect x="438.5" y="746.5" width="227" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="One UN Country Report UNINFO">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="458" y="770.22">One UN Country Report&#10;</tspan>
                  </text>
                  <text fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="458" y="798.22">UNINFO</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_8" cx="438.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_8" cx="438.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ROAR SharePoint" opacity={(sharePoint || (all && !online)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_9" filter="url(#filter8_d_67_438)">
                  <rect x="693" y="746" width="127" height="66" rx="6" fill="white" />
                  <rect x="693.5" y="746.5" width="126" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="ROAR SharePoint_2">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="713" y="770.22">ROAR&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="713" y="798.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_9" cx="693.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_9" cx="693.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ICPE ERC"opacity={(erc || (all && !online)) && (roles.length === 0 || roles.indexOf("IEO") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_10" filter="url(#filter9_d_67_438)">
                  <rect x="847" y="746" width="450" height="66" rx="6" fill="white" />
                  <rect x="847.5" y="746.5" width="449" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Independent Country Programme Evaluaitons (ICPE) ERC">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="867" y="770.22">Independent Country Programme Evaluaitons (ICPE)&#10;</tspan>
                  </text>
                  <text fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="867" y="798.22">ERC</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_10" cx="847.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_10" cx="847.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
            </g>
          </g>
          <g id="Group 82">
            <text id="Offline Assets (21 out of 31)" fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" font-weight="bold" letterSpacing="0em">
              <tspan x="8" y="25.28">Offline Assets (21 out of 31)</tspan>
            </text>
            <g id="TOC Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RBx") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_11" filter="url(#filter10_d_67_438)">
                <rect x="392" y="47" width="227" height="66" rx="6" fill="white" />
                <rect x="392.5" y="47.5" width="226" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Theory of Change (ToC) Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="412" y="71.22">Theory of Change (ToC)&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="412" y="99.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_11" cx="392.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_11" cx="392.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="CPAP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_12" filter="url(#filter11_d_67_438)">
                <rect x="15" y="47" width="350" height="66" rx="6" fill="white" />
                <rect x="15.5" y="47.5" width="349" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Country Programme Action Plan (CPAP) Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="71.22">Country Programme Action Plan (CPAP)&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="35" y="99.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_12" cx="15.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_12" cx="15.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="UNSDGR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_13" filter="url(#filter12_d_67_438)">
                <rect x="646" y="47" width="181" height="66" rx="6" fill="white" />
                <rect x="646.5" y="47.5" width="180" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="UNSDG Roadmap Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="666" y="71.22">UNSDG Roadmap&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="666" y="99.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_13" cx="646.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_13" cx="646.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="UNSDGCCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_14" filter="url(#filter13_d_67_438)">
                <rect x="854" y="47" width="345" height="66" rx="6" fill="white" />
                <rect x="854.5" y="47.5" width="344" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="UNSDG Common Country Assessment Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="874" y="71.22">UNSDG Common Country Assessment&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="874" y="99.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_14" cx="854.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_14" cx="854.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="CLMAHACT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_15" filter="url(#filter14_d_67_438)">
                <rect x="15" y="133" width="371" height="66" rx="6" fill="white" />
                <rect x="15.5" y="133.5" width="370" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Country-level Macro Assessment of HACT Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="157.22">Country-level Macro Assessment of HACT&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="35" y="185.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_15" cx="15.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_15" cx="15.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="RMT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_16" filter="url(#filter15_d_67_438)">
                <rect x="413" y="133" width="318" height="66" rx="6" fill="white" />
                <rect x="413.5" y="133.5" width="317" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Resource Mobilization Target (RMT) Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="433" y="157.22">Resource Mobilization Target (RMT) &#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="433" y="185.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_16" cx="413.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_16" cx="413.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PCS Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_17" filter="url(#filter16_d_67_438)">
                <rect x="758" y="133" width="371" height="66" rx="6" fill="white" />
                <rect x="758.5" y="133.5" width="370" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Partnership and Communications Strategy Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="778" y="157.22">Partnership and Communications Strategy&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="778" y="185.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_17" cx="758.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_17" cx="758.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_18" filter="url(#filter17_d_67_438)">
                <rect x="1156" y="133" width="309" height="66" rx="6" fill="white" />
                <rect x="1156.5" y="133.5" width="308" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Programme Criticality Assessment Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1176" y="157.22">Programme Criticality Assessment&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="1176" y="185.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_18" cx="1156.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_18" cx="1156.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="JRGWP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Joint Results Group") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_19" filter="url(#filter18_d_67_438)">
                <rect x="15" y="219" width="286" height="66" rx="6" fill="white" />
                <rect x="15.5" y="219.5" width="285" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Joint Results Group Work Plans Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="243.22">Joint Results Group Work Plans&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="35" y="271.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_19" cx="15.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_19" cx="15.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="COPBCA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_20" filter="url(#filter19_d_67_438)">
                <rect x="930" y="219" width="400" height="66" rx="6" fill="white" />
                <rect x="930.5" y="219.5" width="399" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="CO Performance-Based Capacity Assessment Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="950" y="243.22">CO Performance-Based Capacity Assessment&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="950" y="271.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_20" cx="930.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_20" cx="930.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="IPACP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PAC") !== -1 || roles.indexOf("RBx Director") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_21" filter="url(#filter20_d_67_438)">
                <rect x="328" y="219" width="576" height="66" rx="6" fill="white" />
                <rect x="328.5" y="219.5" width="575" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Integrated Programme Assessment Committee (IPAC) of programme Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="348" y="243.22">Integrated Programme Assessment Committee (IPAC) of programme&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="348" y="271.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_21" cx="328.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_21" cx="328.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="ACF Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("PACr") !== -1 || roles.indexOf("OPG") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_22" filter="url(#filter21_d_67_438)">
                <rect x="15" y="305" width="387" height="66" rx="6" fill="white" />
                <rect x="15.5" y="305.5" width="386" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Appraise Cooperation Framework/CPD/RPD Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="329.22">Appraise Cooperation Framework/CPD/RPD&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="35" y="357.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_22" cx="15.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_22" cx="15.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Procurement") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_23" filter="url(#filter22_d_67_438)">
                <rect x="429" y="305" width="215" height="66" rx="6" fill="white" />
                <rect x="429.5" y="305.5" width="214" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Procurement Planning Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="449" y="329.22">Procurement Planning&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="449" y="357.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_23" cx="429.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_23" cx="429.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="DCII Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("M&E Officer") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_24" filter="url(#filter23_d_67_438)">
                <rect x="671" y="305" width="339" height="66" rx="6" fill="white" />
                <rect x="671.5" y="305.5" width="338" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Data for CPD/RPD Indicators and IRRF Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="691" y="329.22">Data for CPD/RPD Indicators and IRRF&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="691" y="357.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_24" cx="671.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_24" cx="671.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="IFRP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_25" filter="url(#filter24_d_67_438)">
                <rect x="1037" y="305" width="320" height="66" rx="6" fill="white" />
                <rect x="1037.5" y="305.5" width="319" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Identify Factors Related to Progress Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1057" y="329.22">Identify Factors Related to Progress&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="1057" y="357.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_25" cx="1037.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_25" cx="1037.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="OPM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_26" filter="url(#filter25_d_67_438)">
                <rect x="15" y="391" width="328" height="66" rx="6" fill="white" />
                <rect x="15.5" y="391.5" width="327" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Operational Performance Monitoring Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="415.22">Operational Performance Monitoring&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="35" y="443.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_26" cx="15.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_26" cx="15.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="LLD Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_27" filter="url(#filter26_d_67_438)">
                <rect x="370" y="391" width="260" height="66" rx="6" fill="white" />
                <rect x="370.5" y="391.5" width="259" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Lessons Learned Document Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="390" y="415.22">Lessons Learned Document&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="390" y="443.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_27" cx="370.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_27" cx="370.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="MPB Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Board") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_28" filter="url(#filter27_d_67_438)">
                <rect x="657" y="391" width="251" height="66" rx="6" fill="white" />
                <rect x="657.5" y="391.5" width="250" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Minutes Programme Board Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="677" y="415.22">Minutes Programme Board&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="677" y="443.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_28" cx="657.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_28" cx="657.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PSN Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_29" filter="url(#filter28_d_67_438)">
                <rect x="935" y="391" width="272" height="66" rx="6" fill="white" />
                <rect x="935.5" y="391.5" width="271" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Programme Suspension Note Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="955" y="415.22">Programme Suspension Note&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="955" y="443.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_29" cx="935.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_29" cx="935.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PEL Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("RBx") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_30" filter="url(#filter29_d_67_438)">
                <rect x="1234" y="391" width="264" height="66" rx="6" fill="white" />
                <rect x="1234.5" y="391.5" width="263" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Programme Extension Letter Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1254" y="415.22">Programme Extension Letter&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="1254" y="443.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_30" cx="1234.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_30" cx="1234.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
            <g id="PA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_31" filter="url(#filter30_d_67_438)">
                <rect x="15" y="477" width="257" height="66" rx="6" fill="white" />
                <rect x="15.5" y="477.5" width="256" height="65" rx="5.5" stroke="#D52B1E" />
              </g>
              <g id="Programme Ammendments Offline">
                <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="501.22">Programme Ammendments&#10;</tspan>
                </text>
                <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                  <tspan x="35" y="529.22">Offline</tspan>
                </text>
              </g>
              <circle id="Ellipse 12_31" cx="15.5" cy="494.5" r="7" fill="white" stroke="#D52B1E" />
              <circle id="Ellipse 13_31" cx="15.5" cy="494.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_67_438" x="0" y="645" width="369" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter1_d_67_438" x="366" y="645" width="364" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter2_d_67_438" x="727" y="645" width="262" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter3_d_67_438" x="986" y="645" width="191" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter4_d_67_438" x="1174" y="645" width="275" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter5_d_67_438" x="0" y="731" width="226" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter6_d_67_438" x="223" y="731" width="203" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter7_d_67_438" x="423" y="731" width="258" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter8_d_67_438" x="678" y="731" width="157" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter9_d_67_438" x="832" y="731" width="480" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter10_d_67_438" x="377" y="32" width="257" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter11_d_67_438" x="0" y="32" width="380" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter12_d_67_438" x="631" y="32" width="211" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter13_d_67_438" x="839" y="32" width="375" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter14_d_67_438" x="0" y="118" width="401" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter15_d_67_438" x="398" y="118" width="348" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter16_d_67_438" x="743" y="118" width="401" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter17_d_67_438" x="1141" y="118" width="339" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter18_d_67_438" x="0" y="204" width="316" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter19_d_67_438" x="915" y="204" width="430" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter20_d_67_438" x="313" y="204" width="606" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter21_d_67_438" x="0" y="290" width="417" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter22_d_67_438" x="414" y="290" width="245" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter23_d_67_438" x="656" y="290" width="369" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter24_d_67_438" x="1022" y="290" width="350" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter25_d_67_438" x="0" y="376" width="358" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter26_d_67_438" x="355" y="376" width="290" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter27_d_67_438" x="642" y="376" width="281" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter28_d_67_438" x="920" y="376" width="302" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter29_d_67_438" x="1219" y="376" width="294" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
          <filter id="filter30_d_67_438" x="0" y="462" width="287" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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