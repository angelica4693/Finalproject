package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.excelutility.Excel;

public class Login 
{
	WebDriver driver;
	public void launch(String browser) 
	{ 	
		try
		{
			// for launching chrome browser 
			if(browser.equalsIgnoreCase("chrome"))
			{
				System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Drivers\\chromedriver.exe");
				driver =new ChromeDriver();
			}

			// for launching firefox browser
			else if(browser.equalsIgnoreCase("firefox"))
			{
				System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Drivers\\geckodriver.exe");
				driver =new FirefoxDriver();
			}
		}

		// for throwing Exceptions
		catch(WebDriverException e)
		{
			System.out.println("driver not avilable");
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(300, TimeUnit.SECONDS);
	}

// For launching login page
	public void LoginPage(String url)
	{
		driver.get(url);
		System.out.println(driver.getTitle());

	}
	

	public void Signin() throws InterruptedException
	{
		driver.findElement(By.xpath("//*[@id=\"header\"]/div[2]/div/div/nav/div[1]/a")).click();
		Thread.sleep(4000);
	}

	// To get login details from excel sheet
	public void usernameandpassword(int i) throws IOException
	{
		Excel e=new Excel();
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(e.excel_username(i));
		WebElement d = driver.findElement(By.xpath("//*[@id=\"email\"]"));
		d.click();
		driver.findElement(By.xpath("//*[@id=\"passwd\"]")).sendKeys(e.excel_password(i));
		WebElement f = driver.findElement(By.xpath("//*[@id=\"passwd\"]"));
		f.click();

	}

	//Clicking sign in button
	
	public void Click()
	{
		driver.findElement(By.xpath("//*[@id=\"SubmitLogin\"]/span")).click();
	}


	public void Close()
	{
		driver.close();
	}
}



