import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
    const [colorList, setColorList] = useState([]);
    // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        axiosWithAuth()
            .get("/api/colors")
            .then((res) => {
                setColorList(res.data);
            })
            .catch((error) => {
                console.error("Server Error", error);
            });
    }, []);

    return (
        <>
            <ColorList colors={colorList} updateColors={setColorList} />
            <Bubbles colors={colorList} />
        </>
    );
};

export default BubblePage;
