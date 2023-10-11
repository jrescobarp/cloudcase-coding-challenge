# cloudcase-coding-challenge
 
This readme will include instructions on how to run the program and also the notes I took while creating the program. 

How to run program:
    Clone or download repository
    within terminal or visual sudio code run the following commands:
        npm i 
        ng serve -o
    program will open in browser window
        click accordion menus to view forms
            First accordion option is the user form 
                submit will print user info as an object to a snackbar object
                cancel will delete all input fields
            Secondaccordion option is the tax/retirement calculator
                Calculate will do all the work
    View Program in mobile mode:
        Right click in browser and choose inspect 
        move newly opened window to smaller vertical screen sizes to view in mobile mode



Notes during development: 
    1. create onboarding form
        a. employee fields: 
            first_name
            middle_name
            last_name
            email
            address
            address2
            city
            state
            country
            zip_code
            position (position within the company ex: CEO, softwre dev, etc.)
            notes
        b. Why I made these choices: 
            I believe this is the general information required to onboard an employee. Any additional fields can be added upon request from the client quickly within the user model.
            I also provided a notes section within the employee model in case the client needs any other employee specific information that is not covered within the provided fields. 

    2. create annual taxt & retirement contribution calculator 
        a. calculator fields: 
            desired salary
            retirement contribution percentage (minimum 10%)
        b. Desired outputs: 
            annual tax 
            retirement contribution 

General steps taken to build out the forms:
    1. Design general form on Figma (Screenshot attached to this repo)
    2. build needed Components: Employee form, salary calculator
    3. add tax calculator logic
        taxable income brackets:
            0-18200 = no tax
            18201-37000 = .19 per dollar > 18200
            37001-90000 = .325 per dollar > 37000, +3572
            90001-180000 = .37 per dollar > 90000, +20797
            180001+ = .45 per dollar > 180000, +54097
    4. Add input validation
    5. add styling to forms

Test Cases: 
    Employee form:
        Check for required fields, do not submit if they are not input
            required fields: first_name, last_name ,email, address
        Test email validation 
            email must cotain @ and . in the proper places
    
    Calculator form:
        check for empty fields
        check if input meet minimum values:
            Salary > 1
            Retirment % > 10
