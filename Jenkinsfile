pipeline {

    agent any

    tools {
        nodejs "NodeJS-26"
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

        stage('Node Version') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run BDD Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            archiveArtifacts artifacts: 'screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'videos/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'traces/**', allowEmptyArchive: true

            echo 'Artifacts Archived'
        }

        success {
            echo 'Pipeline Passed Successfully'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}