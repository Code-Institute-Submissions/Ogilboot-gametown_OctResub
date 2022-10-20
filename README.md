![Site Structure Diagram](/assets/images/gametown-responsive.png "GameTown Responsive")

GameTown is a website focusing on hosting various retro-styled and inspired minigames. The site currently hosts three minigames, namely: 

* BlockBattle - A classic 'Breakout' inspired minigame.
* MemoryMadness - A straight forward Quiz game with retro game themed questions. 
* SpaceSnake - A classic 'Snake' inspired minigame. 

Then site aims to steadily grow its offering of minigames and retro-themed experiences while improving the current iterations, eventually serving as a free online hub for fans of these styles of games.

Please feel free to view the deployed website [here](https://ogilboot.github.io/gametown/)

--- 

# User Experience (UX)

## **User Stories.**
---
- As a user I want to be excited upon first seeing the site.
- As a user I want the site to be easily navigable. 
- As a user I want to be able to access the games easily. 
- As a user I want the games to provide a fun experience.
- As a user I want the games to run with minimal bugs.
- As a user I want the game instructions to be easily viewable from the main viewpoint.
- As a user I want the website 'Theme' to be fitting of the retro-style content. 

## **Wireframes.**
---
Our Wireframes were created using [Balsamiq](https://balsamiq.com/). We created representations of various screen sizes in order to map out our responsive design. The design of the final site however changed quite significantly throughout the design process. These changes I feel have elevated the final product above what was initially planned at the Wireframe stage. We did however end up removing the 'Contact Form' page altogether due to time contraints, and will be looking to reimplement this feature at a later date. 

Desktop Wireframes:

- [Home](/assets/images/full-home.png)
- [GameScreens](/assets/images/full-game.png)
- [Contact](/assets/images/full-contact.png)

Mobile Wireframes:

- [Home](/assets/images/mobile-home.png)
- [GameScreens](/assets/images/mobile-game.png)
- [Contact](/assets/images/mobile-contact.png)

## **Site Structure.**
---
Our site utilised a simple, easy to navigate site-structure, as is illustrated in the below diagram. We felt this best suited the needs of the site, which weren't overly-complicated or information heavy.

![Site Structure Diagram](/assets/images/site-structure-gamefest.png "Site Structure Diagram")

## **Design Choices.**
---
### Typography. 
We used 'Kavoon' and 'Sans Serif' fonts across our website to achieve a clean, retro asthetic. We feel this suits the overall design ethos of the site and fits in perfectly with the 'Retro' game theme.

### Colour Scheme.
We focused on using a vibrant colour palette which suited our ongoing 'Retro Gamer' theme. We wanted to put the user in mind of an old arcade machine experience and feel the combination of colours chosen achieves this quite well. We also designed the site's background to continuously fade-cycle through this colour pallette. 

- [GameTown Pallette](/assets/images/gametown-colourpalette.png)

---
# Features
---

## **Existing Features.**

### Header:
- **Logo**: Gives a visual representation of the websites brand, along with a link back to the Homepage.
- **Navigation Bar**: Fully responsive nav bar (minimises to a 'Burger' style drop down menu) which allows easy navigation to all pages of the site.
- *Remains consistent throughout the site.*

### Footer:

- **Social Links**: Allows users to easily navigtate to our social media accounts.
- *Remains consistent throughout the site.*

### Home Page:

- **Large Image Carousel**: Large image carousel cycling through three images - Each custom designed and linked to a specific game. The carousel is automatic by default however can be manually controlled using the two arrows to left and right of the image. At the bottom of each image sits a 'Play Now' button which links through to the respective gamepage. *This layout displays on screens sizes of md and above.*
- **Individual Game Cards**: Three indiviual 'Cards', each containing the same image as shown in the large carousel (scaled to correct size) and each also containing a 'Play Now' button which links through to the respective game pages. *This layout displays for screen sizes of sm and below and is static in design.*

### BlockBattle Page:

- **Screen Size Selection**: Three images coupled with buttons, prompting the user to select their screen size. This selection panel has been designed to be minimal and easy for the user to quickly understand and use.
- **Game Page**: Once the user has selected their screen size they will be sent to the correctly scaled version of our BlockBattle game. The game itself sits in the centre of the users screen, with a player bar sitting at the bottom of a rectangular 'Game Zone', a ball just above it, and finally a bank of destructable blocks at the top of the Game Zone. The user can start the game at anytime using the 'Start Game' button above the Game Zone, which sits in a row with an 'Instructions tab' (linked to a modal containing basic instructions) and a 'Score' section, linked to the destruction of the blocks below. The aim of the game is to move the paddle on a horizontal axis in order to reboud the ball as it moves, colliding with the blocks above and in turn destroying them, scoring a point in the process. The paddle can be move using either the 'Left' and 'Right' keys on a keyboard, or using the clearly labelled buttons sited directly below the Game Zone. The game has inbuilt sound linked to most player actions.

### MemoryMadness Page:

- **Game Page**: A fully responsive Quiz UI, with an 'Instructions' bar spanning the top, the multiple-choice questions dislayed below and finally a submit button at the very bottom of the quiz. Users are prompted to select the answer they believe to be correct before hitting 'Submit', cycling to the next question. At the end of the quiz the users score is provided and they are given the option to Reload the quiz. The Instructions bar is linked to a popup modal with full instructions listed within, and most user actions are linked to inbuilt sound effects.

### SpaceSnake Page:

- **Game Page**: At the top of the page sits the: 'Instructions', 'Start Game' and 'Score' sections, arranged horzizontally in toolbar fashion. The Instructions button is linked to a popup modal containing full instructions should the user need guidance. The 'Start Game' button prompts a popup box preparing the user for the beginning of the game, linked to a 3 second timer before the 'Snake' bursts into action. The 'Score' section is linked to each piece of 'Food' the user manages to eat, with each worth 10 points. Once the game has begun the user is required to navigate the snake within the Game Zone, eating the pieces of food as they spawn and accumulating points, while avoiding hitting either the walls or itself, at which point a popup 'Alert' box informs the user that the game is over. Once completed the game reloads to its original state and awaits further user input before begining another round. The 'Snake' itself can be controlled either by the arrow keys of a keyboard or using the clearly labelled buttons directly below the Game Zone. 

## **Future Features.**

- **Levels** - We plan to implement levels into our existing games. We would like to increase the difficulty with each level gained, hopefully offering a more in-depth, dynamic gameplay experience to our users. 
- **High Scores** - We plan to implement a scoring system, along with a 'High Score' display board. We feel this added element of competition will enhance the gameplay experience on offer. 
- **New Games** - We plan to expand our offering of retro styled games, offering more choice for our users.
- **Contact** - We plan to implement a 'Contact' section with an inbuilt contact form, allowing users to get in touch with feedback if necessary. 

---
# Technologies Used
---

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [Balsamiq](https://balsamiq.com/)
- [Canva](https://www.canva.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Google-Fonts](https://fonts.google.com/)
- [Font-Awesome](https://fontawesome.com/)
- [Github](https://github.com/)
- [Gitpod](https://www.gitpod.io/docs/languages/html)
- [W3C-CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [W3C-HTML-Validator](https://validator.w3.org/)
- [JSlint](https://www.jslint.com/)

---
# Testing
---

## Validators:

- Firstly, we ran our code through two validators, testing both HTML & CSS. 
- All of our HTML pages returned no errors when run through the [W3C-HTML-Validator](https://validator.w3.org/). A partial screenshot of the output is provided below. 

- [HTML Pass](/assets/images/html-pass1.png)

- Our CSS page also returned no errors, when run through the [W3C-CSS-Validator](https://jigsaw.w3.org/css-validator/validator).A partial screenshot of the output is provided below. 

- [CSS Pass](/assets/images/css-pass1.png)

- Our JS returned minimal errors when run through, with no major errors shown [JSlint](https://www.jslint.com/).A partial screenshot of the output is provided below. 

- [CSS Pass](/assets/images/js-pass.png)



## Responsiveness:

- To test this used both [Chrome-Developer-Tools](https://developer.chrome.com/docs/devtools/) and [Responsive-Design-Checker](https://responsivedesignchecker.com/), testing a range of devices which represented the full spectrum of screen-sizes currently on the market. Our site achieved a good result on all devices tested. Some of the devices used to test this include: 

- iPhone SE
- Pixel 5
- Samsung Galaxy s8+
- iPad Air 
- Surface Duo
- Samsung Galaxy A51
- Nest Hub 
- Nest Hub Max 

Among others. 

## Browser Compatibility:

Our site was tested across the following browsers, with no issues found. All elements remained consistent across each, according to our testing.

- Gogle Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge 
- Brave 

## User Stories: 

> As a user I want to be excited upon first seeing the site.
- We feel the bold, retro styling of the homepage achieves this goal. The large hero images direct the users attention to the individual games and their artwork we feel looks exciting and engaging.
> As a user I want the site to be easily navigable. 
- The large hero-image carousel on the Homepage contains easily identifiable 'Play Now' buttons at their bottom, while the easy to navigate main navigation menu sits in the site Header, brightly coloured and easily spotted / usable. We feel this simple yet effective structure helps our site achieve this goal.
> As a user I want to be able to access the games easily. 
- At any point on the site you are never more than three clicks away from playing any particular game. The structure is very simple, and poses little challenge for a user looking to jump into any of our games. 
> As a user I want the games to provide a fun experience.
- Our three unique games offer a variation of experiences for our users. Our extensive user-testing has found that people find these games to be a fun experience, though the lack of levels does detract from the 'Replayability' factor, in their current states. We plan on implementing more levels with increasing difficulties along with various other improvements to this aspect of the site, as commented upon in the 'Future Features' section. 
> As a user I want the games to run with minimal bugs.
- Over the course of their development many bugs have emerged and been solved. We consider the current state of the games to be very good for initial, one-level prototypes, with very few bugs present (as identified by our extensive in-house and user testing). 
> As a user I want the game instructions to be easily viewable from the main viewpoint.
- Each games' respective instructions are clearly labelled, stored in modal elements towards the top of the 'Game Page'. We have found that users had no trouble in identifying and using this feature of our site throughout user testing. 
> As a user I want the website 'Theme' to be fitting of the retro-style content.
- We feel this aspect of the site is particularly strong, with the design being minimal yet fitting of a 'Retro Arcade' style experience. Colours are carried throughout the site and combined according to inspirational colour palettes popular at the time.  

## Bugs:

### Solved Bugs:

> Reasonably significant performance issues were identified through our use of a [webDev-Measure-Tool](https://web.dev/measure/), in that our use of 'png' format for certain images was slowing our 'First Contextual Paint' down significantly. Extraneous CSS was also identified as a factor in slowing the overall functioning of the site.
- We remedied this by converting these images to the more efficient 'webP' format, and greatly improved this metric. We then proceeded to clean our CSS up throughout, removing much inefficient and defunct code which had been left over from the development process. We intend to work on further improving the efficiency of the site moving forward.

> Our intial design of the 'Game Pages' left a lot to be desired, with conflicting CSS rules causing issues with responsive placement of our 'Instructions | Start Game | Score' bars. 
- After attempting many potential fixes (and receiving user feedback) we decided that the fundamental design of the page was flawed, so started again from scratch, moving the aforementioned bar from the bottom of the page (which required a user to scroll down and view) to just above the Game Zone of both BlockBattle & SpaceSnake respectively, greatly improving the UX and solving our issues with responsive design. 

> Our 'Snake' developed a bug which increased its speed exponentially upon starting the game, quickly reaching the point of being impossible to control. 
- This turned out to be an logic error we had introduced when trying to build the 'Move Snake' function. We remedied this bug by rolling the JS file back to a previous backup and rebuilding the function correctly, after which the bug has not resurfaced.

### Known Bugs:

> [webDev-Measure-Tool](https://web.dev/measure/) still shows various small issues interfering with our site's performance primarily. These include images which are slow to load.
- Although we have no had the time to address these issues as of writing this README, we will be addressing these issues in order to improve the overall performance and quality of the site as soon as we are able. 

> There is currently a bug specific to use of the manual control buttons of SpaceSnake, wherein attempting to 'Reverse' the snake directly upon itself (e.g: hitting 'Left' when the snake is moving 'Right') leads to a Game Over trigger.
- We are currently working to remedy this issue, however it is still live as of writing this README. 

## PageSpeed Insights:

We used [webDev-Measure-Tool](https://web.dev/measure/) to analyse the: Performance, Accessibility, Best Practices & SEO ratings of our site. This illustrated some accessibility issues which we then corrected (as shown in the 'Bugs' section of this README). This improved our scores, however there are still performance issues we are planning to iron out, which we have touched upon in the 'Bugs' section of this README.

## Peer Review:

In addition to the testing listen thus far, we have handed the website to four individuals of varying degrees of experience with the internet. Their continual feedback has been useful in iterating our site to its current state of polish.

---
# Deployment
---

## Deployment Instructions:

We used 'Github Pages' to host our site.

1. Navigate to the top menu of the project's [Repository](https://github.com/Ogilboot/gametown) and click on 'Settings'.
2. Navigate to the 'Pages' sub-section, using the menu on the left of the page.
3. Find the dropdown menu underneath the 'Source' subheading and choose the 'Main' branch. 
4. Click 'Save' to deploy the website.  

## Fork Instructions:

1. Navigate to the top-right menu of the project's [Repository](https://github.com/Ogilboot/gametown) and click on 'Fork'.
2. This will create an exact copy of the current repository in your Github account.

## Clone Instructions: 

1. Navigate to the top menu of the project's [Repository](https://github.com/Ogilboot/gametown) and click on 'Code'.
2. Copy the URL found in the 'HTTPS' section.
3. Open Git Bash in your chosen development environment. 
4. Edit the working directory to the location where you would like your newly cloned directory to be stored.
5. Type 'git clone', paste in the URL copied from the HTTPS section and your clone will be initialised.  

---
# Credits
---

- All Wireframes were created using [Balsamiq](https://balsamiq.com/).
- All custom artwork was created using [Canva](https://www.canva.com/).
- [Bootstrap](https://getbootstrap.com/) Was used extensively throughout the site, both for basic site structure aswell as more involved elements such as our 'Tickets' page and 'Nav Bar'.
- All fonts were found on [Google-Fonts](https://fonts.google.com/).
- All Icons were found on [Font-Awesome](https://fontawesome.com/).
- All text was written by myself.
- [W3Schools](https://www.w3schools.com/) & the [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) were both used extensively as reference sources throughout the making of our site. 
- [CodeAcademy](https://www.youtube.com/watch?v=ec8vSKJuZTk) tutorials were used as reference for the building of BlockBattle.
- A [CodingWithNick](https://www.youtube.com/watch?v=CqddbIrEM5I&t=3s) tutorial was used to help create our 'MemoryMadness' game. 
- Unfortuanetly I have been unable to trace the specific tutorial used to create 'Spacesnake'. This was a mistake on my part. 

---
# Acknowledgements
---

My mentor [Precious Ljege](https://www.linkedin.com/in/precious-ijege-908a00168/) and the [Code Institute Team](https://codeinstitute.net/) for preparing me for this project, and helping with any issues throughout.