Feature: Calculator and tools

Scenario Outline: user get the correct estimate of borrowing

Given user already open How much could I borrow? page in "<browser_name>"
Then user select  "<Application Type>","<2nd applicant's annual other income>",and "<2nd applicant's annual income (before tax)>"
Then user select "<Property you would like to buy>", and "<annual income (before tax)>"options
Then user enter  "<Number of dependants>","<Your annual other income (optional)>" field value
Then user enter  "<Monthly living expenses>", "<Current home loan monthly repayments>" ,and "<Other monthly commitments>" feild value.
Then user enter  "<Total credit card limits>" and "<Other loan monthly repayments>"feild value
Then user click Work out how much I could borrow button
Then user check estimate amount 
Then user click on start over link
And verify form has been clear 

Examples:
|browser_name|Application Type|2nd applicant's annual other income|2nd applicant's annual income (before tax)|Property you would like to buy|annual income (before tax)|Number of dependants|Your annual other income (optional)|Monthly living expenses|Current home loan monthly repayments|Other monthly commitments|Total credit card limits|Other loan monthly repayments|
|chrome		 |Single 		  | 0								  |0										 | Home to live in			    | 80,000				   | 0				    | 10,0000						    |500					| 0									 | 0					   |	0				    |100						  |
|chrome		 |Joint			  |80,000							  |1,00,000									 | Residential investment	    | 90,000				   | 2				    | 30,0000						    |700				   	| 0									 | 0					   |	0					|300						  |
|chrome		 |Single 		  | 0								  |0										 | Home to live in			    | 0					  	   | 0				    | 0						   		    |1				   	    | 0									 | 0					   |	0				    |0							  |




