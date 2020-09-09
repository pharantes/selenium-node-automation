describe("FraudFilterAutoFill", () => {
  jest.setTimeout(30000);
  const { Builder, By, Key, until } = require("selenium-webdriver");
  var driver;
  driver = new Builder().forBrowser("firefox").build();
  beforeEach(() => {

  });

  afterEach(async function() {
    // driver.quit();
  });

  it("FraudFilterAutoFill", async () => {
    await driver.get("https://app.fraudfilter.io/members/clientarea.php");
    await driver
      .findElement(By.id("inputEmail"))
      .sendKeys("bertram.pecher@freenetdigital.com");
    await driver
      .findElement(By.id("inputPassword"))
      .sendKeys("Bockwurst,0815");
    await driver.findElement(By.id("login")).click();
    // await driver.findElement(By.className("navbar-toggle")).click(); // USE THIS FOR CHROME
    await driver.wait(until.elementLocated(By.id("Primary_Navbar->>_Back_to_FraudFilter_Dashboard_<<")));
    await driver.findElement(By.id("Primary_Navbar->>_Back_to_FraudFilter_Dashboard_<<")).click();
    await driver.get("https://app.fraudfilter.io/#/campaign/new");
    // Beggin the form filling
    await driver.wait(until.elementLocated(By.id("input_9")));
    await driver.findElement(By.id("input_9")).sendKeys("Test");
    
    await driver.findElement(By.id("select_10")).click();
    await driver.wait(until.elementLocated(By.css("#select_option_51 > .md-text")));
    await driver.findElement(By.css("#select_option_51 > .md-text")).click();
    await driver.executeScript("window.scrollTo(0,0)");
    await driver.findElement(By.id("radio_145")).click();
    await driver
      .findElement(By.css("md-pagination-wrapper > .md-tab:nth-child(2)"))
      .click();
    await driver.wait(
      until.elementIsVisible(await driver.findElement(By.id("input_149"))),
      30000
    );
    await driver
      .findElement(By.id("input_149"))
      .sendKeys("https://test.com/?track=1");
    await driver
      .findElement(By.css("#tab-content-3 .flex-xs-100 > .vars"))
      .click();
    await driver
      .findElement(By.css("md-pagination-wrapper > .md-tab:nth-child(3)"))
      .click();
    await driver.findElement(By.id("input_13")).click();
    await driver
      .findElement(By.id("input_13"))
      .sendKeys("https://track.com");
    await driver
      .findElement(
        By.css("md-pagination-wrapper > .md-tab:nth-child(4) > span")
      )
      .click();
    await driver
      .findElement(By.css(".md-raised:nth-child(1) > span:nth-child(2)"))
      .click();
    await driver.wait(
      until.elementIsVisible(
        await driver.findElement(
          By.xpath(
            "//div[@id='menu_container_158']/md-menu-content/md-menu-item[10]/button"
          )
        )
      ),
      30000
    );
    await driver
      .findElement(
        By.xpath(
          "//div[@id='menu_container_158']/md-menu-content/md-menu-item[10]/button"
        )
      )
      .click();
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body");
    //   await driver
    //     .actions({ bridge: true })
    //     .moveToElement(element, 0, 0)
    //     .perform();
    // }
    await driver.wait(
      until.elementIsVisible(
        await driver.findElement(
          By.xpath(
            "//fb-condition-browser/md-radio-group/md-radio-button/div/div"
          )
        )
      ),
      30000
    );
    await driver
      .findElement(
        By.xpath(
          "//fb-condition-browser/md-radio-group/md-radio-button/div/div"
        )
      )
      .click();
    await driver
      .findElement(
        By.xpath(
          "//md-tab-content[@id='tab-content-5']/div/div/div/fb-condition-list/div[2]/div/md-card/md-card-content/fb-component/fb-condition-browser/md-input-container/div/textarea"
        )
      )
      .sendKeys("CHROME");
  });
});
