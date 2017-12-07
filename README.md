# microfinanceAPI

## you know

stuff...

s 69RI!8e4vbKixQl!lh0z

1) install suggested plugins
2) configure SMTP (172.26.0.1)
3) install nodejs plugin

ssh
apt-get update
apt-get install nodejs
apt-get install npm


ss 0960c22822bd43f1a5ae0788e5ab0c18

node {
    git 'https://github.com/scalpo/microfinanceAPI.git'
    
    sh 'npm install'
    sh 'node server.js &'
    
    try {
        sh 'npm run test-api'
        currentBuild.result = 'SUCCESS'
    } catch (Exception ex) {
        currentBuild.result = 'FAILURE'
    }
    
    junit 'results.xml'
}