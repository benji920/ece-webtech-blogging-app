
# Blogging application - ECE Webtech project

*presentation, introduction, ...*

## Production 

- Vercel URL: https://ece-webtech-blogging-app.vercel.app/
- Supabase project URL: https://app.supabase.com/project/tdnzdrcypfkbqoisxhyr

## Usage

* Clone this repository, from your local machine:
  ```
  git clone https://github.com/benji920/ece-webtech-blogging-app.git
  ```
* Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm start
  ```
* Start Supabase
  ```bash
  cd supabase
  docker compose up ...
  ```

## Authors

[Benjamin DAVID](https://github.com/benji920)
[Robin VAN DESSEL](https://github.com/vdRobin)

## Tasks
  
**Project management:**

* Naming convention 

  Graduation: 1.5/2
  
  For the naming convention, our variables have explicit names as for our files.

  - The components begin with a capital letter
  - The variables and functions use the CamelCase notation
  - The code is indented
 

* Project structure   
  
  Graduation: 2/2
  
  What we could improve:

  - We could have made more components. Some page implementation are too long
  
* Git   
  
  Graduation: 2/2
  
  Each commit's name uses conventional commit method. We used differents branches in order to implement large feature like 'articles', 'profile', 'home page'. 
  
  Vercel is used for CI/CD since the beginning of the project. After every pushes, it checks if deployment has succeed.
  
* Code quality

  Graduation: 4/4

  For the code quality, we used **prettier** to auto indent on save our code in VSCode
  
* Design, UX, and content   
  
  
  Graduation: 4/4
  
  We used tailwind and components from tailwind UI and Flowbite to make a responsive and intiutive website. We also took icons from HeroIcons

**Application development:**

* Home page   
  
  Graduation: 4/4
  
  The home page describe the website and show the latest articles. If you are logged in, it calls you to publish an article ! Otherwise, you are asked to login.
  
* Login and profile page   
  
  Graduation: 4/4
  
  There is a login/logout button in the header. In the profile page, you can see the inforations of the user, his articles and comment. It is persists and user image is shown in the header
  
* New articles creation   
  
  Graduation: 6/6
  
  Form with all the articles propreties (title, content, tags, categories). The user can save or publish the form, or leave the page to cancel.
  
* New comment creation   
 
  Graduation: 4/4
 
  Display a form at the bottom of article pages. Authenticated and unauthenticated users can publish comment. Comment are instantly dsiplay under the article after the comment is posted. 
 
* Resource access control   
  
  Graduation: 6/6
  
  RLS is used on articles. Anyone authenticated can upload an article. Read access is enable for every user. An article can only be deleted and edited by its author. 
  If an unauthorized user try to insert, edit or delete an article, it will display an error message based on the query response.
  RLS is used on comments. Author of the comment and author of the article can delete the comments. Anyone can comment and see every comment. Author of the comment can update his comments.
  We check http response after every supabase request
  
* Article modification   
  
  Graduation: 4/4
  
  Once an article is created, only the author can see the "edit" button, redirecting to the editing page to modify the article. The edit form displays all the informations of the article so the user doesn't have to rewrite eveerything.
  
* Article removal   
  
  Graduation: 2/2
  
  Once an article is created, only the author can see the "delete" button to remove it.
  
* Comment modification   
  
  Graduation: 2/2
  
  Once a comment is created, only the author can see the "edit" button, opening an editing form to modify the comment. The edit form displays the content of the comment so the user doesn't have to rewrte his comment.
  
* Comment removal   
  
  Graduation: 2/2
  
  Once a comment is created, only the author of the commment and the author of the article can see the "delete" button to remove it.
  
* Account settings   
  
  Graduation: 3/4
  
  We display and load a form component withe the name and the email of the user. 
  
* WYSIWYG integration   
  
  Graduation: 2/2
  
  The content input fields for articles are featured with any WYSIWYG library to display and edit its content.
  
* Gravatar integration   
  
  Graduation: 2/2
  
  Display a Gravatar user icon right next to his comments, in the header, and on the profile page.
  
* Light/dark theme   
  
  Graduation: 2/2
  
  A design switch allows the user to turn on or off the dark theme. It persits throught the user session.
  
* Accent color selection   
  
  Graduation: 4/4
  
  A theme selector in the header allows the user to select his favorite color and use it as a primary color of the theme. We kept it discreet in order to keep the website interface consistent. Ce can easily add more colors. It can be used simultaneously with the dark mode.

## Bonus

  - Every comments dispalys the relative time from when it was publish (few second ago, an hour ago, a day ago).
  - Users' profile pages display user information and their articles and comments.
  - Comment section display the number of comments under every articles.
