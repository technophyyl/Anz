package calculatorandtoolstepdefinition;

import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import utility.ReuseableMethods;

public class aznCalculatorAndToolStepDefinition {
	WebDriver driver;
	@Given("^user already open How much could I borrow\\? page in \"([^\\\"]*)\"$")
	public void user_already_on_How_much_could_I_borrow_page(String arg1)  {
		ReuseableMethods.Setup_Properties_file("azn.properties");
		ReuseableMethods.Intia_Property("chrome");
		driver = ReuseableMethods.intil_browser("chrome");
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		   
	}

	@Then("^user select  \"([^\"]*)\",\"([^\"]*)\",and \"([^\"]*)\"$")
	public void user_select_and(String arg1, String arg2, String arg3) {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		if(arg1.equalsIgnoreCase("Joint")) {
			
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("application_type_option1"))).click();;
		//JavascriptExecutor js1 = (JavascriptExecutor)driver;
		//js1.executeScript("argument[0].click;", option1);
		
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("2nd_applicant's_annual_income"))).sendKeys(arg2);
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("2nd_applicant's_annual_other_income"))).sendKeys(arg3);
		
			
		}else
		{
			 driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("application_type_option2"))).click();
			//JavascriptExecutor js2 = (JavascriptExecutor)driver;
			//js2.executeScript("argument[1].click;", option2);
		}
	}

	@Then("^user select \"([^\"]*)\", and \"([^\"]*)\"options$")
	public void user_select_and_options(String arg1, String arg2) {
		
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		if(arg1.equalsIgnoreCase("Home to live in") || arg1.equalsIgnoreCase("Residential investment")) {
			
			driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("borrow_type_home_1"))).click();
			//JavascriptExecutor js3 = (JavascriptExecutor)driver;
			//js3.executeScript("argument[0].click;", option3);
			
		}else
		{
			driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("borrow_type_home_2"))).click();
			//JavascriptExecutor js4 = (JavascriptExecutor)driver;
			//js4.executeScript("argument[0].click;", option4);
		}
		
	    driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Your_annual_income_(beforetax)"))).sendKeys(arg2);
	}

	@Then("^user enter  \"([^\"]*)\",\"([^\"]*)\" field value$")
	public void user_enter_field_value(String arg1, String arg2)  {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		WebElement number_dependant = driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Number_of_dependants")));
		Select number_dependant_dropdown = new Select(number_dependant);
		
		number_dependant_dropdown.selectByVisibleText(arg1);
	
		
		
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Your_annual_other_income_(optional)"))).sendKeys(arg2);
		
	}

	@Then("^user enter  \"([^\"]*)\", \"([^\"]*)\" ,and \"([^\"]*)\" feild value\\.$")
	public void user_enter_and_feild_value(String arg1, String arg2, String arg3)  {
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Monthly_living_expenses"))).sendKeys(arg1);
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Current_home_loan_monthly_repayments"))).sendKeys(arg2);
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Other_monthly_commitments"))).sendKeys(arg3);
	}

	@Then("^user enter  \"([^\"]*)\" and \"([^\"]*)\"feild value$")
	public void user_enter_and_feild_value(String arg1, String arg2) {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Total_credit_card_limits"))).sendKeys(arg1);
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Other_loan_monthly_repayments"))).sendKeys(arg2);
		
	}

	@Then("^user click Work out how much I could borrow button$")
	public void user_click_Work_out_how_much_I_could_borrow_button()  {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Work_out_how_much_I_could_borrow_btn"))).click();
		//JavascriptExecutor js = (JavascriptExecutor)driver;
		//js.executeScript("argument[0].click;", btn);
		
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("^user check estimate amount$")
	public void user_check_estimate_amount() throws Throwable {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		String bodyText = driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("estimate_count"))).getText();
		Assert.assertSame(bodyText, bodyText);
	}

	@Then("^user click on start over link$")
	public void user_click_on_start_over_link() {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties");
		driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("start_over"))).click();
		//JavascriptExecutor js5 = (JavascriptExecutor)driver;
		//js5.executeScript("argument[0].click;", btn_1);
		
	}

	@Then("^verify form has been clear$")
	public void verify_form_has_been_clear()  {
		ReuseableMethods.Setup_Properties_file("AllLocator.properties"); 
		List<WebElement> fields = driver.findElements(By.xpath("//input[@value='0']"));
	    for(WebElement fields1:fields )
	    {
	           Assert.assertTrue("Foram is clear", fields1.getText().equals("0")); 
	           }
	    List<WebElement> fields2 = driver.findElements(By.xpath("//input[@type='radio']"));
	    for(WebElement fields11:fields2 )
	    {
	    	Assert.assertTrue("Foram is clear", (fields11.getText().equalsIgnoreCase("Single") ||fields11.getText().equalsIgnoreCase("Home to live in"))); 
	           }
	    
	    String number_dependant_1 = driver.findElement(By.xpath(ReuseableMethods.pro.getProperty("Number_of_dependants"))).getText();
		Assert.assertSame(number_dependant_1, "0");
		
		


	

}
}
