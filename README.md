# TODO React App
This project was created by course [CI/CD Pipeline with React and Github Action](https://www.udemy.com/course/cicd-react-github-actions/)
Result you can find by link https://<ProfileName>.github.io/<ProjectName>/
For this project: https://dmytrolamashevskyi.github.io/ReactToDo/

## Available Scripts

In the project directory, you can run App:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
 
## Deploying React app to Github page

To deploy React App on github pages you need:
### Run command in react app project 
This command add github pages to project 
```
npm install gh-pages --save-dev
```


### Add in package.json 2 fealds with information 
```
...
"homepage": "https://<ProfileName>.github.io/<ProjectName>/",
...
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ...
  }
``` 
### Commit and push changes 
```
 git status
 git add .
 git commit -m "Description"
 git push
``` 
