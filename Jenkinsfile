pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo "Installing Node Dependencies"
                bat "npm install"
            }
        }


        stage('Build React Application') {
            steps {
                echo "Building React Application"
                bat "npm run build"
            }
        }


        stage('Test') {
            steps {
                echo "Running Tests"
                bat "npm test"
            }
        }


        stage('Deploy') {
            steps {
                echo "Deploying Application"
            }
        }

    }


    post {

        success {
            echo "Pipeline Completed Successfully"
        }

        failure {
            echo "Pipeline Failed"
        }

    }
}