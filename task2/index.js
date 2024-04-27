// import App from "./app.jsx"

const NotesApp = () => {
    return <>
        <div id="nav-bar">
            NotesApp
        </div>
        <div id="content">

            <input id="input-note" placeholder="Take a note..." />
            <img src="assets/add_note.jpg" id="add-note"></img>


        </div>

        <div id="notes-container">
            <div id="children">
                <div id="child">
                    <div id="child-content">
                        1
                    </div>

                </div>
                <div id="child">
                    <div id="child-content">
                        2
                    </div>

                </div>
                <div id="child">
                    <div id="child-content">
                        3
                    </div>

                </div>
                <div id="child">
                    <div id="child-content">
                        4
                    </div>

                </div>
                <div id="child">
                    <div id="child-content">
                        5
                    </div>

                </div>
                <div id="child">
                    <div id="child-content">
                        6
                    </div>

                </div>

                
            </div>



        </div>

    </>
}



const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(<NotesApp />)