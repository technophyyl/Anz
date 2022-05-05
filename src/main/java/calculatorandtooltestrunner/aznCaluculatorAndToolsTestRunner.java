package calculatorandtooltestrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\JavaSeleniumByJiterndra\\Practicals\\SeleniumPractical\\AutomationScript\\src\\main\\java\\calculatorandtoolfeatures\\azncalculatorandtools.feature",
		glue= {"calculatorandtoolstepdefinition"},
		format= {"pretty", "html:test-outpout"},
		dryRun= false,
		strict=false
		
		)

public class aznCaluculatorAndToolsTestRunner {

}
