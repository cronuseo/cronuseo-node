import { Cronuseo } from "..";
import { ICheckRequest } from "../check/check";


describe('Check against real server', () => {
  let cronuseoInstance: Cronuseo;
  const realServerConfig = {
    checkUrl: 'http://localhost:8081',
    apiKey: 'KAbcYxYLD8R1j/bnL/64tqYJN+JA405ruJcXLRzp0Yo='
    // Add other necessary real server configuration properties here
  };

  beforeAll(() => {
    cronuseoInstance = new Cronuseo(realServerConfig);
  });

  it('should return true for a valid request', async () => {
    const checkRequest: ICheckRequest = {
      user: 'realUser',
      resource: 'realResource',
      action: 'realAction'
    };

    const response = await cronuseoInstance.check(checkRequest);
    console.log(response)
    // Add more assertions as necessary
  });

  // Add more tests as necessary
});
