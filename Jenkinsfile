pipeline {

    agent any

    tools {
        nodejs "NodeJS-24"
    }

    environment {
        BASE_URL = credentials('BASE_URL')
        UI_BASE_URL = credentials('UI_BASE_URL')
        USER_EMAIL = credentials('USER_EMAIL')
        USER_PASSWORD = credentials('USER_PASSWORD')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }

    }

    post {

        always {

            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true

            archiveArtifacts artifacts: 'screenshots/**', allowEmptyArchive: true

            archiveArtifacts artifacts: 'videos/**', allowEmptyArchive: true

            archiveArtifacts artifacts: 'traces/**', allowEmptyArchive: true
        }

        success {
            echo 'Pipeline Passed'
        }

        failure {
            echo 'Pipeline Failed'
        }

    }

}