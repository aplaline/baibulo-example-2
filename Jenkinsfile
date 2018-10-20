pipeline {
    agent any
    stages {
        stage('Cleanup') {
            steps {
                sh 'rm -rf node_modules dist'
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
            steps {
                nodejs(nodeJSInstallationName: '10.x') {
                    sh 'npm run deploy'
                }
            }
        }
    }
}
