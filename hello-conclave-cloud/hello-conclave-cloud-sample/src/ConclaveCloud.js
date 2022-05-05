import { Conclave } from 'conclave-cloud-sdk'

const conclaveConfig = new Conclave.create({
    tenantID: 'T7BEE892266E14E0AD6D5F845036CF1D1672B298BCA4C7C8A57F40642A24C7C8',
    projectID: '64b0799d5d938648d9f9b5d6ed96ef3a59e52675193c891bd3036d9ae44dfc11',
    apiURL: 'http://localhost:8080'
});

export default conclaveConfig;