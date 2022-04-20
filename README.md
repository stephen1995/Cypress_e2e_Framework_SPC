# ecoPortal Challenge
PRE REQUISITE:
- Any JS IDE installed(for eg. Visual Studio Code )
- Node JS installed

How to Run:
- Open VS code
- Open the project
- Open a terminal inside the IDE
- Run npm install command in order to download dependencies

Multiple Ways to run test cases:
- If you want to run your test cases in headless mode: 
  npm run test

- If you want to run your test cases in headed mode: 
  npm run test -- --headed

- If you want to run your test cases in an specific browser(Chrome, IE, Electron, FireFox): 
  npm run test -- --browser {yourBrowserName}

- If you want to run an especific test case you can add an annotation("@") and use this command: 
  npx cypress-tags run -e TAGS='@yourTag' --headed --browser chrome

In order to see the report:
- You have to run this command: node cucumber-html-report.js .You can copy the path of index.html from reports folder so you can see the results in your browser
