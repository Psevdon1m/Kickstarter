import web3 from './web3';
import campaignFactory from './build/CampaingFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0x79a818cad56f9a519d8ee9ae95a0d43475ce7c77'
);

export default instance;
