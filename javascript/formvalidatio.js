//login form
function loginform()
        {
            var logemail = document.forms["loginform"]["logemail"].value;
            var logpw = document.forms["loginform"]["logPassWord"].value;

			
            if (logemail==null || logemail=="")
            {
                alert("Your Email must be filled out");
                return false;
            }
            else if (logPassWord==null || logPassWord=="")
            {
                alert("Your PassWord must be filled out");
                return false;
            }
            else{
                alert("Log In is Successful")
            }

        }


//function contact form
//        {
//            var logemail = document.forms["loginform"]["FirstName"].value;
//            var logpw = document.forms["Form"]["LastName"].value;
//            var em = document.forms["Form"]["Email"].value;
//
//            var ra = document.forms["contactform"]["Radd"].value;
//            var pn = document.forms["Form"]["Pnum"].value;
//            var st = document.forms["Form"]["State"].value;
//            var lg = document.forms["Form"]["Lga"].value;
//            var wd = document.forms["Form"]["Word"].value;
//
//            //LOGIN INFORMATION
//            var pw = document.forms["Form"]["Password"].value;
//            var cpw = document.forms["Form"]["ComfirmPassword"].value;
//
//            //PERSONAL INFORMATION
//            if (fn==null || fn=="")
//            {
//                alert("First Name must be filled out");
//                return false;
//            }
//            else if (ln==null || ln=="")
//            {
//                alert("Last Name must be filled out");
//                return false;
//            }
//            else if (em==null || em=="")
//            {
//                alert("Email Address must be filled out");
//                return false;
//            }
//
//            else if (ra==null || ra=="")
//            {
//                alert("Resident Address must be filled out");
//                return false;
//            }
//            else if (pn==null || pn=="")
//            {
//                alert("Phone Number must be filled out");
//                return false;
//                if (isNaN(pn)){
//                    alert("Please Only Number is allow!")
//                }
//            }
//            else if (st==null || st=="")
//            {
//                alert("State must be filled out");
//                return false;
//            }
//            else if (lg==null || lg=="")
//            {
//                alert("Local Government Area must be filled out");
//                return false;
//            }
//            else if (wd==null || wd=="")
//            {
//                alert("Word must be filled out");
//                return false;
//            }
//
//            //LOGIN INFORMATION
//            else if (pw==null || pw=="")
//            {
//                alert("PassWord must be filled out");
//                return false;
//            }
//            else if (cpw==null || cpw=="")
//            {
//                alert("Comfirm PassWord must be filled out");
//                return false;
//            }
//            else if (pw != cpw)
//            {
//                alert("Your Filled Different PassWord");
//                return false;
//            }
//            else{
//                alert("Your Information is Successful")
//            }
//
//        }