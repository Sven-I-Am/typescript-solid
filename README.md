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

## To Do

This to do list is for personal use, the full to do list is added at the start of the challenge and as we complete
objectives they will be moved up into the timeline section and ticked off using emotes such as :heavy_check_mark:

### must-haves

- Install typescript :heavy_check_mark:
- Install Parcel :heavy_check_mark:
- Read [this article about typescript for Javascript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) :heavy_check_mark:
- The SOLID principles:
  - S: complete exercise 0.S to learn about the Single Responsibility Principle
  - O: complete exercise 1.O to learn about the Open-Closed Principle
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
6. If everything goes well you can `ctrl + left-click` to open the `http://localhost:1234` link in your browser
7. All set!
