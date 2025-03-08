# Install Nodejs
link : - https://nodejs.org/en
checkout the website and download the nodejs v22

# Download project dependency 
command: npm install

# locally run application
command : npm run dev

# build application for deployment
command : npm run build

optional:  for manually deployment own firebase host
# hosted app on firebase, install the firebase tool globally without github pipeline action
step1 => install firebase tools 
command : npm install -g firebase-tools

step2 => authenticate cli to the firebase
command : firebase login

step3 => create project on firebase website
link :- https://firebase.google.com/?gad_source=1&gclid=EAIaIQobChMIyt234Zz6iwMVcqhmAh1K_yPuEAAYASAAEgK4wfD_BwE&gclsrc=aw.ds

step4 => update the .filebaserc file  with project name

step4 => generate firebase token
command :- firebase login:ci

step5 => deploy app on firabase
command :- firebase deploy -P production --token="place firabse token here" --only hosting





