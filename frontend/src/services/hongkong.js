import axios from 'axios';

const getConfirmedCases = () => axios.get(`${process.env.VUE_APP_HK_IDENTIFIED_DATA}?t=${Date.now()}`);
const getHighRiskArea = () => axios.get(`${process.env.VUE_APP_HK_HIGH_RISK_AREA_DATA}?t=${Date.now()}`);
const getAffectedTransport = () => axios.get(`${process.env.VUE_APP_HK_AFFECTED_TRANSPORT_DATA}?t=${Date.now()}`);

export default { getConfirmedCases, getHighRiskArea, getAffectedTransport };
