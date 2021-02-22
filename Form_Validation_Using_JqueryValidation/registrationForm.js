var auth_token='';
async function get_auth_token(){
    
    var res=await axios.get("https://www.universal-tutorial.com/api/getaccesstoken",{
        headers:{
            "api-token":"2FRMyLHjPa20KTrrfqqKXhIJgYDDfHjaSXkV1zfuGjGIntD1KxV77msmFNYgn7_Gq5Y",
            "user-email":"smarterkanha@gmail.com"
        }
    });
    auth_token = res.data.auth_token;
}
let dropdown=document.getElementById('country');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Country';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0
async function get_country(){
    var res=await axios.get("https://www.universal-tutorial.com/api/countries/",{
        headers:{
            "Authorization":`Bearer ${auth_token}`
        }
    });
    var country=document.querySelector("#country");
    var html=''; 
    for(let i=0;i<res.data.length;i++){
        option=document.createElement('option');
        option.text=res.data[i].country_name;
        option.value=res.data[i].country_name;
        dropdown.add(option);
    }
    country.innerHTML+=html;    
}
let dropdown1=document.getElementById('state');
let defaultOption1 = document.createElement('option');
defaultOption1.text = 'Choose State';
dropdown1.add(defaultOption1)
async function get_state(country)
{
    var res=await axios.get(`https://www.universal-tutorial.com/api/states/${country}`,{
        headers:{
            "Authorization":`Bearer ${auth_token}`
        }
    });
    var state=document.querySelector("#state");
    var html='<option value="">Select State</option>';
    for(let j=0;j<res.data.length;j++){
        option1=document.createElement('option');
        option1.text=res.data[j].state_name;
        option1.value=res.data[j].state_name;
        dropdown1.add(option1);
    }
    state.innerHTML+=html;
}
window.onload=(async ()=>{
    
    await get_auth_token();
    await get_country();
    var country=document.querySelector("#country");
    var state=document.querySelector("#state");
    country.addEventListener("change",async ()=>{ 
            await get_state(country.value);
            state.disabled=false;
    });
});



$().ready(function(){
    $("#registrationForm").validate({
        rules: {
            firstname:"required",
            lastname:"required",
            birthdate:{
                required:true
                // daterange:true
            },
            // gender:"required",
            address:"required",
            country:"required",
            state:"required",
            pincode:"required",
            phonenumber:{
                required:true
                // mobileNumber:true 
            },
            email:"required",
            password:{
                required:true,
                strongPassword:true,
                minlength:6
            },
            confirmPassword:{
                required:true,
                minlength:6,
                equalTo:"#password"
            }
        },
        messages: {
            firstname:"Please fill First Name!",
            lastname:"Please fill Last Name!",
            birthdate:"Please fill BirthDate!",
            // gender:"Choose your gender",
            address:"Enter Address!",
            country:"Select Country!",
            state:"Select State!",
            pincode:"Enter PinCode!",
            phonenumber:"Mobile number is mandatory!",
            email:"Email is mandatory!",
            password:{
                required:"Enter Password!",
                minlength:"It should be greater than or equal to 6!"
            },
            confirmPassword:{
                required:"Confirm your Password!",
                minlength:"It should be greater than or equal to 6!",
                equalTo:"Not matching!"
            }
        },
        // errorElement : "div",
        // errorLabelContainer : ".errorText"
    });
    $.validator.addMethod('strongPassword',function(value, element){
        return this.optional(element)
        || /\d/.test(value) && /[a-z]/i.test(value);
    },"Atleast one alphabet and one number required.");

    $.validator.addMethod('countryCheck',function(value,element){
        return this.optional(element)
        || value==="";
    },"Choose country!");
   // $(country)[0]. reset();

    $.validator.addMethod('stateCheck',function(value,element){
        return this.optional(element)
        || value==="";
    },"Choose state!");

    // $("#country").blur(
    //     function(){
    //         if($(this).val() !== ''){
    //             $('#country-error').hide();
    //             console.log('jh');
    //         } 
    //     }
    // );
    
    // $("#state").blur(
    //     function(){
    //         if($(this).val()){
    //             $('#state-error').hide();
    //             console.log('jh');
    //         } 
    //     }
    // );

    // $validator.addMethod('mobileNumber',function(value, element){
    //     return this.optional(element)
    //     || value.length === 10;
    // },"Number should be of 10 digits");

    // $.validator.addMethod('daterange', function(value, element) {
    //     var date = ['01-01-2002','01-01-1991']
    //     var startDate = Date.parse(date[0]),
    //         endDate = Date.parse(date[1]),
    //         enteredDate = Date.parse(value);   
    //     return this.optional(element)
    //     || enteredDate>=startDate && enteredDate <=endDate;   
    // }, "Your age should be betweeen 18 to 30 years");
});