<template>
    <div>
        <h1 class="d-flex justify-content-between">Task 4: Add some functionalities to the given HTML
            <button class="btn btn-sm btn-secondary float-right mr-2" @click="$router.go(-1)">GO BACK</button></h1>
        <div>
            <div class="container" style="text-align: initial">
                <form @submit.prevent="onSubmit" ref="formReset" class="mt-4 p-3" id="form-target" novalidate>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="form-subject">a) Subject</label>
                            <input type="text" class="form-control" id="form-subject" value="" placeholder="Subject">
                            <span class="error_show">This field is required</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <p class="mb-0">b) Do you want to state your name?</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio" @click="checkStateName" id="radio1" value="yes"
                                       checked>
                                <label class="form-check-label" for="radio1">Yes</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio" @click="checkStateName" id="radio2" value="no">
                                <label class="form-check-label" for="radio2">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-row" id="name_email_group">
                        <div class="col-md-6 mb-3">
                            <label for="first-name">c) First name</label>
                            <input type="text" class="form-control" id="first-name" value="" placeholder="First Name">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="last-name">d) Last name</label>
                            <input type="text" class="form-control" id="last-name" value="" placeholder="Last Name">
                        </div>
                        <div class="col-md-12 mb-3">
                            <label for="email">e) Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com">
                            <span class="checkemail_error_show">Please enter a valid email address. It must be in Form
                                name@example.com</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="country">f) Country</label>
                            <select class="custom-select" @change="checkCountry" id="country" >
                                <option v-for="(country,i) in countries" :key="i">{{ country }}</option>
                            </select>
                            <span class="choosecountry_error_show">You have to at least a country</span>
                        </div>
                        <div class="col-md-6 mb-3 class-other-country">
                            <label for="other-country">g) Define Other</label>
                            <input type="text" class="form-control" id="other-country" value="" placeholder="Other Country">
                            <span class="othercountry_error_show">You have to enter at least 3 characters</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-8 mb-3">
                            <label for="city">h) City</label>
                            <input type="text" class="form-control" id="city" placeholder="Berlin">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="zip">i) Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="12345">
                            <span class="zip_error_show">when you typed your city, you have to filled this field too.</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label for="textarea">j) Additional Informations</label>
                            <span class="textarea_limit ml-5"><strong>{{ limit }}</strong> of <strong>1000</strong> characters</span>
                            <textarea maxlength="1000" v-on:keyup="limitTextArea" class="form-control" id="textarea" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck">
                            <label class="form-check-label" for="invalidCheck">
                                k) Agree to terms and conditions
                            </label>
                            <span class="checkbox_error_show">Can't proceed as you didn't agree to the terms! You have to check it.</span>
                        </div>
                    </div>
                    <button class="btn btn-primary"  type="submit">l) Submit form</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import $ from "jquery"
    import OutputForm from "../../entity/OutputForm.json"


    export default {
        name: "AddFunctionalities",
        props: {
            msg: String,
            msgArrayForm: String
        },
        data() {
            return {
                limit: 0,
                countries:this.sortCountryAlphabetically()
            }
        },
        methods: {
            onSubmit(e) {
                let error_free = true
                let checkFormCheckBox = this.checkFormCheckBox()
                let checkSubject = this.checkSubject()
                let checkEmail = this.checkEmail()
                let checkOtherCountry = this.checkOtherCountry()
                let checkCityZip = this.checkCityZip()
                if (checkFormCheckBox && checkSubject && checkEmail
                    && checkOtherCountry && checkCityZip){
                    error_free = true
                }
                else {
                    error_free = false
                }
                if (error_free){
                    let subject = $("#form-subject").val()
                    let privateInfo = false
                    let firstname = "";
                    let lastname = "";
                    let email = "";
                    if ($(".form-check #radio1").is(":checked")){
                        firstname = $("#first-name").val()
                        lastname = $("#last-name").val()
                        email = $("#email").val()
                        privateInfo = true
                    }
                    let country = ""
                    if ($(".class-other-country").is(":visible")){
                        country  = $("#other-country").val()
                    }
                    else {
                        country = $("#country :selected").val()
                    }
                    let information = $("#textarea").val()
                    let city = $("#city").val()
                    let zip = $("#zip").val()
                    let outputForm = OutputForm
                    outputForm.subject = subject
                    outputForm.statename = privateInfo
                    outputForm.firstname = firstname
                    outputForm.lastname = lastname
                    outputForm.email = email
                    outputForm.country = country
                    outputForm.city = city
                    outputForm.zip = zip
                    outputForm.addInfos = information
                    this.$refs.formReset.reset()
                    $(".class-other-country").hide()
                    console.log("output",outputForm)
                    alert(
                        "Subject: " + outputForm.subject+
                            "\n"+
                        "Firstname: " + outputForm.firstname+
                        "\n"+
                        "Lastname: " + outputForm.lastname+
                        "\n"+
                        "Email: " + outputForm.email+
                        "\n"+
                        "Country: " + outputForm.country+
                        "\n"+
                        "City: " + outputForm.city+
                        "\n"+
                        "Zip: " + outputForm.zip+
                        "\n"+
                        "Additional Information: " + outputForm.addInfos+
                        "\n"+
                    "Or you can see it in the browser console")

                }
            },
            sortCountryAlphabetically(){
                //this is lazy version when we use vue
                var countries = ["- Please Choose -", "Germany", "Austria", "Switzerland", "Poland",
                    "Netherlands", "France", "Italy", "Other Country"];
                countries.sort();

                //if we dont use vue, just normal html, we can do the following:
                //Take back all options
                //var select = $('#country');
                //get the default(the selected) option
                //var selected = select.val();
                //and Now find all options
                //var options = select.find('option');
                // sort this options with sort function of js
                //sort(function(a, b) {// here we sort by text of options})
                //now add the options back to select with append
                //append(newOptions);
                //set the default value(we already took it back before)
                //select.val(selected);

                return countries
            },
            limitTextArea(){
                    let count = $("#textarea").val().length
                    this.limit = count
            },
            checkOtherCountry(){
                var error_free=true;
                if ($(".class-other-country").is(":visible")){
                    let other_country_value = $("#other-country").val()
                    if (other_country_value.length<3){
                        $("#other-country").addClass("invalid")
                        $(".othercountry_error_show").show()
                        error_free = false
                    }else {
                        $("#other-country").removeClass("invalid")
                        $(".othercountry_error_show").hide()
                        error_free = true
                    }
                    $('#other-country').on('input', function () {
                        let other_country_value = $("#other-country").val()
                        if (other_country_value.length<3){
                            $("#other-country").addClass("invalid")
                            $(".othercountry_error_show").show()
                            error_free = false
                        }else {
                            $("#other-country").removeClass("invalid")
                            $(".othercountry_error_show").hide()
                            error_free = true
                        }
                    });
                }else {
                    function checkChooseCountry(){
                        let selectedCountry = $("#country :selected").val()
                        if (selectedCountry === "- Please Choose -"){
                            $("#country").addClass("invalid")
                            $(".choosecountry_error_show").show()
                            error_free = false
                        }
                        else {
                            $("#country").removeClass("invalid")
                            $(".choosecountry_error_show").hide()
                            error_free = true
                        }
                    }
                    checkChooseCountry()
                    $("#country").on("change", function () {
                        checkChooseCountry()
                    })
                }
                return error_free
            },
            checkCityZip(){
                var error_free=true;
                let city = $("#city").val()
                if (city.trim().length !== 0){
                    let zip = $("#zip").val()
                    if (zip.trim().length ===0){
                        $("#zip").addClass("invalid")
                        $(".zip_error_show").show()
                        error_free = false
                    }
                    else {
                        $("#zip").removeClass("invalid")
                        $(".zip_error_show").hide()
                        error_free = true
                    }
                    $("#zip").on("input",function () {
                        $("#zip").removeClass("invalid")
                        $(".zip_error_show").hide()
                        error_free = true
                    })

                    }else {
                    $("#zip").removeClass("invalid")
                    $(".zip_error_show").hide()
                    error_free = true
                }
                $("#city").on("input",function () {
                    if ($("#city").val().trim().length ===0){
                        $("#zip").removeClass("invalid")
                        $(".zip_error_show").hide()
                        error_free = true
                    }else {
                        $("#zip").addClass("invalid")
                        $(".zip_error_show").show()
                        error_free = false
                    }
                    $("#zip").on("input",function () {
                        $("#zip").removeClass("invalid")
                        $(".zip_error_show").hide()
                        error_free = true
                    })

                })
                return error_free
                },
            checkStateName(){
                let radio1=$(".form-check #radio1").is(":checked")
                let radio2=$(".form-check #radio2").is(":checked")
                if (radio1){
                    $("#name_email_group").show()
                }
                if (radio2){
                    $("#name_email_group").hide()
                }
            },
            checkEmail(){
                var error_free=true;
                if (document.getElementById("name_email_group").style.display !== "none"){
                    let email = $("#email").val()
                    if (/\S+@\S+\.\S+/.test(email)){
                        $("#email").removeClass("invalid")
                        $(".checkemail_error_show").hide()
                        error_free = true
                    }else {
                        $("#email").addClass("invalid")
                        $(".checkemail_error_show").show()
                        error_free = false
                    }
                    $('#email').on('input', function () {
                        let email = $("#email").val()
                        if (/\S+@\S+\.\S+/.test(email)){
                            $("#email").removeClass("invalid")
                            $(".checkemail_error_show").hide()
                            error_free = true
                        }else {
                            $("#email").addClass("invalid")
                            $(".checkemail_error_show").show()
                            error_free = false
                        }
                    });
                }
                else {
                    error_free = true
                }
                return error_free
            },
            checkCountry(){
                let selectedCountry = $("#country :selected").val()
                if (selectedCountry === "Other Country"){
                    $(".class-other-country").show()
                }else {
                    $(".class-other-country").hide()
                }
            },
            checkSubject() {
                var error_free=true;
                if ($("#form-subject").val().trim().length === 0) {
                    $("#form-subject").addClass("invalid")
                    $(".error_show").show()
                    error_free = false
                }
                $('#form-subject').on('input', function () {
                    $("#form-subject").removeClass("invalid")
                    $(".error_show").hide()
                    error_free = true
                });
                return error_free
            },
            checkFormCheckBox() {
                var error_free=true;
                if (!$("#invalidCheck").is(':checked')) {
                    $("#invalidCheck").addClass("checkbox-invalid")
                    $(".checkbox_error_show").show()
                    error_free=false;
                }
                $('#invalidCheck').on('change', function () {
                    $("#invalidCheck").removeClass("checkbox-invalid")
                    $(".checkbox_error_show").hide()
                    error_free=true;
                });
                return error_free
            },
        }
    }
</script>

<style scoped>
    .invalid {
        border: 2px solid red;
    }
    .checkemail_error_show{
        width: 100%;
        display: none;
        color: red;
    }
    .zip_error_show{
        width: 100%;
        display: none;
        color: red;
    }
    .othercountry_error_show{
        width: 100%;
        display: none;
        color: red;
    }

    .error_show {
        width: 100%;
        display: none;
        color: red;
    }.choosecountry_error_show {
        width: 100%;
        display: none;
        color: red;
    }

    .checkbox_error_show {
        width: 100%;
        display: none;
        color: red;
    }
    .textarea_limit{
        color: #12131382;
    }

    .form-check-input.checkbox-invalid {
        outline-style: auto;
        outline-color: red;
    }
    .class-other-country{
        display: none;
    }

</style>