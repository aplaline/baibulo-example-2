pipeline {
    agent any
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
        stage('Deploy') {
            when {
                expression { env.GIT_BRANCH != 'master' }
            }
            steps {
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm run deploy'
                }
            }
            when {
                expression { env.GIT_BRANCH == 'master' }
            }
            steps {
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm run release'
                }
            }
        }
    }
}
