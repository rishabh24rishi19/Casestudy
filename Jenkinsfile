pipeline {
    agent any

    environment {
        NODE_VERSION = 'NodeJS 20' // Specify Node version if needed
        BRANCH_NAME = "${env.GIT_BRANCH ?: 'main'}" // Default to 'main' if BRANCH_NAME is null
        TOMCAT_HOME = 'C:\\Program Files\\Apache Software Foundation\\Tomcat 11.0_Tomcat11_Temp' // Update with your Tomcat installation path
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node dependencies
                bat 'npm install'
            }
        }

        stage('Install Test Dependencies') {
            steps {
                // Install jest-junit for test reporting
                bat 'npm install --save-dev jest-junit'
            }
        }

        stage('Build') {
            steps {
                // Build the React project for production
                bat 'npm run build'
            }
        }

        stage('Deploy to Tomcat') {
            steps {
                // Clean up previous deployment and copy new build files to Tomcat
                bat '''
                rmdir /S /Q "%TOMCAT_HOME%\\webapps\\your-app"
                xcopy /s /e /i /y /q build "%TOMCAT_HOME%\\webapps\\your-app"
                '''
            }
        }

        stage('Test') {
            steps {
                // Run tests with Jest and output results in JUnit format
                bat 'npm test -- --ci'
            }
            post {
                always {
                    junit 'test-results/junit.xml' // Replace with actual Jest output path
                }
            }
        }

        stage('Security Scan') {
            steps {
                // Placeholder for security testing
                echo 'Running security scans...'
                // Add actual security scan commands or API calls here
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
