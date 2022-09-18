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
- [Pixabay](https://pixabay.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Google-Fonts](https://fonts.google.com/)
- [Font-Awesome](https://fontawesome.com/)
- [Github](https://github.com/)
- [Gitpod](https://www.gitpod.io/docs/languages/html)
- [W3C-CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [W3C-HTML-Validator](https://validator.w3.org/)
---
# Testing
---

## Validators:

- Firstly, we ran our code through two validators, testing both HTML & CSS. 
- All of our HTML pages returned no errors when run through the [W3C-HTML-Validator](https://validator.w3.org/). A partial screenshot of the output is provided below. 

- [HTML Pass](/assets/images/HTML-pass.png)

- Our CSS page also returned no errors, when run through the [W3C-CSS-Validator](https://jigsaw.w3.org/css-validator/validator).A partial screenshot of the output is provided below. 

- [CSS Pass](/assets/images/CSS-pass.png)



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
- The large hero-image and three smaller images displayed immediately below present a sense of excitement, linking the user in a small way to the real festival experience. The Homepage is intentionally designed to be uncluttered and bold in stlye, in order to bring this imagery to the forefront, with easily navigable buttons and navigation menus in sight ready for the user to take the next step.
> As a user I want the site to be easily navigable. 
- Our Nav menu remains clearly visible at all device sizes, remaining in the Header of the site should our users need to quickly navigate the site. We also have navigation buttons attached to the three smaller images at the bottom of each pages body section, allowing for a secondary means of navigation to the most popular sections of our site.
> As a user I want to be able to access key information easily. 
- Our 'Info' page presents a range of key information accessible with a single click on the Navigation menu. We also have a seperate page for our 'Lineup' information, should visitors want to find out which bands are playing at the festival, again accessible from any point with a single click. Finally, our 'Contact' page allows for users to get in touch with anything not addressed on the site itself. 
> As a user I want to be able to contact the festival if needed.
- As mentioned above, our 'Contact' page includes a fully responsive and interative contact form, through which our users can connect with us directly should they need to. 
> As a user I want to find the lineup easly and want it to be presented in a pleasing format.
- We have dedicated a page of its own to our 'Lineup' poster, which is fully responsive and presented in a visually pleasing manner. The colours used on the poster itself are in line with those mirrored across the site in order to maintain design integrity, and impart a fun, relaxed feel to the user. 
> As a user I want to be able to find the Festivals social media links easily. 
- Our social media links are clearly displayed in the 'Footer' section of each page, accessible with a single click. We left this footer section blank other than the Social Media links in order to draw clear attention to these.
> As a user I want to see images of the festival in full swing. 
- Images of the festival in process are displayed throughout the website, both on the Homepage and in the three smaller images consistent along the bottom of each individual page. We would like to add a 'Gallery' page to future iterations of the site. 

## Bugs:

### Solved Bugs:

> Accessibility issues were identified through our use of a [webDev-Measure-Tool](https://web.dev/measure/), in that we did not have 'discernible names' attached to our social media links and navigation buttons. 
- We remedied this by adding discernible names to our social media buttons (e.g: Facebook) and applying a 'color: transparent' rule within our CSS in order to preserve our desired, minimal design. Aria-labels were then added to our navigation buttons in order to remedy this portion of the accessibility issues.

> We had initial issues with our Navigation-bar, having styled this with CSS incompatible with our desired responsiveness. The Menu itself clipped down the page, interfering with content further down our webpage.
- We rectified this by replacing our old Navigation-bar design with a responsive, Bootstrap version. We then iterated upon this further by reducing the menu-size down to a 'Burger' display, dropdown menu upon resizing. This improved the overall professional look of our site markedly. 

> Our 'Tickets' page originally had strange dots appearing within the list section, at angles from our intended 'li' element.
- This turned out to be an unnecessary 'Div' element causing this, the removal of which achieved the design image we had originally had for the page.

### Known Bugs:

> [webDev-Measure-Tool](https://web.dev/measure/) still shows various small issues interfering with our site's performance primarily. These include images which are slow to load.
- Although we have no had the time to address these issues as of writing this README, we will be addressing these issues in order to improve the overall performance and quality of the site as soon as we are able. 

## PageSpeed Insights:

We used [webDev-Measure-Tool](https://web.dev/measure/) to analyse the: Performance, Accessibility, Best Practices & SEO ratings of our site. This illustrated some accessibility issues which we then corrected (as shown in the 'Bugs' section of this README). This improved our scores, however there are still performance issues we are planning to iron out, which we have touched upon in the 'Bugs' section of this README.

## Peer Review:

In addition to the testing listen thus far, we have handed the website to four individuals of varying degrees of experience with the internet. Their continual feedback has been useful in iterating our site to its current state of polish.

---
# Deployment
---

## Deployment Instructions:

We used 'Github Pages' to host our site.

1. Navigate to the top menu of the project's [Repository](https://github.com/Ogilboot/pennfest) and click on 'Settings'.
2. Navigate to the 'Pages' sub-section, using the menu on the left of the page.
3. Find the dropdown menu underneath the 'Source' subheading and choose the 'Main' branch. 
4. Click 'Save' to deploy the website.  

## Fork Instructions:

1. Navigate to the top-right menu of the project's [Repository](https://github.com/Ogilboot/pennfest) and click on 'Fork'.
2. This will create an exact copy of the current repository in your Github account.

## Clone Instructions: 

1. Navigate to the top menu of the project's [Repository](https://github.com/Ogilboot/pennfest) and click on 'Code'.
2. Copy the URL found in the 'HTTPS' section.
3. Open Git Bash in your chosen development environment. 
4. Edit the working directory to the location where you would like your newly cloned directory to be stored.
5. Type 'git clone', paste in the URL copied from the HTTPS section and your clone will be initialised.  

---
# Credits
---

- All images were downloaded from [Pixabay](https://pixabay.com/).
- All Wireframes were created using [Balsamiq](https://balsamiq.com/).
- The 'Lineup' graphic and 'Logo' were created using [Canva](https://www.canva.com/).
- [Bootstrap](https://getbootstrap.com/) Was used extensively throughout the site, both for basic site structure aswell as more involved elements such as our 'Tickets' page and 'Nav Bar'.
- All fonts were found on [Google-Fonts](https://fonts.google.com/).
- All Icons were found on [Font-Awesome](https://fontawesome.com/).
- All text was written by myself.
- [W3Schools](https://www.w3schools.com/) & the [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) were both used extensively as reference sources throughout the making of our site. 

---
# Acknowledgements
---

My mentor [Precious Ljege](https://www.linkedin.com/in/precious-ijege-908a00168/) and the [Code Institute Team](https://codeinstitute.net/) for preparing me for this project, and helping with any issues throughout.