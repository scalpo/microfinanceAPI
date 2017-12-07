# microfinanceAPI

## you know

stuff...

1) copy pwd -> $ cat /var/jenkins_home/secrets/initialAdminPassword (eg. 8b9b527632a94644a622eb4be09efb58)
2) install suggested plugins (WjgAB1j1Y!1Tpl*V6GRs)
3) configure SMTP (172.26.0.1, from address, etc)
4) ssh & docker exec into jenkins container
5) apt-get update
6) apt-get install -y nodejs
7) apt-get install -y npm
8) npm i -g n newman
9) n latest
10) setup trigger (build periodically H/15 * * * *, webhook from git, etc)
11) add following pipeline script

~~~~
node {
    stage('Testing...') {
        git 'https://github.com/scalpo/microfinanceAPI.git'

        sh 'npm install'
        sh 'node server.js &'
    
        try {
            sh 'npm run test-api'
            currentBuild.result = 'SUCCESS'
        } catch (Exception ex) {
            currentBuild.result = 'FAILURE'
        }
    
        junit 'testResults.xml'
    }
}
~~~~