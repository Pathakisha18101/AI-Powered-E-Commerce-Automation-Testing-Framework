pipeline {

    agent any

    tools {
        nodejs "NodeJS-26"
    }

    environment {
        BASE_URL = https://rahulshettyacademy.com/client
        UI_BASE_URL = https://rahulshettyacademy.com/client
        USER_EMAIL = automation.sdet.demo+01@gmail.com
        USER_PASSWORD = JaiMatadi1810@
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