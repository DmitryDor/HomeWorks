import React from "react";
import s from "./App.module.css";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";


const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
           {/* <HW1 />*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            <HW4/>
            {/*<HW5/>*/}

        </div>
    );
}

export default App;
