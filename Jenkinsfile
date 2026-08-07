pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/<username>/Jenkins-React-CI-CD.git'
            }
        }


        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }


        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }


        stage('Test') {
            steps {
                bat 'npm test'
            }
        }


        stage('Deploy') {
            steps {
                echo 'Deploying React Application'
            }
        }

    }


    post {

        success {
            echo 'Pipeline Completed Successfully'
        }

        failure {
            echo 'Pipeline Failed'
        }

    }
}