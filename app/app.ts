import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {ChallengeProvider} from './providers/challenge/challenge';
import {AdMob} from 'ionic-native'


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [ChallengeProvider]
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      interface AdMobType {
        banner:string,
        interstitial:string
      };

      var admobid:AdMobType;

      // select the right Ad Id according to platform
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: '',
          interstitial: 'ca-app-pub-3267606224712670/'
        };
      } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
            banner: '',
            interstitial: 'ca-app-pub-3267606224712670/'
        };
      } else {
        admobid = { // for Windows Phone
            banner: '',
            interstitial: 'ca-app-pub-3267606224712670/'
        };
      }

      if(AdMob) AdMob.createBanner( {
        adId:admobid.banner,
        isTesting:true,//comment this out before publishing the app
        autoShow:true} );

      if(AdMob) AdMob.prepareInterstitial({
        adId:admobid.interstitial,
        isTesting:true, //comment this out before publishing the app
        autoShow:true});
    });
  }
}

ionicBootstrap(MyApp);
