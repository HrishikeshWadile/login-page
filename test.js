const { Builder, By, until } = require('selenium-webdriver');

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    let results = [];

    function report(testName, expected, actual, condition) {
        let status = condition ? "PASS" : "FAIL";

        console.log(`\n==============================`);
        console.log(`Test Case: ${testName}`);
        console.log(`Expected : ${expected}`);
        console.log(`Actual   : ${actual}`);
        console.log(`Result   : ${status}`);
        console.log(`==============================`);

        results.push({ testName, status });
    }

    try {
        await driver.get('http://localhost:5000');
        await driver.wait(until.elementLocated(By.tagName("body")), 5000);

        let title = await driver.getTitle();
        report(
            "Page Load",
            "Title contains Login",
            title,
            title.includes("Login")
        );

        await driver.findElement(By.css("button")).click();
        await driver.sleep(1000);

        let page1 = await driver.getPageSource();
        report(
            "Empty Input Validation",
            "Show empty field message",
            page1,
            page1.includes("Fields cannot be empty")
        );

        await driver.findElement(By.id("email")).sendKeys("wrong@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("wrong");
        await driver.findElement(By.css("button")).click();
        await driver.sleep(1000);

        let page2 = await driver.getPageSource();
        report(
            "Invalid Login",
            "Show invalid credentials",
            page2,
            page2.includes("Invalid credentials")
        );

        await driver.findElement(By.id("email")).clear();
        await driver.findElement(By.id("password")).clear();

        await driver.findElement(By.id("email")).sendKeys("admin@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345678");

        await driver.findElement(By.css("button")).click();

        await driver.wait(until.urlContains("success"), 5000);

        let url = await driver.getCurrentUrl();

        report(
            "Valid Login",
            "Redirect to success page",
            url,
            url.includes("success")
        );

        console.log(`\n========= TEST SUMMARY =========`);

        let passCount = results.filter(r => r.status === "PASS").length;
        let failCount = results.filter(r => r.status === "FAIL").length;

        results.forEach(r => {
            console.log(`${r.status}: ${r.testName}`);
        });

        console.log(`\nTotal: ${results.length}`);
        console.log(`Passed: ${passCount}`);
        console.log(`Failed: ${failCount}`);
        console.log(`================================`);

    } catch (err) {
        console.error("Test Execution Failed:", err);
    } finally {
        await driver.quit();
    }
}

runTests();