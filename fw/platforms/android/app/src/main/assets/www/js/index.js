

document.addEventListener("deviceready",  function(){
        onDeviceReady();

});

function onDeviceReady() {

    try{
    admob.start();




    admob.configure({
       testDeviceIds: ["9A706FF0A740843D1A599D9F05D3EDE1"]
    });

     var rewarded = new admob.RewardedAd({
        adUnitId: 'ca-app-pub-3940256099942544/5224354917',
        serverSideVerification: {userId: "1" },
    });

    rewarded.load().then(() => {
        console.log("admob SHOWING REWARD AD");
         rewarded.show();

    }).catch((err) => {
        console.log("EVT Error while loading:", err)
    })

    console.log('admob ok!!');
    }catch(e){
    console.log('admob error='+e);
    }


}