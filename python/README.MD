## Python fundamentals
### List of concepts
- [Data Types](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#data-types)
- [Variables](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#variables)
- [Reserve Keywords](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#reserve-keywords)
- [Identifiers](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#indentifiers)
- [Operators](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#operators)
- [Input/Output](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#input-and-output)
- [Conditional Statements](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#conditional-statements)
- [Loops](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#loopsrepetation)
- [List](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#list)
- [Dictionaries](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#dictonaries)
- [Functions](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#functions)
- [Class](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#class)
- [Modules](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#modules)
- [Packages](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#Packages)
- [Error and Exceptions](https://github.com/YuvarajTana/python-web-fullstack/tree/main/python#ErrorAndExpceptions)


### Data Types
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


### Variables

  - Reserved memory location used to store values. It can be used to access those vaules later in life of program.


```Python

  name = "Prasad Kumar"
  age = 20 

```

### Reserve keywords
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
  
  class
  

```

### Indentifiers
    - User defined names to represent varaible, function, module and class or any other objects

    - Rules: 
        - Should not use reserve keywords (for - Invalid)
        - Should not start digit as indentifier nanme(  2name_tes - Invalid)
        - Sequeance of lowercase or uppercase
        - Mixed digits and underscore (_)


### Operators
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

### Input and Output 

  1. print() method

```Python
  
  print("Hello World")

```

  2. input() method 

  ```Python
    name = input("Please enter your name : ")
    print("Hello "+name+" welcome to python learning")
  ```

### Conditional Statements 
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

### Loops(Repetation)
- A repetition statement is used to repeat a group(block) of programming instructions.
- In Python, we generally have two loops/repetitive statements:
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
  - for with range 

  ```Python
  for i in range(5):
    print(i)
    
  ```

### List

- List is collection of similar data and it can be same or data types
- Suppose we need to record top 5 states by population of. Instead of creating 5    
  separate variables, we can simply create a list

```Pyhton

  # The list can be created as []

  empty_list = []


```


```Python

topPopulatedStates = ['Uttar Pradesh', 'Maharastra', 'Bihar',  'West Bengal', 'Madhya Pradesh']

```

- List operations
  
  - append(item) : It adds an item to end of the list

  ``` Python
  
  fruits = ['apple','oranges']
  
  fruits.append('Bananas')

  # Now fruits will be like this ['apple','oranges','Bananas']

  ```

  - pop : It is used to remove list item from the list 

  ``` Python
      fruits = ['apple','oranges', 'Bananas', 'Grapes', 'Kiwi']
  
      fruits.pop() # This will remove the last item from the list 

      # Now the result list is ['apple','oranges', 'Bananas', 'Grapes']

      # We can also remove the specific list item 

      fruits.pop(2) # This will removes 'Bananas' from the list 

      # Now the final list will be ['apple','oranges','Grapes']

  ```
  - insert : It inserts an item at a given position 
  
  - Syntax - list.insert(index,value)

  ``` Python
      fruits = ['apple','oranges', 'Bananas', 'Grapes']
  
      fruits.insert(2,'Straberry') # This will insert item at index 2 

      # Now the final list will be ['apple','oranges', 'Straberry' 'Bananas', 'Grapes']
  ```

  - remove : It removes first matched item from the list

  ``` Python
    fruits = ['apple','oranges', 'Bananas', 'Grapes', 'Kiwi']

    fruits.remove('Bananas') # This will remove the last item from the list 

    # Now the final list will be ['apple','oranges', 'Grapes']

  ```
  - clear : It removes all items from the list
  
  ``` Python
  fruits = ['apple','oranges', 'Bananas', 'Grapes', 'Kiwi']

  fruits.clear('Bananas') # This will removes all items from the list

  # Now the final list will be []

  ```
  - Reverse : It reverse items from the list

  ``` Python
  fruits = ['apple','oranges', 'Bananas', 'Grapes', 'Kiwi']

  fruits.reverse() # This will reverse the all items of the list

  # Now the final list will be ['Kiwi', 'Grapes', 'Bananas', 'oranges', 'apple']

  ```
  - How to check an item/value exists in list

    - Using in operator 

    ```Python

    fruits = ['apple','oranges', 'Bananas', 'Grapes', 'Kiwi']

    if('apple' in fruits): # True
      print('Apple found in the list')
    else:
      print('Apple not found in the list')
    
    ```
    
    - Using for loop

    ```Python

    fruits = ['apple','oranges', 'Bananas', 'Grapes', 'Kiwi']
    for fruit in fruits:
      if( fruit == 'apple'): # True
        print('Apple found in the list')
      else:
        print('Apple not found in the list')

    ```

### Dictonaries 
- Dictionary represnts a collection of key and value pairs, here keys are unique identifiers that are mapped with each value

- Syntax

```Python
  dictionary_name = {
    key : value
  }
``` 

```Python
# When we want to store collection / group of releated with keys and values, we can go for dictionaries 

person_details = {
  name: "Ravi Kumar",
  age: 25,
  city: "Bengaluru"
}

```
- Working with dictnaries 

  - Creating dictonaries 
  ```Python
    employee_details = {
      id : 1001,
      name: "Ravi Kumar",
      salary: 2600000,
      department: "Engineering",
      designation: "Senior Software Engineer"
    }

  ```
  - Adding key and values to already created dictionary 

  ```Python
  
  employee_details['reportingManager'] = 'Santosh'

  
  
  ```
  - Changing value of the key from the dictionary

  ```Python
  employee_details['salary'] = 3500000
  ```
  - How to access values from the dictionary
  ```Python
  print(employee_details['id'])
  ```



### functions
- A function is block of organized code to perform single task. It provides better modularity and re usability

- Syntax : 

```Python
  def name_of_the_function():
    #Block of code 

  # Invoking function
  name_of_the_function()
```

```Python

  def evenNumber():
    eneteredNumber = int(input("Please enter a number => "))
    if(eneteredNumber % 2 == 0 ):
      print(eneteredNumber, 'is Even number')
    else:
      print(eneteredNumber, 'is Odd number')


```
### String
 - String is one of the data type and the string operations are like - finding length of strin, iterating over string characters, concatinations and much more 
 - Anything between single(''), double(""), and triple quotes(''' ''') symbols will be a strings
 
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

### Tuple
  - A tuple works almost same as list. The difference between the two is that we cannot change the elements of a tuple once it is assigned where as its possible with list.
  
  ```Python
    ()
    (1,2,3)
    ("sting","tes")
  ```

### Class
  - Python class is a template / blueprint (prototype) for creating real world objects. Its like sketch or plan on your papaer/toughts for constructing real house. It contains all the details based on we will be constucting a house. 
  - Python class consists of class vaiables, methods and much more which will help us to create real world objects 

**Class syntax**
```Python
  class Employee:
    pass
```


**Creating instance from the class**
```Python
class Employee:
  pass

emp1 = Employee()
```

**Class with variables and methods, these will be shared across all the instances of class**
```Python
class Employee:
  companyName = "Google India Pvt Ltd" # It is a class variable 

  def getCompanyName(self):
    return Employee.companyName


emp1 = Employee()

# We can access employee count by class and instance like as 
print(Employee.companyName)
print(emp1.getCompanyName())
```


**Class with constructor, instance variables and methods**
```Python
class Employee:
  companyName = "Google India Pvt Ltd" # It is a class variable 

  def __init__(self, name, age, employeeId):
    self.name = name
    self.age = age
    self.employeeId = employeeId

  def getEmployeeDetails(self):
    return "Name : " + self.name + ", Employee Id : " + str(self.employeeId) + ", Company Name : " + Employee.companyName
  
emp1 = Employee("Yuvaraj",30,230)
emp2 = Employee("Rajesh",40,225)


print(emp1.getEmployeeDetails())
print(Employee.companyName)
print(emp2.getEmployeeDetails())

```
**===Inheritance===**
```Python
class Employee:
  companyName = "Google India Pvt Ltd"

  def __init__(self, name, age, employeeId):
    self.name = name
    self.age = age
    self.employeeId = employeeId

  def getEmployeeDetails(self):
    return "Name : " + self.name + ", Employee Id : " + str(self.employeeId) + ", Company Name : " + Employee.companyName


class ItTeam(Employee):
  reportingManger = 'Some xyz'

it1 = ItTeam("Mahesh",40,34440)
```

**Reusablity with inheritance**

```Python
# Inheritance 
class Employee:
  companyName = "Google India Pvt Ltd"

  def __init__(self, name, age, employeeId):
    self.name = name
    self.age = age
    self.employeeId = employeeId

  def getEmployeeDetails(self):
    return "Name : " + self.name + ", Employee Id : " + str(self.employeeId) + ", Company Name : " + Employee.companyName


class ItTeam(Employee):
  reportingManger = 'Some xyz'

  def __init__(self, name, age, employeeId):
    super().__init__(name, age, employeeId)
  

class EngineeringTeam(Employee):
  reportingManger = "Some ABCD"

  def __init__(self, name, age, employeeId):
    super().__init__(name, age, employeeId)

  def getMyWork(self):
    return " => I work as programmer"

class MangementTeam(Employee):
  def __init__(self, name, age, employeeId):
    super().__init__(name, age, employeeId)

  def checkCompanyPerformance(self):
    return " Done "


it1 = ItTeam("Mahesh",40,34440)
eEmp1 = EngineeringTeam('Jhon', 35, 4500)
mEmp1 = MangementTeam('Steve', 55, 12)

print(it1.getEmployeeDetails())
print(eEmp1.getEmployeeDetails(), eEmp1.getMyWork())


print(mEmp1.getEmployeeDetails(), mEmp1.checkCompanyPerformance())

```

**Method Overriding**
```Python
class Employee:
  companyName = "Google India Pvt Ltd"

  def __init__(self, name, age, employeeId):
    self.name = name
    self.age = age
    self.employeeId = employeeId

  def getEmployeeDetails(self):
    return "Name : " + self.name + ", Employee Id : " + str(self.employeeId) + ", Company Name : " + Employee.companyName


class ItTeam(Employee):
  reportingManger = 'Some xyz'

    def getEmployeeDetails(self):
    return "Name : " + self.name + ", Employee Id : " + str(self.employeeId) + ", Company Name : " + Employee.companyName + " and I report to " + ItTeam.reportingManger


it1 = ItTeam("Mahesh",40,34440)

```


### Modules
  - Module is a file that contains code base to perform a specific function. A module may contain variables, functions, classes etc.
 
**Import Syntax**

```Python
# Lets say we have two files called mathOperations.py and main.py files
# Import followed by filename 
import mathOperations

```
**importing perticuler class or function from a file**

```Python
  from mathOperations import add
```

**Example** 
```Python
# File 1 called exampleModule.py 
def sayHello():
  print('Hello World!')

def sayHi():
  print('Hello Hi')

# File2 called main.py
# Importing whole file as module and using them
import exampleModule 
exampleModule.sayHello() # This will print Hello World!

# Importing particular function or class from module

from exampleModule import sayHello
sayHello()
```


### Packages 
- Package is collections of modules and files to perform complete functionality of any task


### ErrorAndExpceptions


