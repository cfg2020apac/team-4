import { ApiPromise, ApiResponse } from 'src/types';
import { EventDetails } from 'src/types/EventDetails';
import { createFormData } from 'src/utils/formdata-helper';
import BaseAPI from './base';

class EventsAPI extends BaseAPI {
  // TODO: pending backend integration
  public createEvent(event: EventDetails): ApiPromise<{ data: string; error: string }> {
    const fd = new FormData();
    createFormData(fd, 'event', event);
    return this.post('/events/new', fd, true);
  }

  public async getEvents(): ApiPromise<EventDetails[]> {
    const mock: ApiResponse<EventDetails[], {}> = {
      code: 200,
      messages: [],
      data: [
        {
          name: 'Discovering Treasures',
          address: 'Tohyi',
          bannerImage:
            'https://images.squarespace-cdn.com/content/v1/59954067bebafbb309508e10/1527241613289-MU42FY7AN7R4SJL1GLFV/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/20170304_115245.jpg?format=1000w',
          date: '2020-08-01',
          descriptions: 'Ages 10-12, children prgm & events, @Aljunied Branch'
        },
        {
          name: 'Happy Formula',
          address: 'Tohyi',
          bannerImage:
            'https://images.squarespace-cdn.com/content/v1/59954067bebafbb309508e10/1527648427040-V3DEBBDZ4W87LX5870VG/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/shutterstock_99016145.jpg?format=750w',
          date: '2020-08-01',
          descriptions: 'Ages 10-12, children prgm & events, @Aljunied Branch'
        },
        {
          name: '#I Am Remarkable Workshop',
          address: 'Tohyi',
          bannerImage:
            'https://images.squarespace-cdn.com/content/v1/59954067bebafbb309508e10/1600144082951-H2MJY0A419MBRJ7Z9KTN/ke17ZwdGBToddI8pDm48kMjeOQW7eETwI1at-vRo8Cd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmEZprBMNaW6dUYQUrCwR2cROwLzAdC_zB1aDNzl1Yykp2YvkyzD0BchbnFDmMjIEC/WhatsApp+Image+2020-09-14+at+11.28.22+AM.jpeg?format=500w',
          date: '2020-09-01',
          descriptions: 'Ages 10-12, children prgm & events, @Aljunied Branch'
        },
        {
          name: 'Discovering Treasures',
          address: 'Tohyi',
          bannerImage:
            'https://images.squarespace-cdn.com/content/v1/59954067bebafbb309508e10/1527241613289-MU42FY7AN7R4SJL1GLFV/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/20170304_115245.jpg?format=1000w',
          date: '2020-08-01',
          descriptions: 'Ages 10-12, children prgm & events, @Aljunied Branch'
        },
        {
          name: 'Happy Formula',
          address: 'Tohyi',
          bannerImage:
            'https://images.squarespace-cdn.com/content/v1/59954067bebafbb309508e10/1527648427040-V3DEBBDZ4W87LX5870VG/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/shutterstock_99016145.jpg?format=750w',
          date: '2020-08-01',
          descriptions: 'Ages 10-12, children prgm & events, @Aljunied Branch'
        },
        {
          name: '#I Am Remarkable Workshop',
          address: 'Tohyi',
          bannerImage:
            'https://images.squarespace-cdn.com/content/v1/59954067bebafbb309508e10/1600144082951-H2MJY0A419MBRJ7Z9KTN/ke17ZwdGBToddI8pDm48kMjeOQW7eETwI1at-vRo8Cd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmEZprBMNaW6dUYQUrCwR2cROwLzAdC_zB1aDNzl1Yykp2YvkyzD0BchbnFDmMjIEC/WhatsApp+Image+2020-09-14+at+11.28.22+AM.jpeg?format=500w',
          date: '2020-09-01',
          descriptions: 'Ages 10-12, children prgm & events, @Aljunied Branch'
        }
      ]
    };

    return mock;
  }

  // public getEvents(): ApiPromise<[EventDetails]> {
  //   return this.get('/events');
  // }
}

export default EventsAPI;
