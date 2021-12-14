# A deep dive into TypeScript and the SOLID principles

### exercise in week 12 (13/12/2021 - 17/12/2021) of our BeCode training

## Table of content

- [A deep dive into TypeScript and the SOLID principles](#a-deep-dive-into-typescript-and-the-solid-principles)
    - [exercise in week 12 (13/12/2021 - 17/12/2021) of our BeCode training](#exercise-in-week-12-13122021---17122021-of-our-becode-training)
  - [Table of content](#table-of-content)
  - [Challenge](#challenge)
  - [The objective of this exercise](#the-objective-of-this-exercise)
  - [The group](#the-group)
  - [Tools and languages used](#tools-and-languages-used)
  - [Timeline](#timeline)
  - [What I learned from this exercise](#what-i-learned-from-this-exercise)
  - [To Do](#to-do)
    - [must-haves](#must-haves)
    - [Nice to have](#nice-to-have)
  - [Installation Instructions](#installation-instructions)

## Challenge

After having used JavaScript for a while now, most of us are aware that it's not type safe out of the box.  
This week we are taking a harder look at TypeScript and the SOLID principles.  
We've touched on typescript before, while using Angular for example, but it was never the focus of an exercise.  
This exercise is divided into smaller sub-missions, each showing one of the SOLID principles.

## The objective of this exercise

- Install typescript and Parcel
- Get some hands on experience with TypeScript
- Get a deeper understanding of the SOLID principles

## The group

This week I'm flying solo.

## Tools and languages used

|                                                |                                                 |     |
| ---------------------------------------------- | ----------------------------------------------- | --- | --- |
| ![windows10](Assets/Images/windows10-logo.png) | ![VSCode](Assets/Images/vscode-logo.png)        |     |
| ![html](Assets/Images/html-logo.png)           | ![TypeSript](Assets/Images/Typescript-logo.png) |     |     |
| ![git](Assets/Images/git-logo.png)             | ![github](Assets/Images/github-logo.png)        |     |

## Timeline

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

## What I learned from this exercise

SOLID principles help us write scalable, maintainable and flexible code that is easier to understand and modify than code that doesn't adhere to those principles.

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
- **L = The Liskov Substitution Principle**

## To Do

This to do list is for personal use, the full to do list is added at the start of the challenge and as we complete
objectives they will be moved up into the timeline section and ticked off using emotes such as :heavy_check_mark:

### must-haves

- Install typescript :heavy_check_mark:
- Install Parcel :heavy_check_mark:
- Read [this article about typescript for Javascript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) :heavy_check_mark:
- The SOLID principles:
  - S: complete exercise 0.S to learn about the Single Responsibility Principle :heavy_check_mark:
  - O: complete exercise 1.O to learn about the Open-Closed Principle :heavy_check_mark:
  - L: complete exercise 2.L to learn about the Liskov Substitution Principle
  - I: complete exercise 3.I to learn about the Interface Segregation Principle
  - D: complete exercise 4.D to learn about the Dependency Inversion Principle
- Read the extra source material provided:
  - [more about SOLID](https://medium.com/@severinperez/maintainable-code-and-the-open-closed-principle-b088c737262)
  - [Typescript with SOLIDprinciples](https://itnext.io/brutally-solid-typescript-ba745585f440)

### Nice to have

## Installation Instructions

1. clone this repository to your local environment
2. make sure you have [NodeJS installed](https://nodejs.org/en/)
3. run the `npm install` command in your project folder
   1. this will install the dev dependencies as specified in the `package.json` file
4. you should now have both typescript and parcel installed for this project development
5. to start the live compiled Parcel development server run `npm parcel src/index.html` replacing src with the proper directory
6. If everything goes well you can now open the `http://localhost:1234` link in your browser
7. All set!
