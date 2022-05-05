$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/JavaSeleniumByJiterndra/Practicals/SeleniumPractical/AutomationScript/src/main/java/calculatorandtoolfeatures/azncalculatorandtools.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator and tools",
  "description": "",
  "id": "calculator-and-tools",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user get the correct estimate of borrowing",
  "description": "",
  "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user already open How much could I borrow? page in \"\u003cbrowser_name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user select  \"\u003cApplication Type\u003e\",\"\u003c2nd applicant\u0027s annual other income\u003e\",and \"\u003c2nd applicant\u0027s annual income (before tax)\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"\u003cProperty you would like to buy\u003e\", and \"\u003cannual income (before tax)\u003e\"options",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter  \"\u003cNumber of dependants\u003e\",\"\u003cYour annual other income (optional)\u003e\" field value",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter  \"\u003cMonthly living expenses\u003e\", \"\u003cCurrent home loan monthly repayments\u003e\" ,and \"\u003cOther monthly commitments\u003e\" feild value.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter  \"\u003cTotal credit card limits\u003e\" and \"\u003cOther loan monthly repayments\u003e\"feild value",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click Work out how much I could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user check estimate amount",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on start over link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify form has been clear",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;",
  "rows": [
    {
      "cells": [
        "browser_name",
        "Application Type",
        "2nd applicant\u0027s annual other income",
        "2nd applicant\u0027s annual income (before tax)",
        "Property you would like to buy",
        "annual income (before tax)",
        "Number of dependants",
        "Your annual other income (optional)",
        "Monthly living expenses",
        "Current home loan monthly repayments",
        "Other monthly commitments",
        "Total credit card limits",
        "Other loan monthly repayments"
      ],
      "line": 17,
      "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;1"
    },
    {
      "cells": [
        "chrome",
        "Single",
        "0",
        "0",
        "Home to live in",
        "80,000",
        "0",
        "10,0000",
        "500",
        "0",
        "0",
        "0",
        "100"
      ],
      "line": 18,
      "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;2"
    },
    {
      "cells": [
        "chrome",
        "Joint",
        "80,000",
        "1,00,000",
        "Residential investment",
        "90,000",
        "2",
        "30,0000",
        "700",
        "0",
        "0",
        "0",
        "300"
      ],
      "line": 19,
      "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;3"
    },
    {
      "cells": [
        "chrome",
        "Single",
        "0",
        "0",
        "Home to live in",
        "0",
        "0",
        "0",
        "1",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 20,
      "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "user get the correct estimate of borrowing",
  "description": "",
  "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user already open How much could I borrow? page in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user select  \"Single\",\"0\",and \"0\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"Home to live in\", and \"80,000\"options",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter  \"0\",\"10,0000\" field value",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter  \"500\", \"0\" ,and \"0\" feild value.",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter  \"0\" and \"100\"feild value",
  "matchedColumns": [
    11,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click Work out how much I could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user check estimate amount",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on start over link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify form has been clear",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 52
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_already_on_How_much_could_I_borrow_page(String)"
});
formatter.result({
  "duration": 14865161300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 14
    },
    {
      "val": "0",
      "offset": 23
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_select_and(String,String,String)"
});
formatter.result({
  "duration": 375050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home to live in",
      "offset": 13
    },
    {
      "val": "80,000",
      "offset": 36
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_select_and_options(String,String)"
});
formatter.result({
  "duration": 601483900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    },
    {
      "val": "10,0000",
      "offset": 17
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_field_value(String,String)"
});
formatter.result({
  "duration": 624431500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_and_feild_value(String,String,String)"
});
formatter.result({
  "duration": 860016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    },
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_and_feild_value(String,String)"
});
formatter.result({
  "duration": 637742400,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_click_Work_out_how_much_I_could_borrow_button()"
});
formatter.result({
  "duration": 5269484900,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_check_estimate_amount()"
});
formatter.result({
  "duration": 51324100,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_click_on_start_over_link()"
});
formatter.result({
  "duration": 180255800,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.verify_form_has_been_clear()"
});
formatter.result({
  "duration": 77602100,
  "error_message": "java.lang.AssertionError: Foram is clear\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat calculatorandtoolstepdefinition.aznCalculatorAndToolStepDefinition.verify_form_has_been_clear(aznCalculatorAndToolStepDefinition.java:140)\r\n\tat ✽.And verify form has been clear(C:/JavaSeleniumByJiterndra/Practicals/SeleniumPractical/AutomationScript/src/main/java/calculatorandtoolfeatures/azncalculatorandtools.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "user get the correct estimate of borrowing",
  "description": "",
  "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user already open How much could I borrow? page in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user select  \"Joint\",\"80,000\",and \"1,00,000\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"Residential investment\", and \"90,000\"options",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter  \"2\",\"30,0000\" field value",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter  \"700\", \"0\" ,and \"0\" feild value.",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter  \"0\" and \"300\"feild value",
  "matchedColumns": [
    11,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click Work out how much I could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user check estimate amount",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on start over link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify form has been clear",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 52
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_already_on_How_much_could_I_borrow_page(String)"
});
formatter.result({
  "duration": 11211697500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joint",
      "offset": 14
    },
    {
      "val": "80,000",
      "offset": 22
    },
    {
      "val": "1,00,000",
      "offset": 35
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_select_and(String,String,String)"
});
formatter.result({
  "duration": 180203075000,
  "error_message": "org.openqa.selenium.TimeoutException: java.util.concurrent.TimeoutException\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027AAKASH\u0027, ip: \u0027192.168.10.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0a62bbfe46c1de59d1fac9e92a2de9cd, sendKeysToElement {id\u003d23482560-ccbe-4c46-ac45-e57c0d3e7328, value\u003d[Ljava.lang.CharSequence;@41eb94bc}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 99.0.4844.17 (395f87df02eed..., userDataDir: C:\\Users\\91966\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58814}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58814/devtoo..., se:cdpVersion: 100.0.4896.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (0a62bbfe46c1de59d1fac9e92a2de9cd)] -\u003e xpath: .//span[@id\u003d\u0027q2q3i1\u0027]//following-sibling::input]\nSession ID: 0a62bbfe46c1de59d1fac9e92a2de9cd\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:65)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:97)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat calculatorandtoolstepdefinition.aznCalculatorAndToolStepDefinition.user_select_and(aznCalculatorAndToolStepDefinition.java:42)\r\n\tat ✽.Then user select  \"Joint\",\"80,000\",and \"1,00,000\"(C:/JavaSeleniumByJiterndra/Practicals/SeleniumPractical/AutomationScript/src/main/java/calculatorandtoolfeatures/azncalculatorandtools.feature:6)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.base/java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1950)\r\n\tat java.base/java.util.concurrent.CompletableFuture.get(CompletableFuture.java:2085)\r\n\tat org.asynchttpclient.netty.NettyResponseFuture.get(NettyResponseFuture.java:206)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:59)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:97)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat calculatorandtoolstepdefinition.aznCalculatorAndToolStepDefinition.user_select_and(aznCalculatorAndToolStepDefinition.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:768)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Residential investment",
      "offset": 13
    },
    {
      "val": "90,000",
      "offset": 43
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_select_and_options(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    },
    {
      "val": "30,0000",
      "offset": 17
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_field_value(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "700",
      "offset": 13
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_and_feild_value(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    },
    {
      "val": "300",
      "offset": 21
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_and_feild_value(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_click_Work_out_how_much_I_could_borrow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_check_estimate_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_click_on_start_over_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.verify_form_has_been_clear()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "user get the correct estimate of borrowing",
  "description": "",
  "id": "calculator-and-tools;user-get-the-correct-estimate-of-borrowing;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user already open How much could I borrow? page in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user select  \"Single\",\"0\",and \"0\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"Home to live in\", and \"0\"options",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter  \"0\",\"0\" field value",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter  \"1\", \"0\" ,and \"0\" feild value.",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter  \"0\" and \"0\"feild value",
  "matchedColumns": [
    11,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click Work out how much I could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user check estimate amount",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on start over link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify form has been clear",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 52
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_already_on_How_much_could_I_borrow_page(String)"
});
formatter.result({
  "duration": 14135926100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 14
    },
    {
      "val": "0",
      "offset": 23
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_select_and(String,String,String)"
});
formatter.result({
  "duration": 458653500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home to live in",
      "offset": 13
    },
    {
      "val": "0",
      "offset": 36
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_select_and_options(String,String)"
});
formatter.result({
  "duration": 585329500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    },
    {
      "val": "0",
      "offset": 17
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_field_value(String,String)"
});
formatter.result({
  "duration": 365758800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    },
    {
      "val": "0",
      "offset": 18
    },
    {
      "val": "0",
      "offset": 27
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_and_feild_value(String,String,String)"
});
formatter.result({
  "duration": 825474100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    },
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "aznCalculatorAndToolStepDefinition.user_enter_and_feild_value(String,String)"
});
formatter.result({
  "duration": 605082000,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_click_Work_out_how_much_I_could_borrow_button()"
});
formatter.result({
  "duration": 5326086700,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_check_estimate_amount()"
});
formatter.result({
  "duration": 58059700,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.user_click_on_start_over_link()"
});
formatter.result({
  "duration": 150902900,
  "status": "passed"
});
formatter.match({
  "location": "aznCalculatorAndToolStepDefinition.verify_form_has_been_clear()"
});
formatter.result({
  "duration": 71473300,
  "error_message": "java.lang.AssertionError: Foram is clear\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat calculatorandtoolstepdefinition.aznCalculatorAndToolStepDefinition.verify_form_has_been_clear(aznCalculatorAndToolStepDefinition.java:140)\r\n\tat ✽.And verify form has been clear(C:/JavaSeleniumByJiterndra/Practicals/SeleniumPractical/AutomationScript/src/main/java/calculatorandtoolfeatures/azncalculatorandtools.feature:14)\r\n",
  "status": "failed"
});
});