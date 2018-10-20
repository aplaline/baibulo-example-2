pipeline {
    agent any
    triggers { pollSCM('* * * * *') }
    tools { nodejs '10.x' }
    stages {
        stage('Cleanup') {
            steps {
                sh 'rm -rf node_modules dist'
            }
        }
        stage('Install NPM packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy feature branch') {
            when {
                not { branch 'master' }
            }
            steps {
                sh 'npm run deploy'
            }
       }
       stage('Deploy release') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm run release'
            }
        }
    }
}
