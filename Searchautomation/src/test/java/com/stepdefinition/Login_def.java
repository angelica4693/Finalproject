package com.stepdefinition;

	import java.io.IOException;

	import com.pages.Login;

	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;

	public class Login_def 
	{

		Login lp = new Login();

		@Given("^Open the URL in the browser$")
		public void open_the_URL_in_the_browser() 
		{
			// Write code here that turns the phrase above into concrete action
			lp.launch("Chrome");
			lp.LoginPage("http://automationpractice.com/index.php");
		}

		@When("^click signin$")
		public void click_signin() throws InterruptedException  
		{
			// Write code here that turns the phrase above into concrete action
			lp.Signin(); 
		}

		@When("^Enter valid Usernameandpassword$")
		public void enter_valid_Usernameandpassword() throws IOException, InterruptedException 
		{
			// Write code here that turns the phrase above into concrete actions

			for(int i=1;i<=1;i++)
			{
				lp.usernameandpassword(i);
				lp.Click(); 
				if(i<=1)

				{
					lp.launch("Chrome");
					lp.LoginPage("http://automationpractice.com/index.php");
					lp.Signin(); 
				}
			}

		}


		@Then("^Click on signin$")
		public void click_on_Signin() throws InterruptedException 
		{
			// Write code here that turns the phrase above into concrete action
			lp.Click();  
			Thread.sleep(4000);
			lp.Close();
		}


	}
