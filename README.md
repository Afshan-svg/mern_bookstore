1. navbar

We will be using daisyUI to create navbar using tailwind css
daisyUI is by default mobile responsive
We make the navbar fixed by adding fixed tailwind class

We use useEffect hook to add shadow effects in our navbar scroll
useEffect is usually used for handling side effects during component mount, update and unmount

We use showModal function when a user onClick to open our login or signup modal

2. Banner

We created two divs right and left
In mobile we kept it as flex-col as we want both the images to appear one below other
And normally it will be in desktop flex or flex row
We have kept w-full in mobile devices
So w-1/2 in desktop or md devices
Since we want the image to appear first in mobile device and then the content
We use a specific "order" class from tailwind 
Name the image as order 1 and the content as order 2

3. Footer

Footer also we imported from daisyUI

4. Freebook
We use filter function from js to filter our free books from our list
we can perform this function on arrays
Later on we use react slick slider to get responsive slider on our component
We use props to send data from parent to child
Freebook is a parent component so we map the cards and use props to receive data from the cards component
Hence we have used item.data, item.price, item.title etc

5. list.json
We add books data i.e id, name, title, price, category, image
Later on we add backend and we may remove this file

6. Cards
We use this cards component in 2 places so we tend to make a new component to reuse it later

7. Home 
We add all of our components of homepage in this component so that we can easily add routes in our App.jsx file

8. Course
We add route and display all the books data in this component using map
We use grid to display all the books 4 in a row
Use scale tailwind class so that it will scale out when hovered 

9. Courses
In courses we jus added the course component with some tailwind class

10. Dark or light theme toggle
We use local storage theme to switch between light and dark mode theme using useState and useEffect
We use tailwind darkmode in tailwind config to effect the changes
To change the color changes in the component, add appropriate tailwind classes at the root div of the element


11. Login
We take the modal from daisyUI of login 

12. Signup 
We create a different route for signup and won't use any modal for this


`````******************************************`````````````````````````````````````


Now we use react hook forms for submit validation and control our forms
React hook forms include all validation and required fields that are needed in any form

VERSION CONTROL 


Step 1:- copy the github repo url

Step 2:- open cmd terminal 

Step3:- Git clone repo_url

Step 5:- open the folder
               unzip frontend 
               Unzip backend

Step6:- Go back to main folder. 

Step7:- right click open in terminal 

Step 8:- code .

Step9:- move to frontend
            npm install 
            npm run dev

Step10:- move backend
          npm install 
          npm start
