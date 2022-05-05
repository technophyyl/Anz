package utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class ReuseableMethods {
	public static WebDriver driver;
	public static Properties pro;

	public static WebDriver intil_browser(String browser) {

		if (browser.equalsIgnoreCase("Chrome")) {

			//System.setProperty(pro.getProperty("cdriver"), pro.getProperty("cdriver_path"));
			if (pro.getProperty("headless").equals("Yes")) {
				ChromeOptions option = new ChromeOptions();
				option.addArguments("---headless");
				driver = new ChromeDriver(option);
			} else
				driver = new ChromeDriver();
			
			driver.get(pro.getProperty("url"));
			driver.manage().timeouts().implicitlyWait(10000, TimeUnit.SECONDS);
		}

		if (browser.equalsIgnoreCase("Firefox")) {

			if (pro.getProperty("headless").equals("Yes")) {
				FirefoxOptions option = new FirefoxOptions();
				option.addArguments("---headless");
				driver = new FirefoxDriver();
			} else
				driver = new FirefoxDriver();
		}

		if (browser.equalsIgnoreCase("Edge")) {

			if (pro.getProperty("headless").equals("Yes")) {
				EdgeOptions option = new EdgeOptions();
				option.addArguments("---headless");
				driver = new EdgeDriver();
			} else
				driver = new EdgeDriver();
		}

		return driver;
	}

	public static void Intia_Property(String browser) {

		if (browser.equalsIgnoreCase("Chrome")) {
			System.setProperty(pro.getProperty("driver_name"), pro.getProperty("driver_path"));
		}
		else
			if (browser.equalsIgnoreCase("FireFox")) {
			System.setProperty(pro.getProperty("ffdriver"), pro.getProperty("ffdriver_path"));
		}
			else
				if (browser.equalsIgnoreCase("Edge")) {
			System.setProperty(pro.getProperty("eddriver"), pro.getProperty("eddriver_path"));
		}

	}

	public static Properties Setup_Properties_file(String Properties_page) {

		pro = new Properties();

		if (Properties_page.equalsIgnoreCase("azn.properties")) {
			File file = new File(
					"C:\\JavaSeleniumByJiterndra\\Practicals\\SeleniumPractical\\AutomationScript\\src\\main\\java\\utility\\azn.properties");
			try {
				FileInputStream fis = new FileInputStream(file);
				try {
					pro.load(fis);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		
		if(Properties_page.equalsIgnoreCase("Driver.properties")) {
		
			File file = new File("C:\\JavaSeleniumByJiterndra\\Practicals\\SeleniumPractical\\BBDCucumberGmail\\src\\main\\java"
					+ "\\com\\qa\\config\\Browser.properties");
			try {
				FileInputStream fis = new FileInputStream(file);
				try {
					pro.load(fis);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		if(Properties_page.equalsIgnoreCase("AllLocator.properties")) {
			
			File file = new File("C:\\JavaSeleniumByJiterndra\\Practicals\\SeleniumPractical\\AutomationScript\\src\\main\\java\\utility\\AllLocator.properties");
			try {
				FileInputStream fis = new FileInputStream(file);
				try {
					pro.load(fis);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
			
			if(Properties_page.equalsIgnoreCase("Registration.properties")) {
				
				File file = new File("C:\\JavaSeleniumByJiterndra\\Practicals\\SeleniumPractical\\BBDCucumberGmail\\src\\main"
						+ "\\java\\com\\qa\\config\\Registration.properties");
				try {
					FileInputStream fis = new FileInputStream(file);
					try {
						pro.load(fis);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				
			}
			return pro;
	}
}
