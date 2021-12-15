# A deep dive into TypeScript and the SOLID principles

### exercise in week 12 (13/12/2021 - 17/12/2021) of our BeCode training

## Table of content

|     |                                                                         |
| --- | ----------------------------------------------------------------------- |
| 1   | [Challenge](#challenge)                                                 |
| 2   | [The objective of this exercise](#the-objective-of-this-exercise)       |
| 3   | [The group](#the-group)                                                 |
| 4   | [Tools and languages used](#tools-and-languages-used)                   |
| 5   | [Timeline](#timeline)                                                   |
| 6   | [What I learned from this exercise](#what-i-learned-from-this-exercise) |
| 7   | [To Do](#to-do)                                                         |
| 8   | [Installation Instructions](#installation-instructions)                 |
|     |

## 1. Challenge

After having used JavaScript for a while now, most of us are aware that it's not type safe out of the box.  
This week we are taking a harder look at TypeScript and the SOLID principles.  
We've touched on typescript before, while using Angular for example, but it was never the focus of an exercise.  
This exercise is divided into smaller sub-missions, each showing one of the SOLID principles.

## 2. The objective of this exercise

- Install typescript and Parcel
- Get some hands on experience with TypeScript
- Get a deeper understanding of the SOLID principles

## 3. The group

This week I'm flying solo.

## 4. Tools and languages used

|                                                |                                                 |
| ---------------------------------------------- | ----------------------------------------------- |
| ![windows10](Assets/Images/windows10-logo.png) | ![VSCode](Assets/Images/vscode-logo.png)        |
| ![html](Assets/Images/html-logo.png)           | ![TypeSript](Assets/Images/Typescript-logo.png) |
| ![git](Assets/Images/git-logo.png)             | ![github](Assets/Images/github-logo.png)        |

## 5. Timeline

- Day 1 (:date: 14/12/2021)
  - I decided to get an early start today, since I was one of the learners that missed the official first day for this exercise due to a day of training with Becode partner [CeVoRa](https://www.cevora.be/) in preparation for our upcoming job and internship interviews
  - The exercise instructions were clear enough to make installing the dependencies easier. With some help from google and the linked sources I got both TypeScript and Parcel up and running before the morning briefing.
    - I tested things out by changing some of the TS code in the first exercise and checking the output results.
  - I also started this README file and as [coach Sicco](https://github.com/Sick-0) remarked on last week's exercise, I added [installation instructions](#installation-instructions) to my template
  - Doing the first commit of this exercise at :clock10: 9:45AM
  - **Exercise 0.S**
    - by separating `class Car` into it's smaller classes the code becomes more scalable and easier to read
      - the exercise demands to at least separate out the engine and musicPlayer
      - the Car still has control over the maximum fuel level, which can be split out into the `class Tank`
    - I also decided to write each class in it's own file, again for better oversight.
    - I ran into a strange problem where VSCode kept throwing errors in the car.ts file on non-existent lines
      - it got fixed by restarting my IDE, still not sure what caused the issue.
    - By comparing the `old.ts` code with the new structure I feel like I understand the reasoning behind the Single Responsibility Principle
      - each class has only one reason to change and only exposes its information to the parts of the program it is relevant to
  - commit and push right after lunch because I forgot before checking out to eat
  - **Exercise 1.O**
    - first things first, I split the zoo and animal classes into their own respective files
    - I whittled down the `class Zoo` to only be responsible for adding and displaying the animals it holds
    - in `class Animal` I removed all specific species classes and made an over arching class that constructs a new Animal based on its type and sound
    - In the new.ts I then added the logic to populate my zoo with some animals and display them in the browser.
    - I end up getting an error `property 'type' does not exist on type 'Object'` and the same goes for sound.
      - as far as I can figure it's because I had the return-type of `get animals` set to be `Array<object>` rather than `Array<any>`, that seems to have fixed the issue
    - Having refactored the old.ts code combined with reading some sources I found that a lot of my previous code could probably use some refactoring as well. I have run into downstream breakage a lot before.
  - **Exercise 2.L**
    - The Liskov Substitution Principle states that when using subTypes they can not break the constraints set by their parents
    - For this exercise this meant creating an interface `Discount` which sets the functionality for it's implementers, aka all the discount types
    - This was easy enough, just have to import the interface into each class and tell the class to implement it.
    - I also took all other classes out of the old.ts code and separated them, importing what they needed when applicable
      - example: the `class ShoppingBasket` needs access to the `class Product` so it gets imported
    - I also added a line to clear the tableElement.innerHtml because compiling the new.ts file sometimes caused the duplication of the already existing table in the browser
    - Having read a couple of articles about SOLID principles, the matter is starting to feel rather dense and obtuse so I asked [coach Tim](https://github.com/Timmeahj) for a broken down explanation in more understandable terms and I feel like I am starting to grasp things better now.
  - **Exercise 3.I**
    - This time we're taking a look at interface pollution and how to avoid it using the Interface Segregation Principle
    - First thing I did was copy the old.ts code into a new.ts file and compiling it for use
      - this makes sure that I can keep an eye on my functionality as I code, because I also have a parcel server running
    - I split off the interface into 3 parts, each taking on one type of login method
    - Then I created separate files for each of my user type classes, each implementing only the interface(s) they absolutely require
    - I imported those classes back into the new.ts code and adjusted the html to allow for a google bot to check the google bot box
    - By checking which of the checkboxes is checked (if any) I determine what kind of user is trying to log in
  - **Exercise 4.D**
    - The Dependency Inversion Principle states that upper level classes as well as lower level classes should depend on an interface instead of each other
    - In this exercise that means separating the Restaurant from the oven by adding an appliance interface between them
    - I started by copying all the old.ts code into a new.ts file and compiling it for use
    - Then I took out the oven class and had it implement the interface Appliance which I created
    - I also split the Restaurant class into a separate file and had that implement the Appliance interface instead of directly calling on the Oven
    - By giving the appliance more generic method names it can now be implemented by different types of appliances without having the Restaurant specifically call for those classes.
    - turnOn and turnOf instead of lightGas and extinguishGas makes it possible to add an electric stove to the restaurant.
    - I also created a class Stove that creates an electric stove based on the appliance interface
    - After compiling again the output appears to work as intended

## 6. What I learned from this exercise

SOLID principles help us write scalable, maintainable and flexible code that is easier to understand and modify than code that doesn't adhere to those principles.
One of the reasons why applying the SOLID principles from the start may be hard is because a lot of the time, even flawed code can still work fine. The issues usually only arise when we want to scale up the code or when maintenance starts becoming an issue.
The biggest benefit I have seen so far is that finding what throws an error is a lot easier when your code is split up into smaller parts, each with their own tasks and properties. This makes testing portions of code a lot faster.

- **S = Single Responsibility Principle (SRP)**
  - a given class or module can only be responsible for a single element of a program's functionality and only has one reason the change.
  - This gives clearly defined boundaries to the implementation of functionality
  - Using information-hiding protects the data integrity
  - separation of concerns ensures changes in one location don't affect others
    - for example: having multiple types of users using the same program but being able to adjust certain parts of the functionality without cascading those changes for other users.
  - code maintenance becomes easier
- **O = The Open and Closed Principle (OCP)**
  - Classes and other entities should be open for extension but closed for modification
  - It feels like implementing the OCP almost certainly causes the need to implement the SRP as well
  - making the animal responsible for it's own sound, makes it that the zoo class never needs to be touched in order to add animals to it
- **L = The Liskov Substitution Principle (LSP)**
  - In order to prevent unexpected behavior in Objects and their supTypes it is important to make sure subTypes never break the contracts set by their parent
  - The why behind this principle is again, scalability, code extension and maintainability
  - By adhering to the LSP, we can prevent an undesirable outcome when inserting new subClasses into working code
- **I = Interface Segregation Principle (ISP)**
  - By making interfaces as lean as possible and only as fat as needed, we can prevent unnecessary functionality on classes and entities that implement these interfaces
  - From the start of a project always keep in mind what roles you want your interface to have.
  - Keeping the number of roles down to a minimum, guarantees better scalability and maintainability
    - I keep thinking of Tailwind CSS and it's utility based classes. Creating interfaces with just one role each makes sense to me. We can always just implement multiple interfaces when the situation calls for it
- **D = Dependency Inversion Principle (DIP)**
  - It felt like this principle is an almost natural consequence of implementing the previous principles
  - By adding an interface that both the upper level and lower level depends on instead of having those depend on each other adds a sort of buffer between the classes

## 7. To Do

This to do list is for personal use, the full to do list is added at the start of the challenge and as we complete
objectives they will be moved up into the timeline section and ticked off using emotes such as :heavy_check_mark:

### must-haves

- Install typescript :heavy_check_mark:
- Install Parcel :heavy_check_mark:
- Read [this article about typescript for Javascript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) :heavy_check_mark:
- The SOLID principles:
  - S: complete exercise 0.S to learn about the Single Responsibility Principle :heavy_check_mark:
  - O: complete exercise 1.O to learn about the Open-Closed Principle :heavy_check_mark:
  - L: complete exercise 2.L to learn about the Liskov Substitution Principle :heavy_check_mark:
  - I: complete exercise 3.I to learn about the Interface Segregation Principle :heavy_check_mark:
  - D: complete exercise 4.D to learn about the Dependency Inversion Principle :heavy_check_mark:
- Read the extra source material provided:
  - [more about SOLID](https://medium.com/@severinperez/maintainable-code-and-the-open-closed-principle-b088c737262) :heavy_check_mark:
  - [Typescript with SOLIDprinciples](https://itnext.io/brutally-solid-typescript-ba745585f440) :heavy_check_mark:

### Nice to have

## 8. Installation Instructions

1. clone this repository to your local environment
2. make sure you have [NodeJS installed](https://nodejs.org/en/)
3. run the `npm install` command in your project folder
   1. this will install the dev dependencies as specified in the `package.json` file
4. you should now have both typescript and parcel installed for this project development
5. to start the live compiled Parcel development server run `npm parcel src/index.html` replacing src with the proper directory
6. If everything goes well you can now open the `http://localhost:1234` link in your browser
7. All set!
