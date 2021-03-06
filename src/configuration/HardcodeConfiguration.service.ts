import { IConfigurationService } from './IConfigurationService.interface';
import { ConfigurationType } from '../schedules/model/Configuration.type';

export class HardcodeConfigurationService implements IConfigurationService {
  private readonly configurations = [
    {
      url: 'http://brest-hockey.by/',
      days: 10,

      xPathTitle: '//h5//strong',
      xPathSubTitle: '//h5//footer',
      xPathAdditionalInfo: '',
      xPathDates: '//td[1]',
      xPathTimesLines: '//td[2]',
    },
    {
      url: 'http://brest-dvvs.by/sched/',
      firstTime: 1,
      lastTime: 19,
      timeShift: 3,

      xPathTitle: '//font[contains(@size, "6")]//b',
      xPathSubTitle: '//p//font',
      xPathAdditionalInfo: '//i',
      xPathTimesStart: '//td[1]',
      xPathSessions: '//td[2]',
      xPathTracks: Array.from({ length: 7 }, (_: never, index) => `//td[${index + 3}]`),
    },
  ];

  constructor(private readonly channelIds: string[]) {
    this.channelIds = channelIds;
  }

  getConfiguration(channelId: string): ConfigurationType {
    const configurationNumber = this.channelIds.indexOf(channelId);

    return this.configurations[configurationNumber];
  }
}
