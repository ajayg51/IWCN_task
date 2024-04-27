const Header = () => {
    return <div class="header">
        <div class="header-content">
            MONTH 1
        </div>
    </div>
}

// const getCellInfoObj = ({ colId, cellId, content }) => {
//     return {
//         colId: colId,
//         cellId: cellId,
//         content: content
//     }
// }

const getCellInfo = (cellIdx) => {
    switch (cellIdx) {
        case "id0":
            return {
                colId: "id",
                content: "0"
            }
        case "id1":
            return {
                colId: "id",
                content: "1"
            }

        case "id2":
            return {
                colId: "id",
                content: "2"
            }

        case "id3":
            return {
                colId: "id",
                content: "3"
            }

        case "id4":
            return {
                colId: "id",
                content: "4"
            }

        case "id5":
            return {
                colId: "id",
                content: "5"
            }

        case "id6":
            return {
                colId: "id",
                content: "6"
            }

        case "id7":
            return {
                colId: "id",
                content: "7"
            }

        case "id8":
            return {
                colId: "id",
                content: "8"
            }

        case "id9":
            return {
                colId: "id",
                content: "9"
            }

        case "id10":
            return {
                colId: "id",
                content: "10"
            }

        case "id11":
            return {
                colId: "id",
                content: "11"
            }

        case "id12":
            return {
                colId: "id",
                content: "12"
            }

        case "id13":
            return {
                colId: "id",
                content: "13"
            }

        case "id14":
            return {
                colId: "id",
                content: "14"
            }

        case "id15":
            return {
                colId: "id",
                content: "15"
            }

        case "id16":
            return {
                colId: "id",
                content: "16"
            }

        case "id17":
            return {
                colId: "id",
                content: "17"
            }


        case "A0":
            return {
                colId: "A",
                cellId: "A0",
                content: "Onboarding Call"
            }
        case "A1":
            return {
                colId: "A",
                cellId: "A1",
                content: "Google Search Console Access"
            }

        case "A2":
            return {
                colId: "A",
                cellId: "A1",
                content: "Google Analytics Access"
            }

        case "A3":
            return {
                colId: "A",
                cellId: "A3",
                content: "Website Access"
            }

        case "A4":
            return {
                colId: "A",
                cellId: "A4",
                content: "Technical Audit"
            }

        case "A5":
            return {
                colId: "A",
                cellId: "A5",
                content: "Anchor Text and Semantic Analysis"
            }


        case "A6":
            return {
                colId: "A",
                cellId: "A6",
                content: "Competitor Analysis"
            }



        case "A7":
            return {
                colId: "A",
                cellId: "A7",
                content: "Anchor Text/URL Mapping"
            }


        case "A8":
            return {
                colId: "A",
                cellId: "A8",
                content: "Google Data Studio Report + Local Reporting Suite"
            }



        case "A9":
            return {
                colId: "A",
                cellId: "A9",
                content: "Site Level Optimization"
            }


        case "A10":
            return {
                colId: "A",
                cellId: "A10",
                content: "On Page Optimization"
            }


        case "A11":
            return {
                colId: "A",
                cellId: "A11",
                content: "Content Creation"
            }


        case "A12":
            return {
                colId: "A",
                cellId: "A12",
                content: "Content Publishing"
            }


        case "A13":
            return {
                colId: "A",
                cellId: "A13",
                content: "Premium Press Release"
            }



        case "A14":
            return {
                colId: "A",
                cellId: "A14",
                content: "Authority Niche Placements"
            }
        case "A15":
            return {
                colId: "A",
                cellId: "A15",
                content: "Review Management"
            }

        case "A16":
            return {
                colId: "A",
                cellId: "A16",
                content: "Index Links"
            }

        case "A17":
            return {
                colId: "A",
                cellId: "A17",
                content: "Video Recap"
            }


        case "B0":
            return {
                colId: "B",
                cellId: "B0",
                content: ""
            }

        case "B1":
            return {
                colId: "B",
                cellId: "B1",
                content: ""
            }
        case "B2":
            return {
                colId: "B",
                cellId: "B2",
                content: ""
            }


        case "B3":
            return {
                colId: "B",
                cellId: "B3",
                content: ""
            }

        case "B4":
            return {
                colId: "B",
                cellId: "B4",
                content: ""
            }
        case "B5":
            return {
                colId: "B",
                cellId: "B5",
                content: ""
            }


        case "B6":
            return {
                colId: "B",
                cellId: "B6",
                content: ""
            }

        case "B7":
            return {
                colId: "B",
                cellId: "B7",
                content: ""
            }
        case "B8":
            return {
                colId: "B",
                cellId: "B8",
                content: ""
            }


        case "B9":
            return {
                colId: "B",
                cellId: "B9",
                content: ""
            }

        case "B10":
            return {
                colId: "B",
                cellId: "B10",
                content: ""
            }

        case "B11":
            return {
                colId: "B",
                cellId: "B11",
                content: ""
            }

        case "B12":
            return {
                colId: "B",
                cellId: "B12",
                content: ""
            }

        case "B13":
            return {
                colId: "B",
                cellId: "B13",
                content: ""
            }
        case 'B14':
            return {
                colId: "B",
                cellId: "B14",
                content: ""
            }

        case "B15":
            return {
                colId: "B",
                cellId: "B15",
                content: ""
            }

        case "B16":
            return {
                colId: "B",
                cellId: "B16",
                content: ""
            }

        case "B17":
            return {
                colId: "B",
                cellId: "B17",
                content: ""
            }

        case "C0":
            return {
                colId: "C",
                cellId: "C0",
                content: ""
            }

        case "C1":
            return {
                colId: "C",
                cellId: "C1",
                content: ""
            }
        case "C2":
            return {
                colId: "C",
                cellId: "C2",
                content: ""
            }


        case "C3":
            return {
                colId: "C",
                cellId: "C3",
                content: ""
            }

        case "C4":
            return {
                colId: "C",
                cellId: "C4",
                content: ""
            }
        case "C5":
            return {
                colId: "C",
                cellId: "C5",
                content: ""
            }


        case "C6":
            return {
                colId: "C",
                cellId: "C6",
                content: ""
            }

        case "C7":
            return {
                colId: "C",
                cellId: "C7",
                content: ""
            }
        case "C8":
            return {
                colId: "C",
                cellId: "C8",
                content: ""
            }


        case "C9":
            return {
                colId: "C",
                cellId: "C9",
                content: ""
            }

        case "C10":
            return {
                colId: "C",
                cellId: "C10",
                content: ""
            }

        case "C11":
            return {
                colId: "C",
                cellId: "C11",
                content: ""
            }

        case "C12":
            return {
                colId: "C",
                cellId: "C12",
                content: ""
            }

        case "C13":
            return {
                colId: "C",
                cellId: "C13",
                content: ""
            }
        case "C14":
            return {
                colId: "C",
                cellId: "C14",
                content: ""
            }

        case "C15":
            return {
                colId: "C",
                cellId: "C15",
                content: ""
            }

        case "C16":
            return {
                colId: "C",
                cellId: "C16",
                content: ""
            }

        case "C17":
            return {
                colId: "C",
                cellId: "C17",
                content: ""
            }

        case "D0":
            return {
                colId: "D",
                cellId: "D0",
                content: ""
            }

        case "D1":
            return {
                colId: "D",
                cellId: "D1",
                content: ""
            }

        case "D2":
            return {
                colId: "D",
                cellId: "D2",
                content: ""
            }


        case "D3":
            return {
                colId: "D",
                cellId: "D3",
                content: ""
            }

        case "D4":
            return {
                colId: "D",
                cellId: "D4",
                content: ""
            }

        case "D5":
            return {
                colId: "D",
                cellId: "D5",
                content: ""
            }


        case "D6":
            return {
                colId: "D",
                cellId: "D6",
                content: ""
            }

        case "D7":
            return {
                colId: "D",
                cellId: "D7",
                content: ""
            }
        case "D8":
            return {
                colId: "D",
                cellId: "D8",
                content: ""
            }


        case "D9":
            return {
                colId: "D",
                cellId: "D9",
                content: ""
            }

        case "D10":
            return {
                colId: "D",
                cellId: "D10",
                content: ""
            }

        case "D11":
            return {
                colId: "D",
                cellId: "D11",
                content: ""
            }

        case "D12":
            return {
                colId: "D",
                cellId: "D12",
                content: ""
            }

        case "D13":
            return {
                colId: "D",
                cellId: "D13",
                content: ""
            }
        case "D14":
            return {
                colId: "D",
                cellId: "D14",
                content: ""
            }

        case "D15":
            return {
                colId: "D",
                cellId: "D15",
                content: ""
            }

        case "D16":
            return {
                colId: "D",
                cellId: "D16",
                content: ""
            }

        case "D17":
            return {
                colId: "D",
                cellId: "D17",
                content: ""
            }


        case "F0":
            return {
                colId: "F",
                cellId: "F0",
                content: ""
            }

        case "F1":
            return {
                colId: "F",
                cellId: "F1",
                content: ""
            }

        case "F2":
            return {
                colId: "F",
                cellId: "F2",
                content: ""
            }


        case "F3":
            return {
                colId: "F",
                cellId: "F3",
                content: ""
            }

        case "F4":
            return {
                colId: "F",
                cellId: "F4",
                content: ""
            }

        case "F5":
            return {
                colId: "F",
                cellId: "F5",
                content: ""
            }


        case "F6":
            return {
                colId: "F",
                cellId: "F6",
                content: ""
            }

        case "F7":
            return {
                colId: "F",
                cellId: "F7",
                content: ""
            }
        case "F8":
            return {
                colId: "F",
                cellId: "F8",
                content: ""
            }


        case "F9":
            return {
                colId: "F",
                cellId: "F9",
                content: ""
            }

        case "F10":
            return {
                colId: "F",
                cellId: "F10",
                content: ""
            }

        case "F11":
            return {
                colId: "F",
                cellId: "F11",
                content: ""
            }

        case "F12":
            return {
                colId: "F",
                cellId: "F12",
                content: ""
            }

        case "F13":
            return {
                colId: "F",
                cellId: "F13",
                content: ""
            }
        case "F14":
            return {
                colId: "F",
                cellId: "F14",
                content: ""
            }

        case "F15":
            return {
                colId: "F",
                cellId: "F15",
                content: ""
            }

        case "F16":
            return {
                colId: "F",
                cellId: "F16",
                content: ""
            }

        case "F17":
            return {
                colId: "F",
                cellId: "F17",
                content: ""
            }


        case "G0":
            return {
                colId: "G",
                cellId: "G0",
                content: ""
            }

        case "G1":
            return {
                colId: "G",
                cellId: "G1",
                content: ""
            }

        case "G2":
            return {
                colId: "G",
                cellId: "G2",
                content: ""
            }


        case "G3":
            return {
                colId: "G",
                cellId: "G3",
                content: ""
            }

        case "G4":
            return {
                colId: "G",
                cellId: "G4",
                content: ""
            }

        case "G5":
            return {
                colId: "G",
                cellId: "G5",
                content: ""
            }


        case "G6":
            return {
                colId: "G",
                cellId: "G6",
                content: ""
            }

        case "G7":
            return {
                colId: "G",
                cellId: "G7",
                content: ""
            }
        case "G8":
            return {
                colId: "G",
                cellId: "G8",
                content: ""
            }


        case "G9":
            return {
                colId: "G",
                cellId: "G9",
                content: ""
            }

        case "G10":
            return {
                colId: "G",
                cellId: "G10",
                content: ""
            }

        case "G11":
            return {
                colId: "G",
                cellId: "G11",
                content: ""
            }

        case "G12":
            return {
                colId: "G",
                cellId: "G12",
                content: ""
            }

        case "G13":
            return {
                colId: "G",
                cellId: "G13",
                content: ""
            }
        case "G14":
            return {
                colId: "G",
                cellId: "G14",
                content: ""
            }

        case "G15":
            return {
                colId: "G",
                cellId: "G15",
                content: ""
            }

        case "G16":
            return {
                colId: "G",
                cellId: "G16",
                content: ""
            }

        case "G17":
            return {
                colId: "G",
                cellId: "G17",
                content: ""
            }





        case "E0":
            return {
                colId: "E",
                cellId: "E0",
                content: ""
            }

        case "E1":
            return {
                colId: "E",
                cellId: "E1",
                content: ""
            }

        case "E2":
            return {
                colId: "E",
                cellId: "E2",
                content: ""
            }


        case "E3":
            return {
                colId: "E",
                cellId: "E3",
                content: ""
            }

        case "E4":
            return {
                colId: "E",
                cellId: "E4",
                content: ""
            }

        case "E5":
            return {
                colId: "E",
                cellId: "E5",
                content: ""
            }


        case "E6":
            return {
                colId: "E",
                cellId: "E6",
                content: ""
            }

        case "E7":
            return {
                colId: "E",
                cellId: "E7",
                content: ""
            }
        case "E8":
            return {
                colId: "E",
                cellId: "E8",
                content: ""
            }


        case "E9":
            return {
                colId: "E",
                cellId: "E9",
                content: ""
            }

        case "E10":
            return {
                colId: "E",
                cellId: "E10",
                content: ""
            }

        case "E11":
            return {
                colId: "E",
                cellId: "E11",
                content: ""
            }

        case "E12":
            return {
                colId: "E",
                cellId: "E12",
                content: ""
            }

        case "E13":
            return {
                colId: "E",
                cellId: "E13",
                content: ""
            }
        case "E14":
            return {
                colId: "E",
                cellId: "E14",
                content: ""
            }

        case "E15":
            return {
                colId: "E",
                cellId: "E15",
                content: ""
            }

        case "E16":
            return {
                colId: "E",
                cellId: "E16",
                content: ""
            }

        case "E17":
            return {
                colId: "E",
                cellId: "E17",
                content: ""
            }


        default: return {};
    }
}

