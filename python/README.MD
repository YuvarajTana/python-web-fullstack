## Python fundamentals
#### Data Types
  - Numeric types - int, float

    ```Python

      # int 
        75475
        6500
        32

      # float
        2400.50
        843.75

    ```
  - String Type - str 

    ```Python
      # String with single quotes 
      'Sample String'

      # String with double quotes 
      "Hello"

      # String with single quotes 
      '''
        Sample string  with triple quutes
        Welcome to world of programming
      '''

    ```
  - Boolean type - bool 

    ```Python
      True
      False
    ```


#### Variables

  - Reserved memory location used to store values. It can be used to access those vaules later in life of program.


```Python

  name = "Prasad Kumar"
  age = 20 

```

#### Reserve keywords
```Python

  True
  False
  
  and
  or
  not
  

  if
  elif 
  else 

  for
  continue
  break 

  def
  pass 

  as
  is
  in

```

#### Indentifiers
    - User defined names to represent varaible, function, module and class or any other objects

    - Rules: 
        - Should not use reserve keywords (for - Invalid)
        - Should not start digit as indentifier nanme(  2name_tes - Invalid)
        - Sequeance of lowercase or uppercase
        - Mixed digits and underscore (_)


#### Operators
  - Operators are special symbols that perform operations on variables and values

  1. Logical operators
      - Logical and ( and )
      - Logical or ( or )
      - Logical not ( not )

  2. Arthmetic operators 
      - Addition ( + )
      - Subtraction ( - )
      - Multiplication ( * )
      - Division ( / )
      - Modulus operator ( % )
      - Exponent(Power) ( ** )

  3. Comparison operators
      - Equal ( == )
      - Not Equal ( != )
      - Greater than ( > )
      - Less than ( < )
      - Greater than or Equal to ( >= )
      - Less then or Equal to ( <= )

  4. Assignment operators 
      - Assignment operator ( = )
      - Addition Assignment  ( += )
      - Subtraction Assignment ( -= ) 
      - Multiplication Assignment ( *= )

#### Input and Output 

  1. print() method

```Python
  
  print("Hello World")

```

  2. input() method 

  ```Python
    name = input("Please enter your name : ")
    print("Hello "+name+" welcome to python learning")
  ```

#### Conditional Statements 
  - Will be used to run block of code if certain condition met

  1. Simple if ( if )
  
  ```Python

    # Syntax 
    if(condition):
      pass
      # code block

    # Check for even number 
    number = 20
    if( number % 2 == 0):
      # Thie block of code will get executed 
      print("Its a even number")
      
  ```

  2. if-else 

  ```Python
  
  # Syntax 
  if <Expression>:
    # if code block 
    pass
  else:
    # else code block
    pass
    # code block

  ```

    
  ```Python
    age = 20
    if(age >= 18):
      print("You are eligible to vote")
    else:
      print("You are not eligible for vote")

  ```
  3. nested if

    - If statement inside a if statement 

    ```Python
      if(True):
        # another if block inside if
        if(True):
          # block code inside nested if 
    ```

    ```Python
      # Print a positive number and should be greater than 20
      number = 22
      if( number > 0):
        if( number > 20):
          print("Its True")

    ```

  4. if - elif - else 


  ```Python
    # Assign grades to students based on marks
    # Grade A ==>  >= 85%
    # Grade B ==>  < 85% to >= 60
    # Grade C ==>  35 to 60
    # Grade D ==>  Failed => < 35
    
    totalMarks = 55

    if(totalMarks >= 85):
      print("You passed with GRADE A marks")
    elif(totalMarks >= 60 and totalMarks < 85):
      print("You passed with GRADE B marks")
    elif(totalMarks >= 60 and totalMarks < 85):
      print("You passed with GRADE C marks")
    else:
      print("Sorry, You are not clear the exam.")

  ```
#### Loops(Repetation)
A repetition statement is used to repeat a group(block) of programming instructions.

In Python, we generally have two loops/repetitive statements:
    for loop
    while loop

<!-- - Loops are useed to repeat block code till certain condition met
- When we want to run block of code for multiple times we will use loops -->

1. The while statement


  ```Python

    while <Expression>: 
      statements ===> This block of code will execute repeatdly, often referred as body of the looop

  ```

  ```Python
    # Syntax 
    maxNumber = 15
    startNumber = 4
    while startNumber <= maxNumber:
      print(startNumber)
      startNumber = startNumber + 1

  ```

2. The for statement

  - The for loop is used to run a block of code for a certain number of times. It is used to iterate over any sequences such as list, tuple, string
    
  ```Python
  # Syntax
  for val in sequeance:
    # statements

  ```

  ``` Python
  
  topPopulatedStates = ['Uttar Pradesh', 'Maharastra', 'Bihar',  'West Bengal', 'Madhya Pradesh']

  
  for state in topPopulatedStates:
    print(state)
  

  ```

#### List
- List is collection of data similar data and it can be same or data types
- Suppose we need to record top 5 states by population of. Instead of creating 5    
  separate variables, we can simply create a list

```Python

topPopulatedStates = ['Uttar Pradesh', 'Maharastra', 'Bihar',  'West Bengal', 'Madhya Pradesh']

```


#### Dictonaries 
  ```Python

  person_details = {
    name: "Ravi Kumar",
    age: 25
  }

  ```
  
#### functions
  ```Python

    def function_name(name):
      print(name)



  ```






  
