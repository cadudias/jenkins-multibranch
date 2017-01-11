// <1> -  allocates an executor and workspace in the Jenkins environment.
node { 

    // <2> -  describes distinct parts of the Pipeline for better visualization of progress/status.
    stage('Checkout') { 
        
         //bat 'git pull origin master'

         //bat 'npm install'

        checkout scm

        echo 'Builded!'

    }
    stage('Test') {
        //bat 'npm run --silent lint > TEST_RESULTS/eslint.xml'
    }
}