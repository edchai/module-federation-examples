import moment from "moment";
import { Dates } from "../types/dates";
import {Constants} from "../fixtures/constants";
import {IAllDataFields} from "../types/allDataFields";

export function getDateWithFormat(date: string, format: string): string {
  let days: number;

  switch (date) {
    case Dates.TOMORROW:
      days = 1;
      break;
    case Dates.YESTERDAY:
      days = -1;
      break;
    case Dates.CURRENT:
      days = 0;
      break;
    case Dates.PAST:
      days = -2;
      break;
    case Dates.FUTURE:
      days = 2;
      break;
    case Dates.CURRENT_PLUS_EIGHT_DAYS:
      days = 8;
      break;
    case Dates.LAST_MONTH:
      days = -31;
      break;
    default:
      return date;
  }

  return moment().add(days, 'days').format(format);
}

export function getRandomTextString(symbolsQuantity: number,): string {
  return _getRandomString(symbolsQuantity);
}

export function getRandomIntegerString(stringLength: number): string {
  return _getRandomString(stringLength, '1'.charCodeAt(0), '9'.charCodeAt(0));
}

function _getRandomString(stringLength: number, from: number = 97, to: number = 122): string {
  return Array.from({ length: stringLength }, () =>
      String.fromCharCode(Math.floor(Math.random() * (to - from) + from)),
  ).join('');
}

// возможность реализовать идею через свич + хардкод
export function testDataArrayGenerator(sampleName: string): object[] {
  let testArray: object[] = []

  switch (sampleName) {
    case 'react-nested-routers':
      testArray = [
        {
          host: 8081,
          message: Constants.commonPhrases.reactNestedRoutersApp.pagesMessages.page1App1,
          linkMessage: Constants.elementsText.reactNestedRoutersApp.shellAppTextedLinks[4]
        },
        {
          host: 8082,
          message: Constants.commonPhrases.reactNestedRoutersApp.pagesMessages.pageAApp2,
          linkMessage: Constants.elementsText.reactNestedRoutersApp.shellAppTextedLinks[4].replace(Constants.elementsText.reactNestedRoutersApp.replaceValues[0], Constants.elementsText.reactNestedRoutersApp.replaceValues[4])
        }
      ]
      break;
  }

  return testArray
}

// динамический метод, требуется разобраться как возвращать hosts не в массиве
export function getTestDataArrayBody(testData: any[], sampleName: string): any {
  let testArray: object[] = []

  switch (sampleName) {
    case 'react-nested-routers':
      // testArray = [{
      //   host: testData[0].hosts?.map((host: number) => ({
      //     host,
      //   })),
      // }]
      testArray = testData.map((data: IAllDataFields) => ({
      host: data.hosts,
    }));
    //   testArray = testData.map(data => {
    //     data.hosts?.forEach(() => {
    //
    //     })
    //     return {
    //       host: data.hosts?.toString()
    //     }
    //   });
    //   break;
  }

  return testArray
}