const BuildCell = ({ cellIdx }) => {
    const cellInfo = getCellInfo(cellIdx);

    return (
        <div id={cellInfo.colId} class={cellInfo.cellId} >

            {cellInfo.content}


        </div>
    );
}


const Table = () => {
    return <>

        <Header />

        <div id="table">

            <div class="row0">
                <BuildCell
                    cellIdx="id0"
                />
                <BuildCell
                    cellIdx="A0"
                />
                <BuildCell
                    cellIdx="B0"
                />
                <BuildCell
                    cellIdx="C0"
                />
                <BuildCell
                    cellIdx="D0"
                />
                <BuildCell
                    cellIdx="E0"
                />
                <BuildCell
                    cellIdx="F0"
                />
                <BuildCell
                    cellIdx="G0"
                />
            </div>

            <div class="row1">
                <BuildCell
                    cellIdx="id1"
                />
                <BuildCell
                    cellIdx="A1"
                />
                <BuildCell
                    cellIdx="B1"
                />
                <BuildCell
                    cellIdx="C1"
                />
                <BuildCell
                    cellIdx="D1"
                />
                <BuildCell
                    cellIdx="E1"
                />
                <BuildCell
                    cellIdx="F1"
                />
                <BuildCell
                    cellIdx="G1"
                />
            </div>


            <div class="row2">
                <BuildCell
                    cellIdx="id2"
                />
                <BuildCell
                    cellIdx="A2"
                />
                <BuildCell
                    cellIdx="B2"
                />
                <BuildCell
                    cellIdx="C2"
                />
                <BuildCell
                    cellIdx="D2"
                />
                <BuildCell
                    cellIdx="E2"
                />
                <BuildCell
                    cellIdx="F2"
                />
                <BuildCell
                    cellIdx="G2"
                />
            </div>




            <div class="row3">
                <BuildCell
                    cellIdx="id3"
                />
                <BuildCell
                    cellIdx="A3"
                />
                <BuildCell
                    cellIdx="B3"
                />
                <BuildCell
                    cellIdx="C3"
                />
                <BuildCell
                    cellIdx="D3"
                />
                <BuildCell
                    cellIdx="E3"
                />
                <BuildCell
                    cellIdx="F3"
                />
                <BuildCell
                    cellIdx="G3"
                />
            </div>




            <div class="row4">
                <BuildCell
                    cellIdx="id4"
                />
                <BuildCell
                    cellIdx="A4"
                />
                <BuildCell
                    cellIdx="B4"
                />
                <BuildCell
                    cellIdx="C4"
                />
                <BuildCell
                    cellIdx="D4"
                />
                <BuildCell
                    cellIdx="E4"
                />
                <BuildCell
                    cellIdx="F4"
                />
                <BuildCell
                    cellIdx="G4"
                />
            </div>





            <div class="row5">
                <BuildCell
                    cellIdx="id5"
                />
                <BuildCell
                    cellIdx="A5"
                />
                <BuildCell
                    cellIdx="B5"
                />
                <BuildCell
                    cellIdx="C5"
                />
                <BuildCell
                    cellIdx="D5"
                />
                <BuildCell
                    cellIdx="E5"
                />
                <BuildCell
                    cellIdx="F5"
                />
                <BuildCell
                    cellIdx="G5"
                />
            </div>



            <div class="row6">
                <BuildCell
                    cellIdx="id6"
                />
                <BuildCell
                    cellIdx="A6"
                />
                <BuildCell
                    cellIdx="B6"
                />
                <BuildCell
                    cellIdx="C6"
                />
                <BuildCell
                    cellIdx="D6"
                />
                <BuildCell
                    cellIdx="E6"
                />
                <BuildCell
                    cellIdx="F6"
                />
                <BuildCell
                    cellIdx="G6"
                />
            </div>



            <div class="row7">
                <BuildCell
                    cellIdx="id7"
                />
                <BuildCell
                    cellIdx="A7"
                />
                <BuildCell
                    cellIdx="B7"
                />
                <BuildCell
                    cellIdx="C7"
                />
                <BuildCell
                    cellIdx="D7"
                />
                <BuildCell
                    cellIdx="E7"
                />
                <BuildCell
                    cellIdx="F7"
                />
                <BuildCell
                    cellIdx="G7"
                />
            </div>

            <div class="row8">
                <BuildCell
                    cellIdx="id8"
                />
                <BuildCell
                    cellIdx="A8"
                />
                <BuildCell
                    cellIdx="B8"
                />
                <BuildCell
                    cellIdx="C8"
                />
                <BuildCell
                    cellIdx="D8"
                />
                <BuildCell
                    cellIdx="E8"
                />
                <BuildCell
                    cellIdx="F8"
                />
                <BuildCell
                    cellIdx="G8"
                />
            </div>

            <div class="row9">
                <BuildCell
                    cellIdx="id9"
                />
                <BuildCell
                    cellIdx="A9"
                />
                <BuildCell
                    cellIdx="B9"
                />
                <BuildCell
                    cellIdx="C9"
                />
                <BuildCell
                    cellIdx="D9"
                />
                <BuildCell
                    cellIdx="E9"
                />
                <BuildCell
                    cellIdx="F9"
                />
                <BuildCell
                    cellIdx="G9"
                />
            </div>


            <div class="row10">
                <BuildCell
                    cellIdx="id10"
                />
                <BuildCell
                    cellIdx="A10"
                />
                <BuildCell
                    cellIdx="B10"
                />
                <BuildCell
                    cellIdx="C10"
                />
                <BuildCell
                    cellIdx="D10"
                />
                <BuildCell
                    cellIdx="E10"
                />
                <BuildCell
                    cellIdx="F10"
                />
                <BuildCell
                    cellIdx="G10"
                />
            </div>

            <div class="row11">
                <BuildCell
                    cellIdx="id11"
                />
                <BuildCell
                    cellIdx="A11"
                />
                <BuildCell
                    cellIdx="B11"
                />
                <BuildCell
                    cellIdx="C11"
                />
                <BuildCell
                    cellIdx="D11"
                />
                <BuildCell
                    cellIdx="E11"
                />
                <BuildCell
                    cellIdx="F11"
                />
                <BuildCell
                    cellIdx="G11"
                />
            </div>

            <div class="row12">
                <BuildCell
                    cellIdx="id12"
                />
                <BuildCell
                    cellIdx="A12"
                />
                <BuildCell
                    cellIdx="B12"
                />
                <BuildCell
                    cellIdx="C12"
                />
                <BuildCell
                    cellIdx="D12"
                />
                <BuildCell
                    cellIdx="E12"
                />
                <BuildCell
                    cellIdx="F12"
                />
                <BuildCell
                    cellIdx="G12"
                />
            </div>

            <div class="row13">
                <BuildCell
                    cellIdx="id13"
                />
                <BuildCell
                    cellIdx="A13"
                />
                <BuildCell
                    cellIdx="B13"
                />
                <BuildCell
                    cellIdx="C13"
                />
                <BuildCell
                    cellIdx="D13"
                />
                <BuildCell
                    cellIdx="E13"
                />
                <BuildCell
                    cellIdx="F13"
                />
                <BuildCell
                    cellIdx="G13"
                />
            </div>

            <div class="row14">
                <BuildCell
                    cellIdx="id14"
                />
                <BuildCell
                    cellIdx="A14"
                />
                <BuildCell
                    cellIdx="B14"
                />
                <BuildCell
                    cellIdx="C14"
                />
                <BuildCell
                    cellIdx="D14"
                />
                <BuildCell
                    cellIdx="E14"
                />
                <BuildCell
                    cellIdx="F14"
                />
                <BuildCell
                    cellIdx="G14"
                />
            </div>

            <div class="row15">
                <BuildCell
                    cellIdx="id15"
                />
                <BuildCell
                    cellIdx="A15"
                />
                <BuildCell
                    cellIdx="B15"
                />
                <BuildCell
                    cellIdx="C15"
                />
                <BuildCell
                    cellIdx="D15"
                />
                <BuildCell
                    cellIdx="E15"
                />
                <BuildCell
                    cellIdx="F15"
                />
                <BuildCell
                    cellIdx="G15"
                />
            </div>

            <div class="row16">
                <BuildCell
                    cellIdx="id16"
                />
                <BuildCell
                    cellIdx="A16"
                />
                <BuildCell
                    cellIdx="B16"
                />
                <BuildCell
                    cellIdx="C16"
                />
                <BuildCell
                    cellIdx="D16"
                />
                <BuildCell
                    cellIdx="E16"
                />
                <BuildCell
                    cellIdx="F16"
                />
                <BuildCell
                    cellIdx="G16"
                />
            </div>

            <div class="row17">
                <BuildCell
                    cellIdx="id17"
                />
                <BuildCell
                    cellIdx="A17"
                />
                <BuildCell
                    cellIdx="B17"
                />
                <BuildCell
                    cellIdx="C17"
                />
                <BuildCell
                    cellIdx="D17"
                />
                <BuildCell
                    cellIdx="E17"
                />
                <BuildCell
                    cellIdx="F17"
                />
                <BuildCell
                    cellIdx="G17"
                />
            </div>



            <div id="db-data-btn" >
                <button id="get-db-data-btn" >Get edited table data as JSON</button>
            </div>


        </div>


    </>



}




const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Table />);

