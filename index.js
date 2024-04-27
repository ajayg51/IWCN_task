const Header = () => {
    return <div class="header">
        <div class="header-content">
            MONTH 1
        </div>
    </div>
}

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

        default: return {};
    }
}

const BuildCell = ({ cellIdx }) => {
    const cellInfo = getCellInfo(cellIdx);

    return (
        <div id={cellInfo.colId} class={cellInfo.cellId}>
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
            </div>

            <div class="row1">
                <BuildCell
                    cellId="id"
                    content="1"
                />
                <BuildCell
                    cellIdx="A1"
                />
            </div>


            <div class="row2">
                <BuildCell
                    cellId="id"
                    content="2"
                />
                <BuildCell
                    cellIdx="A2"
                />
            </div>




            <div class="row3">
                <BuildCell
                    cellId="id"
                    content="3"
                />
                <BuildCell
                    cellIdx="A3"
                />
            </div>




            <div class="row4">
                <BuildCell
                    cellId="id"
                    content="4"
                />
                <BuildCell
                    cellIdx="A4"
                />
            </div>





            <div class="row5">
                <BuildCell
                    cellId="id"
                    content="5"
                />
                <BuildCell
                    cellIdx="A5"
                />
            </div>



            <div class="row6">
                <BuildCell
                    cellId="id"
                    content="6"
                />
                <BuildCell
                    cellIdx="A6"
                />
            </div>



            <div class="row7">
                <BuildCell
                    cellId="id"
                    content="7"
                />
                <BuildCell
                    cellIdx="A7"
                />
            </div>

            <div class="row8">
                <BuildCell
                    cellId="id"
                    content="8"
                />
                <BuildCell
                    cellIdx="A8"
                />
            </div>

            <div class="row9">
                <BuildCell
                    cellId="id"
                    content="9"
                />
                <BuildCell
                    cellIdx="A9"
                />
            </div>


            <div class="row10">
                <BuildCell
                    cellId="id"
                    content="10"
                />
                <BuildCell
                    cellIdx="A10"
                />
            </div>

            <div class="row11">
                <BuildCell
                    cellId="id"
                    content="11"
                />
                <BuildCell
                    cellIdx="A11"
                />
            </div>

            <div class="row12">
                <BuildCell
                    cellId="id"
                    content="12"
                />
                <BuildCell
                    cellIdx="A12"
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

