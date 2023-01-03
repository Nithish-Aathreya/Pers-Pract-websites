function compute()
{
    let principal = document.getElementById("principal").value;
    if(principal == "" || principal <= 0)
    // OR operation : returns true when any cases gets true
    {
        alert("Enter a positive number"); //Modal window
        document.getElementById("principal").focus(); //Takes focus of the user back to the input box
        return; //true statement should be written to validate the allowed user entry
     
    }
    
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value
    principal * years * rate / 100 //logic to calculate the amount of interest that gets added to amount
    let interest = principal * years * rate /100;
    let year = new Date().getFullYear()+parseInt(years)
    //.getfullyear() extracts current full year from new Date()
    // The No. of years for which interest is calculating should get added to the current year.
    let result = document.getElementById("result")
    result.innerHTML = "If you deposit " + "<mark>" + principal + "</mark>,"  + " <br> at an interest rate of "+ "<mark>" + rate + "</mark>%," + "<br> You will receive an amount of " + "<mark>" + interest + "</mark>" + ", <br> in the year " + "<mark>" + year + "</mark>";
} 
function updateRate() 
{
    let rateval = document.getElementById("rate").value; // Accessed the value of rate
    document.getElementById("rate_val").innerText=rateval; // Displaying the rate value in span element
}