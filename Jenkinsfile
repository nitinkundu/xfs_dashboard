pipeline 
{
    agent any
    
    
    tools {nodejs "nodejs"}
    
    
    
    stages {
       
        stage('installing dependencies') {
            steps {
               sh 'npm install'
            }
        }
         /* stage('test') {
              steps {
                 sh 'npm run test'
              }
         }*/
       /* stage('SonarQube') {    
              steps {
              sh 'npm install sonarqube-scanner --save-dev'
              sh 'npm run sonar' 
           }
        }*/          
      
       
        stage('build') {
            steps {
                sh 'npm run build'
                
            }
        }
         stage ('zipping'){
             steps {
                 
                 sh 'cd dist/XFS; zip -r ../../abcApp.zip . ;'
             }
         }
        // stage ('Nexus'){
        //     steps{
        //         sh 'ls'
        //         withCredentials([usernamePassword(credentialsId: 'sudipa_nexus', passwordVariable: 'pass', usernameVariable: 'usr')]) {
        //          sh label: '', script: 'curl -u ${usr}:${pass} --upload-file abcApp.zip http://ec2-3-17-164-37.us-east-2.compute.amazonaws.com:8081/nexus/content/repositories/devopstraining/XFS_Frontend_Angular/abcApp.zip'
        //         }
                
        //     }
        // }
        stage ('Deploy') {
            steps {
                withCredentials([file(credentialsId: 'Ashish_Tomcat_ppk', variable: 'deployment_server')]) {
                   sh 'scp -v -i ${deployment_server} -o StrictHostKeyChecking=no abcApp.zip ubuntu@52.66.245.186:/home/ubuntu'
                   sh 'ssh -v -i ${deployment_server} -o StrictHostKeyChecking=no ubuntu@52.66.245.186 "cd /home/ubuntu; unzip -o abcApp.zip -d xfs2;pm2 start "serve . -p 4200 " --name "XFS_Final""'
                   //sh 'ssh -v -i ${deployment_server} -o StrictHostKeyChecking=no ubuntu@52.66.245.186 "cd /home/ubuntu;sudo unzip -o abcApp.zip -d xfs2;pm2 restart "XFS_Final""'
               }
            }
        }
        
    }
    post { 
         success { 
            
            slackSend (color: '#00BB00', message: " SUCCESS: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${BUILD_URL})")
         }
         failure {
            
            slackSend (color: '#BB0000', message: " FAILURE: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${BUILD_URL})")
         }
    }

}
