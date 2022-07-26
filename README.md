# MALLIA SALON
MALLIA SALON is a website for a hair salon.
It was created by Katerina Florou as a final project for CS50x 2022.

### Website:  https://www.mallia.salon/

### Description:
This project was submited as a final project for CS50x 2022, and is now used as the official website for a hair salon.
The design and the color palette (white, grey and black) was inspired by the salon's interior design and logo.
This final draft is different from the original design that contained more photos, information and functionalities (e.g. contact form).
The owner wished for a simpler design with less information.
To build the website I used three languages:
- HTML
- CSS
- JavaScript,
and for each language I dedicated only one file.

#### index.html
This file contains the entire html code for the website.
Instead of having many different files for each section, I decided to go for a single page where each section covers the whole viewport. There is not a lot of information on each section so I thought that having only one page is easier and better in terms of memory needs and speed. The file is separated in five sections:
-navbar
-introduction
-services
-team
-contact.
I focused on using semantic elements and tried to give class names that define the content of the elements.
Furthermore I used comments to make it easier for others to understand the structure of the code.
For the information on "open positions" (section team), I decided to use a modal and not have a dedicated section. The information, for now, is limited and it seemed wiser to just have the information visible only when there is interest from a user.

#### style.css
This file contains the entire css code for the website.
To build the layout I used mainly the Grid Layout Module except for a couple of times where it was better to use the Flexbox Layout module (e.g. navbar).
I introduced a breakpoint at "screen <= 600px wide" and altered the original design to be appropriate for smaller screens.
There is a lot of emphasis on the styles being responsive with the use of functions as
```
:root {
    font-size: clamp(14px, 1.5vw, 28px);
}
```
so the font-size adjusts to the size of the screen, or preference of vh and vw as units.
As the design had to be very simple I tried to incorporate a little movement by using "transform" to increase the size of elements on mouse-over (e.g. the text on the introduction section or the tables on the services section).

#### index.js
This file contains the entire JavaScript code for the website.
In here there are the functions to open and close the navbar dropdown menu on screens smaller or equal to 600px wide and functions to open and close the modal on "open positions" (section team).
I tried to use as many comments as possible so it can be easy for others to follow the code.

#### Copyrights
For this website I used several royalty free photos found in websites like Pexels and Unsplash. I included the information of the creators and the platforms where they were found on each one of them.
