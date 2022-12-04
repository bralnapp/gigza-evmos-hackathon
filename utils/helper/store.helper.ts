import { useEffect } from "react";
import GigzaContractAbi from "../constants/Gigza.json"
import DaiContractAbi from "../constants/Dia.json"

const initialState = {
    account: null,
    isWalletConnected: false,
    isLoading: false,
    status: "",
};

// @ts-ignore
const useSetPersistStore = (store) => {
    useEffect(() => {
        // if (typeof window !== "undefined") {
        localStorage.setItem("persist-gigza", JSON.stringify(store));
        // }
        //eslint-disable-next-line
    }, [store]);
};

const useGetPersistedStore = () => {
    // useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("persist-gigza") !== 'undefined') {
        // @ts-ignore
        JSON.parse(localStorage.getItem("persist-gigza")) ||
            initialState
    }
    // 	//eslint-disable-next-line
    // }, []);
}

const GigzaContractAddress = "0x898bF0B5657FFEC66d0E658943Ed2df6e2652D14"
const DiaContractAddress = "0x3edb7b1d57b1dDE14D4f6327a4e55ac40F43A3B1"

const currentEpochTime = Math.floor(new Date().getTime() / 1000.0)

const bidState = ['sent', 'awarded', 'accepted', 'executed', 'fulfilled', 'cancelled']
const jobState = ['POSTED', 'OFFERED', 'ACCEPTED', 'EXECUTED', 'FUFILLED', 'CANCELLED', 'INDISPUTE', 'RESOLVED']

export {
    useSetPersistStore,
    useGetPersistedStore,
    initialState,
    GigzaContractAddress,
    DiaContractAddress,
    GigzaContractAbi,
    DaiContractAbi,
    currentEpochTime,
    bidState,
    jobState
};