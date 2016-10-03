import {Page} from 'ionic-angular';
import {TextToSpeech} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  
  constructor() {

  }

  tts_funcetion() {
    TextToSpeech.speak({
      text: 'Hello',
      locale: 'th-TH',
      rate: 0.80
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}
