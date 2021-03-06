
    var webdriver = require('selenium-webdriver'),
        { describe, it, after, before } = require('selenium-webdriver/testing');
        By = webdriver.By,
        until = webdriver.until;

    describe("library app scenarios", function(){
      beforeEach(function(){
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get("https://library-app.firebaseapp.com/");

      });
      afterEach(function(){
        driver.quit();
      });
      it('changes button opacity when email is valid', function(){
        var submitBtn = driver.findElement(By.css('btn-lg'));
        driver.findElement(By.css('input')).sendKeys('user@gmail.com');
        driver.wait(function(){
          return submitBtn.getCssValue('opacity').then(function(result){
            return result === "1";
          })
        }, 20000);
      });


      it('works with mocha', function(){
        driver.findElement(By.css('input')).sendKeys('usergmail.com');
        driver.wait(until.elementLocated(By.css('.alert-success')), 20000).then(function(el){
           el.getText().then(function (txt) {
                console.log(txt);
      });



      it('works with mocha', function(){
        driver.findElement(By.css('nav')).getText().then(function(txt){
            console.log(txt);
        })

      });

    });




    // // var driver = new webdriver.Builder().forBrowser('chrome').build();
    // // // var st = "test string";
    // // // console.log("0");
    // // driver.get("https://library-app.firebaseapp.com/");
    // // driver.manage().timeouts().implicitlyWait(20000);
    // // console.log("1");
    // driver.findElement(By.css('input')).sendKeys('user@gmail.com');
    // // console.log("2");
    // // driver.findElement(By.css('.btn-lg')).click();
    // // console.log("3");
    // driver.wait(function(){
    //
    // })
    // driver.wait(until.elementLocated(By.css('.alert-success')), 20000).then(function(el){
    //    el.getText().then(function (txt) {
    //         console.log(txt);
    //     });
    // } );
