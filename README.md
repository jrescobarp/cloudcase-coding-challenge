# cloudcase-coding-challenge
 
This readme will include instructions on how to run the program and also the notes I took while creating the program. 



Notes: 
    1. create onboarding form
        a. employee fields: 
            first_name
            last_name
            email
            address
            city
            state
            country
            zip_code
            position
        b. Why I made these choices: 
            I believe this is the general information required to onboard an employee, I also provided a notes section within the mployee model in case the client needs any other random information for a specific employee that is not covered within the fields.

    2. create annual taxt & retirement contribution calculator 
        a. calculator fields: 
            desired salary
            retirement contribution percentage (minimum 10%)
        b. Desired outputs: 
            annual tax 
            retirement contribution 

    
    
Steps taken to build out the form:
    1. Design general form on Figma (Screenshot attached to this repo)
    2. build needed Components: Employee form, salary calculator
    3. add tax calculator logic
        taxable income brackets:
            0-18200 = no tax
            18201-37000 = .19 per dollar > 18200
            37001-90000 = .325 per dollar > 37000, +3572
            90001-180000 = .37 per dollar > 90000, +20797
            180001+ = .45 per dollar > 180000, +54097
    4. add styling to form


