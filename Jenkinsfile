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
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy feature branch') {
            when { not { branch 'master' } }
            steps {
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm run deploy'
                }
            }
       }
       stage('Deploy release') {
            when { branch 'master'}
            steps {
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm run release'
                }
            }
        }
    }
}
