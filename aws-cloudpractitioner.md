# AWS Cloud Practitioner
* CLF-C01
* Learning about AWS eco-system and AWS features.
* Gain knowledge of the general overview of Cloud services offered by AWS at a high level.

---

## Table of contents

### 01. [Create an AWS account](#01-create-an-aws-account)

### 02. [Summary](#02-summary)

### 03. [Cloud Computing](#03-cloud-computing)
  + [5 characteristics of cloud computing](#5-characteristics-of-cloud-computing)
  + [6 advantages of cloud computing](#6-advantages-of-cloud-computing)
  + [problems solved by the cloud](#problems-solved-by-the-cloud)
  + [Types of cloud computing](#types-of-cloud-computing)
  + [pricing of the cloud](#pricing-of-the-cloud)
  + [AWS Global infrastructure](#aws-global-infrastructure)
  
### 04. [IAM (identity and access management)](#04-iam-identity-and-access-management)
  + [IAM Policies](#iam-policies)
    + [IAM policy structure](#iam-policy-structure)
  + [Protecting user accounts](#protecting-user-accounts)
    + [Password policy](#password-policy)
    + [Multi Factor Authentication (MFA)](#multi-factor-authentication-mfa)
  + [3 ways to access AWS](#3-ways-to-access-aws)
  + [Access keys](#access-keys)
  + [AWS CloudShell](#aws-cloudshell)
  + [IAM roles for AWS Services](#iam-roles-for-aws-services)
  + [IAM security tools](#iam-security-tools)
  + [IAM Shared responsibility model](#iam-shared-responsibility-model)
  + [Summary](#iam-summary)

### 05. [EC2 - Elastic Compute Cloud](#05-ec2-elastic-compute-cloud)
  + [What can you do with EC2?](#what-can-you-do-with-ec2)
  + [EC2 Virtual server - options](#ec2-virtual-server-options)
  + [creating an EC2 instance with EC2 User Data](#creating-an-ec2-instance-with-ec2-user-data)
  + [7 different types of EC2 instances](#7-different-types-of-ec2-instances)
  + [Security Groups](#security-groups)
    - [Ports you need to know](#ports-you-need-to-know)
  + [SSH](#ssh)
  + [Instance Launch types](#instance-launch-types)
  + [Shared responsibility model](#shared-responsibility-model)
  + [Summary](#summary-elb-and-asg)
  
### 06. [EC2 - Instance Storage](#06-ec2-instance-storage)
  + [EBS Volume](#ebs-volume)
  + [EBS Snapshot](#ebs-snapshot)
  + [AMI](#ami)(
  + [EC2 Image Builder](#ec2-image-builder)
  + [EC2 Instance Store](#ec2-instance-store)
  + [EFS (Elastic file system)](#efs-elastic-file-system)
  + [EBS vs EFS](#ebs-vs-efs)
  + [Shared responsibility model for EC2 Storage](#shared-responsibility-model-for-ec2-storage)
  + [Amazon FSx](#amazon-fsx)
  + [Summary](#ec2-instance-storage-summary)

### 07. [ELB & ASG - Elastic Load Balancing & Auto Scaling Groups](#07-elb-and-asg-elastic-load-balancing-and-auto-scaling-groups)
  + [High availability, Scalability, elasticity](#high-availability-scalability-elasticity)
  + [Load Balancing](#load-balancing)
  + [ELB (Elastic Load Balancer)](#elb-elastic-load-balancer)
    + [AWS offers 3 kinds of load balancers](#aws-offers-3-kinds-of-load-balancers)
  + [Auto Scaling Group](#auto-scaling-group)
  + [ASG strategies](#asg-strategies)
  + [Summary](#summary-elb-and-asg)

### 08. [S3](#08-s3)
  + [Security Bucket Policy](#s3-security-bucket-policy)
  + [S3 Website](#s3-website)
  + [S3 Versioning](#s3-versioning)
  + [S3 Server Access logging](#s3-server-access-logging)
  + [Replication](#s3-replication)
  + [S3 storage classes](#s3-storage-classes)
  + [S3 Glacier Vault Lock and S3 Object lock](#s3-glacier-vault-lock-and-s3-object-lock)
  + [S3 - Shared Responsibility model](#s3-shared-responsibility-model)
  + [AWS Snow Family](#aws-snow-family)
  + [AWS OpsHub](#aws-opshub)
  + [Storage Gateway](#storage-gateway)
  + [Summary](#summary-08-s3)
  
### 09. [Databases and Analytics](#09-database-and-analytics)
  + [RDS and Aurora](#rds-and-aurora)
  + [RDS deployment options](#rds-deployment-options)
  + [ElastiCache](#elasticache)
  + [DynamoDB](#dynamodb)
  + [Redshift](#redshift)
  + [EMR](#emr)
  + [Athena](#athena)
  + [Quicksight](#quicksight)
  + [DocumentDB](#documentdb)
  + [Neptune](#neptune)
  + [QLDB](#qldb)
  + [Amazon ManagedBlockchain](#amazon-managed-blockchain)
  + [DMS](#dms)
  + [Glue](#glue)
  + [Summary](#summary-09-databases-and-analytics)

### 10. [Other compute services](#10-other-compute-services)
  + [what is docker?](#what-is-docker)
  + [ECS, Fargate & ECR Overview](#ecs-fargate-&-ecr-overview)
    + [ECS (for Docker)](#ecs-for-docker)
    + [Fargate (for Docker)](#fargate-for-docker)
    + [ECR](#ecr)
  + [Serverless](#serverless)
  + [Why lambda?](#why-lambda)
  + [Benefits of Lambda](#benefits-of-lambda)
  + [AWS lambda language support](#aws-lambda-language-support)
  + [API Gateway Overview](#api-gateway-overview)
  + [Batch overview](#batch-overview)
  + [Lightsail overview](#lightsail-overview)
  + [summary-Other compute services](#summary-10-other-compute-services)

### 11. [Deploying and managing infrastructure at scale](#11-deploying-and-managing-infrastructure-at-scale)

  ###### Deployment services
  + [CloudFormation](#cloudformation)
  + [cloud development kit CDK](#cdk)
  + [Beanstalk](#beanstalk)
  + [AWS Systems Manager (SSM)](#aws-systems-manager-ssm)
  + [Systems Manager - SSM Session Manager](#systems-manager-ssm-session-manager)
  + [Opsworks](#opsworks)

  
  ###### Developer Services
  + [AWS CodeDeploy](#aws-codedeploy)
  + [AWS CodeCommit](#aws-codecommit)
  + [AWS CodeBuild](#aws-codebuild)
  + [AWS CodePipeline](#aws-codepipeline)
  + [AWS CodeArtifact](#aws-codeartifact)
  + [AWS CodeStar](#aws-codestar)
  + [AWS Cloud9](#aws-cloud9)

### 12. [Leveraging AWS Global infrastructure](#12-leveraging-aws-global-infrastructure)

  + [Why use global applications?](#why-use-global-applications)
  
  ###### Global Applications in AWS
  + [Global DNS (Route53)](#global-dns-route53)
  + [Global CDN (CloudFront)](#global-cdn-cloudfront)
    + [CloudFront vs Cross Region Replication?](#cloudfront-vs-cross-region-replication)
  + [S3 Transfer Acceleration](#s3-transfer-acceleration)
  + [AWS Global accelerator](#aws-global-accelerator)
    + [Global Accelerator vs CloudFront?](#global-accelerator-vs-cloudfront)
  + [AWS Outposts](#aws-outposts)
  + [AWS Wavelength](#aws-wavelength)
  + [AWS Local Zones](#aws-local-zones)
  --
  + [Global Applications Architecture](#global-applications-architecture)
  + [Summary - Leveraging AWS Global Infrastructure](#summary-leveraging-the-aws-global-infrastructure)

### 13. [Cloud Integrations](#13-cloud-integrations)
  + [SQS (Simple Queue service)](#sqs-simple-queue-service)
  + [SNS (Simple notification services)](#sns-simple-notification-services)
  + [Kinesis](#kinesis)
  + [Amazon MQ](#amazon-mq)
  + [Summary](#summary-13-cloud-integrations)

### 14. [Cloud monitoring](#14-cloud-monitoring)
  + [Cloudwatch Alarms](#cloudwatch-alarms)
  + [Cloudwatch Logs](#cloudwatch-logs)
  + [Cloudwatch Events / EventBridge](#cloudwatch-events-eventbridge)
  + [CloudTrial](#cloudtrial)
  + [X-ray](#x-ray)
  + [CodeGuru](#codeguru)
  + [Service Health Dashboard](#service-health-dashboard)
  + [personal health dashboard](#personal-health-dashboard)
  + [Summary](#cloudmonitoring-summary)

### 15. [VPC & Networking](#15-vpc-and-networking)
  + [VPC (Virtual Private Cloud), Subnets, Internet Gateways, NAT Gateways](#vpc-virtual-private-cloud-subnets-internet-gateways-nat-gateways)
  + [Security Groups, Network ACL (NACL), VPC Flow Logs](#security-groups-network-acl-nacl-vpc-flow-logs)
  + [VPC Peering](#vpc-peering)
  + [VPC Endpoints](#vpc-endpoints)
  + [Site to Site VPN and Direct Connect](#site-to-site-vpn-and-direct-connect)
  + [Transit Gateway](#transit-gateway)
  + [Summary](#summary-vpc-and-networking)

### 16. [Security and Compliance](#16-security-and-compliance)
  + [DDOS Protection: WAF & Shield](#ddos-protection-waf-and-shield)
  + [Penetration Testing](#penetration-testing)
  + [Encryption with KMS & CloudHSM](#encryption-with-kms-and-cloudhsm)
    - [Types of Customer Master Keys: CMK](#types-of-customer-master-keys-cmk)
  + [Summary](#summary-16-security-and-compliance)

### 17. [Machine Learning](#17-machine-learning)
  + [Rekognition](#recognition)
  + [Transcribe](#transcribe)
  + [Polly](#polly)
  + [Translate](#translate)
  + [LEX + Connect](#lex-and-connect)
  + [Comprehend](#comprehend)
  + [Sagemaker](#sagemaker)
  + [Forecast](#forecast)
  + [Kendra](#kendra)
  + [Personalize](#personalize)
  + [Summary](#summary-17-machine-learning)

### 18. [Account management, Billing and support](#18-account-management-billing-and-support)

### 19. [Advanced Identity](#19-advanced-identity)
  + [AWS Organizations](#aws-organizations)

### 20. [Other Services](#20-other-services)

### 21. [AWS architecting and Ecosystem](#21-aws-architecting-and-ecosystem)

---
---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 01. Create an AWS account

* does need a credit card, to verify identity (authorization)
* Stay on the AWS free tier
* root user account / password


---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 02. Summary

#### Summary - 04. IAM Section
* users: mapped to a physical user; has a password for AWS Console
* groups: contain users only
* policies: JSON document that outlines permissions for users or groups
* Roles: for EC2 instances or AWS services
* Security: MFA + password policy
* AWS CLI: manage your AWS services using the command line
* AWS SDK: manage your AWS services using a programming language
* Access keys: access AWS using CLI or SDK
* Audit: Credential Reports & IAM Access advisor

#### Summary - 05. EC2 Elastic Compute cloud
* EC2 instances: AMI (OS) + instance size (CPU+RAM) + storage + security groups + EC2 user data
* Security groups: firewall attached to EC2 instance
* EC2 user data: script launched at first start of instance
* SSH: start a terminal into our EC2 instances (port 22)
* EC2 instance role: link to IAM roles
* purchasing options: on-demand, spot, reserved(standard + convertible + scheduled), dedicated hosts , dedicated instance.

#### Summary - 06. EC2 Instance Storage
* EBS volumes
  - network drives attached to one EC2 instance at a time
  - mapped to AZ
  - can use EBS snapshot for backups / transfering EBS volumes across AZ
* AMI - create ready-to-use EC2 instances within our customizations
* EC2 Image builder - automatically build, test, distribute AMI's
* EC2 instance store - high performance harddrive attached to EC2
  - lost if instance is stopped /terminated
* EFS - network file system, can be attached to 100s of instances in a region
* EFS-IA - cost-optimized storage class for infrequent accessed files
* FSx for windows - Network file system for Windows server.

#### Summary - 07. ELB and ASG
* High Availability vs Scalibility (vertical vs horizontal) vs Elasticity vs agility in the cloud
* Elastic Load Balancers(ELB)
  - Distribute traffic across backend EC2 instances, can be multi-Az
  - support health checks
  - 3 types: Application LB (http-L7), Network LB (TCP-L4), Classic LB (old)
* Auto Scaling group (ASG)
  - implement the elasticity of application, across multiple AZ.
  - scale EC2 instances based on the demand of your system, replace unhealthy
  - integrated with ELB

#### Summary - 08. S3
* EXAM - big section in exam, need to know well.
* Buckets vs Objects: Global unique name, tied to a region
* S3 Security: IAM policy, S3 Bucket Policy (public access), S3 Encryption
* S3 Websites: host a static website on Amazon S3
* S3 Versioning: Multiple versions for files, prevent accidental deletes.
* S3 Access logs: log request made within your S3 Bucket
* S3 Replication: Same-region or cross-region, must enable versioning
* S3 Storage Classes: Standard, IA, 1Z-IA, Intelligent, Glacier, Glacier Deep Archive
* S3 Lifecycle Rules: transition objects between classes
* S3 Glacier Vault Lock / S3 Object Lock: WORM (Write Once Read Many)
* Snow Family: import data onto S3 through a physical device, edge computing
* OpsHub: desktop application to manage Snow Family devices
* Storage Gateway: hybrid solution to extend on-premises storage to S3

#### Summary - 09. Databases and analytics
* Relational Databases - OLTP: RDS and Aurora (SQL)
* Difference between Multi-Az, Read Replicas, Multi-region
* In-memory Database: ElastiCache
* Key/Value Database : DynamoDB (serverless) & DAX (cache for DynamoDB)
* Warehouse - OLAP: Redshift (SQL)
* Hadoop Cluser: EMR
* Athena: query data on Amazon S3 (serverless & SQL)
* QuickSight: dashboards on your data (serverless)
* DocumentDB: Aurora for MongoDB (Json - NoSQL database)
* Amazon QLDB: financial transactions ledger (immutable journal, crytographically verifiable)
* Amazon Managed Blockchain: managed Hyperledger Fabric & Ethereum blockchains
* Glue: Managed (ETL extract transform load) and Data Catalog service.
* Database Migration: DMS
* Neptune: graph Database

#### Summary - 10. Other Compute services
* Docker - container technology allowing you to run applications
* ECS - run docker containers on EC2 instances
* Fargate - run docker containers without provisioning the infrastructure - serverless (no EC2 instances)
* ECR - private docker images repository
* Batch - run batch jobs on AWS across managed EC2 instances
* lightsale - predictable & low pricing for simple application & db stack
* lambda - serverless FaaS (function as a service), seamless scaling, reactive
  * Lambda billing - by time run * RAM provisioned
  * number of invocations
  * invocation time up to 15min
  * use cases: 
      * create thumbnails for images uploaded to AWS S3
      * CRON job
  * API gateway exposes lambda functions as http APIs

#### Summary - 12. Leveraging the AWS Global Infrastructure
* Global DNS: Route 53
  - greate to route users to closest deployment with least latency
  - great for disaster recovery strategies
* Global Content Delivery Network (CDN): CloudFront
  - Cache common requests - improves user experience and decreased latency
* S3 Transfer Acceleration
  - Accelerate global uploads and downloads into Amazon S3
* AWS Global Accelerator
  - improve global application availability and performance using the AWS global network.
* AWS Outposts
  - Deploy Outpost racks into your own Data centers to extend AWS services
* AWS WaveLength
  - Brings AWS services to the edge of 5g networks
  - Ultra low latency applications
* AWS Local Zone
  - Bring AWS Resources (Compute, database, storage) closer to your users
  - Good for Latency-sensitive applications.

#### summary - 13. cloud integrations
* SQS 
  - queue service in AWS
  - multiple producers, messages are kept up to 14 days.
  - multiple consumers share the read and delete messages when done.
  - used to decouple applications in AWS

* SNS
  - Notification service in AWS
  - Subscribers: Email, lambda, SQS, HTTP, Mobile etc
  - Multiple subscribers -> send all messages to all of them
  - no message retention

* Kinesis: real-time data streaming, persistence and analysis
* Amazon MQ: Managed Apache MQ in the cloud (MQTT, AMQP etc ...protocols)

#### Summary - 14. Cloud monitoring
* Cloudwatch:
  - Metrics: monitor the performance of AWS services and billing metrics
  - Alarms: Automate notification, perform EC2 Action, notifyy to SNS based on Metric.
  - Logs: Collect log files from EC2 Instances, servers, Lambda functions...
  - Events (EventsBridge): react to events in AWS, or trigger a rule on a schedule.
* CloudTrial: audit API Calls made within your AWS account
* CloudTrial Insights: Automated analysis of your CloudTrial Events.
* X-Ray: trace requests made through your distributed applications.
* Service Health Dashboard: status of all AWS services across all regions.
* Personal Health Dashboard: AWS Events that impact your infrastructure.
* CodeGuru: Automade code reviews and application performance recommmendations.

#### Summary - 15. VPC and networking
* VPC: Virtual private cloud
* Subnets: tied to an AZ, network partition of the VPC.
* Internet Gateway: at the VPC level, provide Internet Access.
* NAT Gateway / Instances: give internet access to private subnets
* NACL: Stateless, subnet rules for inbound and outbound
* Security Groups: Stateful, operate at the EC2 instance level or ENI
* VPC Peering: Connect 2 VPC with non-overlapping IP ranges, non-transitive
* VPC Endpoints: provide private access to AWS Services within VPC
* VPC Flow logs: network traffic logs
* Site to Site VPN: VPN over public internet between on-premises DC and AWS.
* Direct Connect: direct private connection to AWS.
* Transit Gateway: Connect thousands of VPC and on-premises networks together.

#### Summary - 16. Security and compliance
* shared responsibility on AWS
* Shield: automatic DDos Protect + 24/7 support for advanced
* WAF: Firewall to filter incoming requests based on rules
* KMS: Encryption keys managed by AWS
* CloudHSM: Hardware encryption, we manage encryption keys
* AWS Certificate Manager: provision, manage, deploy SSL/TLS Certificates
* Artifact: Get access to compliance reports such as PCI, ISO, etc
* GuardDuty: Find malicous behavior with VPC, DNS, CloudTrail logs
* Inspector: For EC2 only, install agent and find vulnerability
* Config:track config changes and compliance against rules
* Macie: find sensitive data (eg. PII data) in S3 buckets
* CloudTrail: track API calls made by users within account
* AWS Security Hub: Gather security findings from multiple AWS accounts
* AWS Detective: find the root cause of security issues or suspicous activities
* AWS Abuse: report AWS resources used for abusive or illegal purposes
* Root User priviledges
  - change account settings
  - close AWS account
  - change/cancel aws support plan
  - register as a seller in reserved instance marketplace.

#### Summary - 17. Machine Learning
* Recognition - face detection, labeling, celebrity recognition
* Transcribe - audio to text (eg. subtitles)
* Polly - text to audio
* Translate - translations
* Lex - Build conversational bots - chatbots
* Connect - Cloud contact center
* Comprehend - natural language processing
* SageMaker - Machine learning for every developer and data scientist
* Forecast - build highly accurate forecasts
* Kendra - ML-Powered search engine
* Personalize - Real-time personalized recommendations

--- 
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 03. Cloud computing
* Cloud computing is the on-demand delivery of compute power, database storage, applications and other IT resources.
* Cloud allows pay-as-you-go-pricing
* provision exact type and size of computing
* instance access
* AWS cloud has nice interface to access these services.
* AWS owns and maintains the network-connected hardware requried for these application services, while you provision and use what you need via a web application.
The Cloud is the solution to externalize all the problems with traditional data centers.
* the cloud has its own data center, servers.

How Websites work
* a server hosts a website
* a have a client that makes a request via browser for resource on server
* network routes packets (data) to server - request
* server makes a response
* client views the website

for client to find server and server to respond to client, both need IP addresses for routing.

#### what makes a Server  
* CPU
* memory (RAM)
* Storage data
* database (formatted data)
* network aspect: routers, switch, DNS server

#### problems with traditional data centers
* rent space
* pay for power, cooling, maintenance
* time to add/replace servers
* scaling is limited
* hire someone 24/7 to monitor infrastructure

#### deployment models of the cloud
private cloud 
* eg. Rackspace
* service used by single organization, not exposed to public. complete control, security.

public cloud 
* AWS / Google cloud / Microsoft Axure
* cloud resources owned by 3rd party cloud service provider are delivered over the internet.

Hybrid Cloud
* keep some servers on premises, extend capabilities to cloud.

##### 5 characteristics of cloud computing
* on demand service - users can provision these resources without intervention from AWS.
* broad network access - access to resources
* multi-tenancy and resource pooling - multiple customers can benefit from same infrastructure + security
* rapid elasticity and scalibility - quickly acquire and dispose resources / scale on demand
* measured service - pay for what you use

##### 6 advantages of cloud computing
1. trade capital expense (CAPEX) for operational expense (OPEX)
    - pay on demand - don't own hardware
    - reduce total cost of ownership (TCO) and Operational Expense (OPEX)
2. benefit from advantages of scale
    - prices lower because more effienct due to large scale use
3. stop guessing capacity
    - scale based on actual measured usage
4. increase speed and agility
5. no data center costs (running and maintaining)
6. go global in minutes - leverages the AWS global infrastructure.

##### problems solved by the cloud
* flexibility
* cost effective
* scalability
* elasticity
* high-availability
* agility

#### Types of cloud computing

##### infrastructure as a service (IaaS)
  - networking, computers, data storage space
  - we care about application and data and runtime / middleware / OS
  - eg. Amazon EC2 

##### platform as a service (PaaS)
  - removes need for organization to manage the infrastructure
  - we only care about the application and data
  - eg. Elastic Beanstalk, Heroku, Google App Engine (GCP), MS Axure

##### Software as a service (SaaS)
  - completed product that is run and managed by service provider
  - many aws service eg. Rekognition, machine learning, google apps, dropbox

#### Pricing of the cloud
3 pricing fundamentals
* Compute - pay for compute time
* storage - pay for data stored in the cloud
* networking - pay for data transferred out of the cloud

#### AWS Global infrastructure

[https://infrastructure.aws](https://infrastructure.aws)
##### AWS regions
- named eg. us-east-1
- region is a cluster of data centers
- most AWS services are region scoped

  ##### How to choose an AWS Region?
  * compliance - data governance and legal requirements, data never leaves the region
  * proximity - closer to users for lower latency
  * available service within a region - new services arent available in every region
  * pricing - pricing differs region to region
  
##### AWS availability Zones
* each region has many availability zones (AZ)
* usually 3, min 2, max 6 
* eg. if region is ap-souteast-2, az will be named a,b,c eg. ap-souteast-2a
* these AZ are separate from each other to isolate from disasters


##### AWS Data Centers
* each AZ is one ore more data centers
* connected with highbandwidth, ultralow latency networking.

##### AWS Edge Locations / Points of presence
* AWS has more than 216 points of presence (205 edge locations, 11 regional caches)
in 84 cities across 42 countries.

#### AWS shared responsibility model
AWS responsible: security OF the cloud - software, infrastructure, internal security

Customer responsible: security IN the cloud - what you use in the cloud, security, data, OS

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 04. IAM (identity and access management)
* Global service - where we create users and assign them to a group
* users can belong to group(s) or no-group
* groups only contain users (cant belong inside another group)
* a policy (JSON) - we can allow these groups/users certain permissions 
* least priviledge principle - dont give permission more than user needs.

User
* need to add user to a group.
* permissions are inherited from Group(s) user is added to.
* tags are information that help you track something
* .CSV will have credentials
* create an account alias
* sign in url created for account alias

User Group
* When creating a group, you need to create a policy
* Attach policy - AdministratorAccess

### IAM Policies
* policies attached at group level get inherited by every member of group.
* inline-policies can be attached to individual users.

#### IAM policy structure 
JSON
* version (required)
* Id: identifier for policy (optional)
* Statement: one or more in individual statements (required)

Statement consists:
* Sid: identifier for statement (optional)
* Effect: whether statement allows or denies access (allow, deny)
* Principal: account / user /role to which this policy applied to
* Action: list of actions this policy allows or denies
* Resource: list of resources to which the actions applied to.
* Condition: conditions for when this policy is in effect (optional)

```json
// example of a JSON policy

{
  "version":"2012-10-17",
  "Id":"S3-Account-Permissions",
  "Statement":[
    {
      "Sid":"1",
      "Effect":"Allow",
      "Principle":{
        "AWS":["arn:aws:iam::1234345345435:root"]
      },
    "Action":[
      "s3:GetObject",
      "s3:PutObject"
    ],
    "Resource":["arn:aws:s3::mybucket/*"]
    }
  ]
}

```
### Protecting user accounts
#### password policy
Protect users in groups with password policies:

* set minimum length
* require specific character types
  - include uppercase letters
  - lowercase letters
  - numbers
  - non-alphanumeric characters
* allow all IAM users to change their own passwords
* require users to change their own passwords after sime time (password expiration)
* prevent password reuse

#### Multi-factor authentication (MFA)
MFA - is a combination of using a password you know + a security device (token generator) you own.
eg. Authy (multidevice), Google Authenticator (phone only)

Types of MFA devices
* universal 2nd factor (U2F) Security key
* Hardware Key Fob MFA Device
* Hardware Key Fob MFA device for AWS GovCloud (US)

### 3 ways to access AWS
* AWS management console - protected by password + MFA
* Accessing AWS using CLI (command line interface) protected by access keys
  - install AWS CLI v2
  ```cmd
    aws configure
  ```
* AWS software develop Kit (SDK) - language specific APIs for coding protected by access keys

#### Access keys
* Access keys are generated by AWS Management Console.
* do not use Root account to create security credentials.
* users are responsible for their own access keys.
* useful if you will use CLI or SDK in some programing language for AWS

#### AWS CloudShell
An alternative to using the cmd terminal to access AWS in the cloud.
* available in some regions only

### IAM roles for AWS Services
* just like we have policies for users, we have IAM Roles for AWS services
* giving AWS permission to perform tasks on our behalf

Common roles:
* EC2 instance roles
* lamda function roles
* roles for cloudFormation

### IAM Security Tools
* IAM credentials report (account-level)
  - report listing all accounts users and status of various credentials
* IAM Access Advisor (user-level)
  - shows service permissions granted to a user and when those services were last accessed

### IAM Shared responsibility model
###### AWS
* infrastructure (global network security)
* configation and vulnerability analysis
* compliance vaildation

###### User
* users, groups, roles, policies, management and monitoring
* enable MFA on all accounts
* rotate all your keys often
* use IAM tools to apply appropriate permissions
* analyze access patterns and review permissions

### IAM Summary
[Summary - IAM Section](#summary-iam-section)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 05. EC2 - Elastic Compute Cloud
* make sure user has access to 'Billing and cost management dashboard'
* login to root user
* my billing dashboard -> activate IAM access - allows IAM administrators are allowed to access billing data (ensures you enable IAM user and role access to billing information)
* know how to create a budget.
* EC2 (Elastic Compute cloud) - infrastructure as a service

#### What can you do with EC2?
* rent virtual machines (EC2)
* storing data on virtual drives (EBS)
* distribute load across machines (ELB)
* scaling service using auto-scaling group (ASG)

#### EC2 Virtual server - options
* windows or linux, mac
* CPU
* RAM
* storage 
    - network attached (EBS or EFS)
    - hardware (EC2 instance store)
* network card (performance), speed and public IP address
* firewall rules (security group)
* Bootstrap script (configure first launch) (EC2 User Data - runs as root user)
  - automate boot tasks
    - installing updates
    - installing software
    - downloading common files from internet

#### creating an EC2 instance with EC2 User Data
* EC2 
* instances => choose AMI (Amazon *linux 2)
* instance type => t2.micro (free tier eligible)
* number of instances => 1
* network, subnet, auto-asign public IP => default
* IAM role => 
* EC2 User Data (launched during first boot)


##### EC2 User Data
```
#!/bin/bash
# Use this for your user data (script from top to bottom)
# install httpd (Linux 2 version)
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

### EC2 Instance types
```
https://aws.amazon.com/ec2/instance-types/

http://instances.vantage.sh

```

#### 7 different types of EC2 instances
* General purpose
  - great for diverity of workload such as web servers or code repositories
  - balance between: compute, memory, networking
  - T2.micro *(up to 720 hrs processing with T2.micro)

* pcompute optimized (names generally start with C class)
  use cases:
  - great for compute-intensive tasks that require high performance
  - batch processing workloads
  - media transcoding
  - high performance web servers
  - high performance computuing (HPC)
  - scientific modeling & machine learning
  - dedicated gaming servers

* memory optimized (names generally start with R class (r for Ram), X1, High Memory, Z1)
  - fast performance for workloads that process large data sets in memory
  use cases:
  - high performance for relational/non-relational databases
  - distributed web scale cache stores
  - in-memory databases optimized for BI (business intelligence)
  - application performing real-time processing of big unstructured data

* storage optimized (class names I, D, H1)
  - great for storage-intensive tasks that require high, sequencial read and write access to large datasets on local storage.
  use cases:
  - high frequency online transaction processing (OLTP) systems
  - relational and noSQL databases
  - cache for in-memory databsaes (eg. Redis)
  - Data warehousing applications
  - Distributed file systems

* accelerated Computing
* instance features
* measuring instance performance

#### naming convention
m5.2xlarge

m: instance class
5: generation (AWS improves over time)
2xlarge: size within the instance

### Security Groups
* security group is a firewall around EC2 instance.
* security groups are the fundamental of network security in AWS.
* control how traffic is allowed in or out of our EC2 instances.
* security groups only have "allow" rules
* security rules can reference by IP or by security group.
* they regulate: 
  - access to ports
  - authorised IP ranges - IPV4 and IPV6
  - control inbound network
  - control outbound netowkr

* type, protocol, port, source, description
* HHTP, TCP, 80, 0.0.0.0/0 (everything can gain entrance), test http page

* note on source: 
  * 0.0.0.0/0 - everywhere on IPv4
  * ::/0 - everywhere on IPv6

#### Ports you need to know
* 22 = SSH (secure shell) - log into a linux instance.
* 21 = FTP (file transfer protocal)
* 22 = SFTP (secure file transfer protocal) - upload files using SSH
* 80 = HTTP (access unsecure websites)
* 443 = HTTPS (access secure websites)
* 3389 = RDP (Remote Desktop Protocol) - log into a windows instance

### SSH
can connect to server using public IP (eg. 35.180.100.144). security groups need allow inbound port 22, source: 0.0.0.0/0

connecting to servers:

Mac:          SSH,                   EC2,  instance connect
Linux:        SSH,                   EC2,  instance connect
Win < 10                 putty,      EC2,  instance connect
Win > 10:     SSH,       putty,      EC2,  instance connect

##### SSH with Linux or Mac:
* need .pem file to access machine (created when creating user) eg. EC2Tutorial.pem
* give chmod permission to key
* 'ec2-user' linux user into amazon machine (default)
* *EXAM *problem permissions 0644 too open. solution -> chmod 044 key.pem

```
chmod 0400 EC2Tutorial.pem                              //0400. Allows the owner to read.
ssh -i EC2Tutorial.pem ec2-user@35.180.100.144          //let only someone with key into E2 machine at that IP.
```

##### SSH into EC2 Windows
* SSH allows you to control a remote machine using a command line.
* configure required parameters for doing SSH on windows using Putty.
* PuttyGen to generate a key which putty likes. 
  * load private key -> .pem file -> save private key as .ppk file
* Putty -> enter IP address (public) from AWS EC2 instance ... host name: ec2-user@35.180.100.144 port: 22
* save session with name
* link private key file...connection -> SSH -> Auth -> private key file for authentication -> browse for .ppk file
* go back to session -> save (this saves the ppk authentication file)

##### SSH into Windows 10
* AWS ec2 linux default user is always 'ec2-user'
* if error because permission denied -> go to the .pem file -> right click -> security -> advanced -> the owner of the key is yourself (logged in user) -> disable inheritance -> remove any other user other than youself.
* make sure youself has full control of the file.
```
ssh -i c:\users\Swagfinger\Downloads\Ec2Tututorial.pem ec2-user@35.180.242.162

```

##### instance connect
* note ec2-user only works for Amazon linux 2 or ubuntu EC2 instances at this moment
* the instance connect still relies on SSH so port 22 needs to be enabled.
connect to instance -> select EC2 instance connect -> username -> ec2-user 
 
##### Instance Roles
* NB never run aws configure on an EC2 instance (other users who do the same will gain access to your credentials)
* use IAM roles -> right click on EC2 instance -> attach / replace IAM role -> attach role
* Roles are a way to allow EC2 instances to issue commands against AWS.

### Instance Launch types
*EXAM
* On-Demand instances: short workload, predictable pricing
* Reserved: (minimum 1 year)
  1. reserved instances: long workloads
  2. convertible reserved instances: long workloads with flexible instances
  3. scheduled reserved instances - every thursday between 3 and 6pm 
* spot instances - short workloads, cheap, can lose instances (less reliable).
* dedicated hosts: book anb entire physical server, control instance placement.

##### On-demand
* pay for what you use
* linux or windows billing per second, after the first minute. all other OS - billing per hour.
* has highest cost but no upfront payment
* no long-term commitment
* recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave.

##### reserved
* up to 75% discount compared-to on demand
* 1 year (discount) or 3 year (more discount)
* no upfront, partial upfront (more discount), all upfront ( even more discount)
* reserve a specific instance type
* recommended for steady-state usage applications (databases)
* convertible reseverd instance (can change EC2 type) up to 54% discount
* schedule reserve instance - launch within time window you reserve. when you require a fraction of day/week/month over 1->3 yrs.

##### Spot instances
* can get up to 90% compared to on-demand
* you can loose instance at any time if the price you are willing to pay is less than the current spot price.
* most cost-efficient in AWS.
* useful for workloads resilient to failure: batch jobs, image processing, data analysis, distributed workload.
* not for critical job or database.

##### EC2 dedicated HOSTS
* Amazon EC2 dedicated host is a physical server with EC2 instance capacity fully dedicated to your use. dedicated hosts can help you address compliance requirements. using your existing server-bound software licenses.
* 3yr reservation period.
* more expensive.
* per host billing.

##### EC2 dedicated Instance
* dedicated instance vs dedicated host (*there is a difference)
* instances runing on hardware dedicated to you
* per instance billing
* may share hardware with other instances in same account
* automatic instance placement

### Shared responsibility model
##### AWS
* infrastructure (global network security)
* isolation of physical hosts
* replacing faulty hardware
* compliance validation

##### your responsibility
* security in the cloud (security group rules)
* OS patches and updates
* software on EC2
* IAM roles & IAM user access management
* data security on your instances.

### Summary
[Summary - 05- EC2 Elastic compute cloud](#summary-05-ec2-elastic-compute-cloud)

---
###### <Div style="text-align:right">[table of contents](#table-of-contents)</div>
## 06. EC2 - Instance Storage
### EBS Volume
* EBS (Elastic block store)
* network drive that you can attach to instances while they run,
* allows persisting data even after instance terminated
* can only be attached to one EC2 at a time (cloud practitioner level). 
  - one EC2 instance can have multiple EBS volumes.
* EBS volumes are bound to a AZ (availability zone). To move volume -> you create a snapshot.
* "Network usb stick"
* 30gb free EBS storage of type general purpose (SSD) or magnetic per month
* have to provision capacity in advance.
* delete on termination attribute - controls how EBS gets handled when EC2 terminated
  - default -> root EBS volume is terminated / other attached EBS volumes are not deleted.
  -> these can be controlled.

### EBS Snapshot
* make a backup of EBS volume at a point in time by taking a snapshot of EBS
* not necessary to first detach from EC2 instance 
* restore by attach EBS volume to another AZ.

### AMI 
* Amazon Machine Image
* represent a customization of an EC2 instance.
* AMIs are created for a specific region then copied across regions

##### You can launch EC2 instances from:
* public AMI (provided by AWS)
* your own AMI (you make and maintain)
* an AWS Marketplace AMI (someone else makes and sells)

##### AMI process from EC2
* Start EC2 intance and customize
* stop the instance (data integrity)
* Build an AMI - this creates EBS snapshots
* Launch instances from other AMIs

### EC2 Image Builder
* EXAM
* used to automate the creation of virtual machines or container images.
* Automate the creation, maintain, validate and test EC2 AMIs
* EC2 Image Builder 
  1. creates EC2 instance (builder EC2 instance) - builds components 
  2. New AMI created 
  3. Test EC2 instance
  4. distribute AMI to multiple regions
* EC2 builder can run on a schedule
* free service (only pay for resources used)

#### Image builder hands on
##### 1. Specify Pipeline details
* create new pipeline
* build schedule is how often should run (or if there are new dependencies)

##### 2. Choose Recipe
* recipe is a document that defines how Source image is customized (docker vs  AMI)
* Select image: Managed Images vs. Custom AMI
* Image OS: Amazon Linux
* Image Origin: Quickstart Amazon Managed -> Amazon Linux 2 x86
* Components: build components pre-created onto image; can set order components install

##### 3. define infrastructure configuration 
  -> create new infrastructure configuration 
  - create IAM role -> attach policy ->  
  (looking at default IAM instance profile...)
  1. EC2InstanceProfileForImageBuilder
  2. EC2InstanceProfileForImageBuilderECRContainerBuilds
  3. AmazonSSManagedInstanceCore
* Create Role 
* select IAM role we created
* we can customize AWS infrastructure -> t2.micro 

##### 4. Define distribution settings
* can create own distribution setting to automatically distribute AMI to multi regions
* create pipeline

### EC2 Instance Store
* higher performance than EBS (network drive)
* is a hardware disk attached to EC2 instance
* better I/O performance
* EC2 instance store lose their storage if they're stopped (ephermeral)
* good for buffer / cache / stratch data / temporary content
* risk of data loss if hardware fail
* backups and replication are your responsibility

### EFS (Elastic file system)
* Elastic File System
* Managed NFS (network file system) that can be mounted to 100s of EC2 at a time
* shared network file system
* EFS works only with Linux EC2 in multi-AZ
* highly available, scalable, expensive (3x gp2), pay per use, no capacity planning

##### EFS-IA
* EFS-IA (storage class) cost optimized for infrequently accessed
* if EFS-IA is enabled, is automatically managed by EFS.
* EFS is 92% lower clost compared to EFS standard
* infrequrently used files are moved to EFS-IA

### EBS vs EFS 
* EXAM
* EBS can only connect to one EC2 bound to one AZ.
* EBS can snapshot a copy 

* EFS whatever is on drive is shared by all EC2 instances
* Shared file system

### Shared responsibility model for EC2 Storage
##### AWS
* infrastructure
* replication for data for EBS volumes & EFS drives
* replacing faulty hardware
* ensure AWS employees cannont access your data

##### your responsibility
* setting up backup / snapshot procedures
* setting up data encryption
* responsibility of any data on the drives
* risk of EC2 instance store - can lose drive if faulty hardware, if you stop 
EC2 instance with instance store,data will be lost (it is your responsibility to backup in first place)

### Amazon FSx
* managed service to get 3rd party high-performance file systems on AWS.
* incase you dont want to use EFS or S3

3 options
* FSx for Lustre 
  - fully mananged, high-performance, scalable file storage for high performance computing (HPC)
  - 100 gb/s millions of IOPS, sub-ms latencies.
* FSx for Windows File Server
  - Fully managed, highly reliable, scalable Windows shared file system.
  - built on windows file server
  - support for SMB protocol and Windows NTFS
  - integration with MS active directory
* FSx for NetApp ONTAP

### EC2 Instance Storage Summary
[Summary - 06. EC2 Instance Storage](#summary-06-ec2-instance-storage)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 07. ELB and ASG - Elastic Load Balancing and Auto Scaling Groups
### High Availability, Scalability, Elasticity
#### Availability
* goes hand-in-hand with horizontal scaling.
* goal is to survice data center loss.
* running instances of same application in atleast 2 availability zones.
  * auto scaling group in mutli AZ.
  * load balancer multi AZ.

#### Scalability
* It can handle greater loads by adapting.
* 2 kinds: vertical scalability, horizontal scalability (elasticity)
  * Vertical: increase size of the instance eg. t2.micro -> t2.large. 
    common for non-distributed systems such as databases. 
    vertical scale has hardware limit.
  * Horizontal: increase number of instances / systems for application
    implies distributed system. common for web applications /modern applications. AWS allows this by: EC2 and auto scaling groups / load balancers

#### Elasticity
* Once a system is scalable, elasticity means that there will be some "auto-scaling" so that the system can scale based on the load.
* This is is "cloud-friendly': pay per use, match demand, optimize costs.

#### Agility (distractor)
* IT resources only a click away with reduced time to make those resources available to developers from weeks to minutes.

### Load Balancing
* Load balancers are servers that forward internet traffic to multiple servers (EC2 instances) downstream.
* helps with Elasticity
* more users, more it will balance load across multiple EC2 instances

##### Why use load balancer?
* spread load across multiple downstream instances
* expose a single point of acess (DNS) to your application
* seamlessly handle failure of downstream instances
* do regular health checks on instances
* provide SSL termination (HTTPS) for your websites
* high available across zones

### ELB (Elastic Load Balancer)
* An ELB (Elastic Load Balancer) is a managed load balancer
  - AWS guarantees that it will be working
  - AWS takes care of upgrades, maintainence, high availability
  - AWS provides only a few configuration knobs
* It costs less to setup your own load balancer but it will be a lot more effort on your end (maintenance, integrations)

##### AWS offers 3 kinds of load balancers
1. Application load balancer - HTTP and HTTPS only - layer 7
2. Network Load Balancer - ultra high performance, allows for TCP - layer 4
3. Classical load balancer - layer 4 and 7 (previous gen, older model before split into 7 and 4)
4. Gateway load balancer - *new

##### ALB - hands on
* if you start 2 EC2 instances, their IP's are different, using a load balancer will manage a target group of EC2 (select EC2 instances...)

### Auto Scaling Group
* once you have an application that can be load balanced with a load balancer, 
* use ASG to automatically create servers in backend.
* eg. a website's load that has more traffic at certain times
* scales out and scales in to adjust to requirements
* automatically register new instances to a load balancer
* ASG can detect and replace unhealthy instacnes
* cost savings - only run at optimal capacity
* ASG has a minimum, desired and maximum capacity for Instances
* ASG works hand-in-hand with load balancer, web traffic directed by load balancer, as more instances added, load balancer can use them to share load.
* create an Auto Scaling policy to ensure 

#### ASG hands-on
* note: you create a launch-template note an instance so the ASG knows how to create instances.
* Scaling policies - Target tracking scaling policy (automatic scaling) vs none (self managed scaling)
* terminating an instance to lower than the desired instances will cause ASG to launch new instance to match desired capacity. ie. ASG creates instances automatically. 
* to stop creation of new EC2 instances to match capacity, delete the ASG / loadbalancer

### ASG strategies
  1. Manual scaling - update the size of an ASG manually
  2. Dynamic scaling - respond to changes on demand
    - when a cloudwatch alarm is triggered eg. CPU usage > 70% then add 2 units
    - when a cloudwatch alarm is triggered eg. CPU usage < 30% then remove 1
  3. target tracking scaling
    - wanting avg ASG cpu to stay around 40%
  4. scheduled scaling
    - anticipate scaling based on known usage patterns. eg. scale up at 5pm on friday.
  5. predictive scaling
    - uses machine learning to predict future traffic ahead of time
    - automatically provision the right number of EC2 instances in advance.
    - based off predictable patterns

### Summary - ELB and ASG
[Summary - 07. ELB and ASG](#summary-07-elb-and-asg)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 08. S3 
* S3 is a building block for many other AWS services.
  - eg. EBS snapshots actually stored behind scenes on S3 
* Infinitely scaling storage
  - backup and storage
  - disaster recovery
  - archieve
  - hybrid cloud storage
  - application hosting
  - media hosting
  - data lakes and big data analytics
  - software delivery
  - static websites
* used as backbone for many website
* S3 stores files as "objects" and directories as "buckets"
* buckets but have globally unique name (across all regions - all accounts)
* although s3 is a global service - buckets are created in a region
* naming convention - no uppercase, no underscore, 3-63 chars, not an IP.
* Objects (files) have a key
  - key is the full path to object
  - key is composed of prefix (file path) + object name
```
s3://my-bucket/my_file.txt
```
* there is no concept of directories within buckets
* object values are the contents of the body
  - max size is 5TB (5000gb)
  - if uploading more than 5gb must be multi-part upload
* Metadata (list of text key/value pairs - system or user metadata)
* Tags (unicode key / value pair - up to 10) - useful for security / lifecycle.
* version ID (if versioning is enabled)

#### S3 hands on
Opening an object (file) in S3
-> Object actions -> open -> presigned url which contains aws credentials.

-> Object URL -> opening gives error because bucket is not public

### S3 - Security Bucket Policy
* how to secure bucket:
#### User based
* IAM policies - IAM users get IAM policies attached allowing them access to S3 buckets

#### resource based
* Bucket policies - rules attached to S3 bucket, to allow or deny requests from public or other accounts
* Object Access Control List (ACL) - finer grain
* Bucket Access Control List (ACL) - less common

an IAM principle can access the S3 objects if the user IAM permissions allow it, OR if the resouce policy allows it AND there is no Explicit deny. ie. if you give someone access via IAM or bucket policy then all is good.

#### encyption
encrypt objects in amazon s3 using encryption keys

### Bucket policies (usage)
1. public access - a anonymous user wants to access s3 bucket -> we attach an s3 bucket policy that allows public access.
2. IAM user in AWS account -> wants access to S3 bucket -> IAM policy is attached to user.
3. EC2 instance wants access to S3 bucket -> create EC2 instance Role -> attach IAM permissions to the role.
4. (advanced) cross-account access - 
IAM user in another AWS account wants access to S3 ->
create a S3 bucket policy that allows cross-account access.

### Bucket Policies
* bucket policies are JSON based
Props:
  - Resource - buckets and object
  - Action - set of API to allow or deny 
  - Effect - allow / deny
  - Principle - account or user to apply policy to
* for public access to the bucket -> there is a "Block all public access" setting which needs to all be disabled to allow public access.
* Bucket settings can be set at account level.

#### hands-on
s3 bucket -> permissions -> *create public bucket policy -> MUST first disable "Block public access" -> edit

Edit Bucket policy 2 methods:
* look at policy examples
* AWS policy generator

##### AWS policy generator 

#### Public S3 bucket policy
* select type of policy -> S3 bucket policy
* effect -> allow
* principle -> *
* actions -> GetObject
* ARN -> (name of S3 bucket)/* (*trailing slash star)
* add statement -> generate policy

### S3 Website
* s3 great way to host static websites
* website url: 
```
<bucket-name>.s3-website-<AWS-region>.amazonaws.com
<!-- OR when in another region-->
<bucket-name>.s3-website.<AWS-region>.amazonaws.com
```
* if you get a 403 error, make sure the bucket policy allows public read
* you have to enable a S3 bucket to make it a website
* bucket properties -> static website hosting -> enable -> host a static website -> index filename 
* also need an index.html
* bucket website endpoint

### S3 versioning
* keep tabs on previous versions
* enabled at bucket level
* protected against unintended deletes (can restore a version)
* any file not versioned prior will get "null"
* suspending versioning does not delete previous versions

### S3 Server Access Logs
* for audit purpose, log all access to S3
* data can be analyzed to figure out cause of an issue, frequenlty accessed files, suspicious patterns.
* to enable logging, you need to create a bucket and then in the bucket you want to track and log data, server access logging -> enable

### Replication
* when you want to copy all contents from one bucket into another
* buckets can be in differentaccounts
* copying is asynchronous
* must give proper IAM permissions to S3
* Objects before enabling replication are not replicated

CRR (Cross region replication) 
- compliance, lower latency access, replication across accounts.

SRR (Same region replication)
- log aggregation, live replication between live and test accounts
- to see data in same region with different work load on it

#### replication hands-on
* enable versioning on both buckets
* main bucket (the one you want to copy from) -> management -> replication rule -> create replciation rule

### S3 Storage Classes
* Amazon S3 standard - general purpose
* Amazon S3 Standard-infrequent access (IA)
* Amazon S3 One Zone-infrequent access
* Amazon S3 Intelligent Tiering
* Amazon Glacier
* Amazon Glacier Deep Archive

Moving objects can be automated using a lifecycle configuration.

#### Durability & Availability
Durability
* how often will you lose a file.
* High durability (single object once every 10000 years)
* same for all storage classes

Availability
* how readily a service is available.
* varies depending on storage class. 

##### S3 Standard - General purpose
* 99.99% availability
* frequently accessed data
* low latency high throughput
* can sustain 2 concurrent facility failures
* use cases: big data analytics, mobile gaming applications, content distribution

##### S3 IA (infrequently accessed)
* suitable for data less frequently accessed, but requres rapid access when needed
* 99.9% availability
* lower cost compared to S3 standard, has a retrieval fee.
* can sustain 2 concurrent facility failures.
* use case: data store for disaster recovery, backups

##### S3 One Zone - IA
* same as IA but stored in a single AZ
* 99.5% availability
* low latency and high throughput performance
* lower cost compared to S3-IA (by 20%)
* use case: secondary backup copies of on-premise data, or storing data you can re-create

##### S3 Intelligent-Tiering
* 99.9% availability
* same low latency and high throughput performance of S3 standard
* cost-optimized by automatically moving objects between two access tiers based on changing access patterns.
  - frequent access
  - infrequent access
* resilient against events that will affect entire AZ.

##### Amazon Glacier & Glacier Deep Archive
* low cost object storage (in gb/month) meant for archiving / backup
* data is retained for the longer term (years)
* various retrieval options of time + fees for retrieval

###### Amazon Glacier - cheap
* expidated (1-5 min)
* standard (3-5 hrs)
* bulk (5-12 hrs)

###### Amazon Glacier Deep Archive - cheapest
* standard (12 hrs)
* bulk (48 hrs) - retrieve multiple files at a time
S3 Glacier Vault Lock & S3 Object lock
#### S3 Glacier Vault lock and S3 Object lock
* S3 Object lock
  - Adopt a WORM (Write Once Read Many) Model
  - write object to S3 bucket, then block from deletion for a time frame
* Glacier Vault lock
  - Adopt a WORM model
  - lock the policy for future edits (can no longer be changed)
  - helpful for compliance and data retention

### S3 Encryption
* no encryption
* Server-side encryption -> server encrypts file after receiving
* client-side encryption -> user encrypts file before uploading

### S3 Shared responsibility model
* AWS:
  - infrastructure (global security, durability, availability, ability to sustain concurrent loss of data in 2 facilities)
  - configuratuib and vulnerability analysis
  - compliance validation
* user: 
  - S3 versioning
  - S3 bucket policies
  - S3 replication setup
  - logging and monitoring
  - S3 storage classes
  - Data encryption at rest and in transit

### AWS Snow family
Use cases:
1. migrate data into and out of AWS.
2. Edge computing - Highly secure offline-portable devices to collect and process data at the edge.

* if it takes longer than a week to transfer data over network, use Snowball devices.
* request Snowball device from AWS. then send back to AWS. AWS transfers data back to Amazon AS3 bucket.

* Data Migration: Snowcone, Snowball Edge, Snowmobile
* Edge Computing: Snowcone, Snowball Edge.

#### Data Migration 
* can take time to transfer large amounts of data
challenges: limited connectivity, limited bandwidth, high network costs, shared bandwidth, connection stability

##### Snowcone (smaller device)
* small, portable, rugged and secure, withstand harsh environments
* 8tb of storage
* transfering up to 24tb online / offline
* use snowcone where snowball does not fit.
* must provide own battery / cables
* can be sent back to AWS offline, or connect using AWS DataSync to send data back over network.

##### Snowball Edge 
* used to move TB or PetaBytes in/out of AWS.
* pay per data transfer job
* interface within snowball edge will provide block storage or S3 compatible object storage
* storage clustering to increase storage size
* transfer up to petabytes, offline
Types:
Snowball Edge storage optimized - 80tb of HDD
Snowball Edge compute optimized - 42tb of HDD

Use cases:large data cloud migrations, DataCenter decommisions, disaster recovery by backing up into AWS

##### Snowmobile
* its an actual truck to transfer data
* transfer Exabytes of data, offline
* Each snowmobile has 100 PB of capacity.
* High security, temperature control, GPS, 24/7 video surveilance.
* better than Snowball for transfering more than 10PB of data.

##### Snow family usage
1. Request device from AWS console
2. install snowball client / AWS OpsHub on your servers
3. connect the snowball to your servers and copy files using the client.
4. ship device back to AWS
5. Data loaded to S3 Bucket
6. Snowball wiped

#### Edge Computing
* Processing data while its being created at an edgelocation.
eg. far away from the cloud (can produce but maybe no internet access, or computing power)
* Snowcode / Snowball Edge can be ordered
* usage cases: preprocessing data, machine learning at the edge, transcoding media streams.
* shipping back when done

##### Snowcone
* 2 cpu, 4gb memory, wired or wireless access
* powered by USB-C using cord or battery (optional)


##### Snowball Edge 
* Compute Optimized - 52 vCPUs, 208 gb RAM, optional GPU, 42 TB usable storage.
* Storage Optimized - 40 vCPUs, 80 gb RAM, Object Storage clustering available.

* Both can run EC2 instances and AWS lambda functions (using AWS IoT Greengrass)
* Longterm deployment options: 1 and 3yrs discounted pricing.

### AWS OpsHub
* before, used to use CLI (command line to transfer data)
* OpsHub is a software you install, graphical interface to connect to snow devices.
  - unlocking and configuration of single or clustered devices
  - transfering files
  - launching and managing instances running on snow devices
  - monitor device metrics (storage capacity, active instances etc)

### AWS storage Cloud Native Options
* Block storage - Amazon EBS, EC2 Instance store
* File storage - Amazon EFS
* Object storage - Amazon S3, Glacier

### S3 Storage Gateway
* Storage Gateway will be bridge between on-premise data into cloud data in S3.
* Hybrid storage service to allow on-premises to seamlessly use AWS Cloud.
* Use cases: disaster recovery, backup and restore, tired storage.

* To expose S3 services into on-premises, you use a storage gateway.
* using AWS as a Hybrid cloud for storage.
* part infrastructure on-premises, part infrastructure in the cloud.
* possible reasons:
  1. longcloud migrations
  2. security requirements
  3. compliance requirements
  4. IT strategy

#### Types of Storage Gateway 
(NOT FOR EXAM)
* File Gateway
* Volume Gateway
* Tape Gateway

### Summary - 08. S3
[Summary - 08. - S3](#summary-08-s3)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 09. Database and analytics
* for STRUCTURED DATA
* If you want to store data in a STRUCTURED way, you use a database.
* use indexes to efficiently query/ search through the data.
* AND define relationships between your datasets
* Databases are optimized for a purpose and come with different features, shapes and constraints
* EXAM know which database to use for which usecase.
* <b>Relational databases</b> - relationships between tables and its columns. using SQL, Scalability: vertical
* <b>No-SQL databases</b> - databases are built for specific data models, have flexible schemas for building modern applications
* Benefits
  - Flexibility: easy to evolve model
  - Scalability: designed to scale out using distributed clusters (horizontal)
  - High performance: optimized for a specific data model
  - higly functional: types optimized for the data model
* Examples: Key/Value databases, document, graph, in-memory, search databases
* database has JSON format - subnesting, fields can change over time, support for arrays.

#### Shared responsibility model - AWS Databases
* AWS offers to manages different databases for us.
* Benefits of a managed database:
  - quick to provision
  - high availability
  - Scale: Vertical and Horizontal
  - include utilities to Backup/Restore, Operations, Upgrades
  - Operating System patching of underlying instance is handled by AWS. AWS responsible for whole database
  - Monitoring / Alerting integrated
* Databases can be run on EC2 instance but it doesnt include any of AWS benefits.

### RDS And Aurora
* Relational Database Service *(only for Relational databases)
* Managed DB service using SQL
* Supports: PostgreSQL, MySQL, MariaDB, Oracle, MS SQL, Aurora (AWS database)

#### RDS Advantages vs deploying your own on EC2
* Managed Database
* Automatic provisioning
* Patching database automatic by AWS
* continuous backup/restore with timestamp
* Monitoring dashboards
* read replicas for improved read performance
* multi-AZ setup for DR (Disaster Recovery)
* maintenance windows for upgrades
* scale: vertically / horizontally
* storage backup by EBS (gp2 or io1)
* CANNOT SSH into instance

#### Aurora
* also for relational databases
* Aurora is proprietary from AWS (not opensouce)
* Supports: PostgreSQL and MySQL
* Cloud optimized (5x performance over MySQL on RDS and 3x performance over PostgreSQL on RDS)
* Automatic storage capacity (10gb to 64tb)
* cost 20% more than RDS, but more efficient
* NOT in free tier.

### RDS deployment options
Architectural decisions:
* Read Replicas:
  - Scale the read workload of your main RDS database
  - Can create up to 5 Read replicas
  - Data is only Written to the main DB

* Multi-AZ:
  - failover in case of AZ outage (high availability)
  - Application still read/write from main RDS
  - a duplicate failover DB is created in another Availability Zone.
  - if main RDS database crashes, the failover DB isnt accessible until issue with main database
  - can only have 1 AZ as failover AZ.

* Multi-Region
  - create read replicas across different regions
  - writing is still to main RDS
  - disaster recovery in case of region issue
  - local performance for global reads
  - replication costs

### ElastiCache
  - ElastiCache is a managed Redis or Memcached database
  - caches are in-memory databases with high performance, low latency
  - helps reduce load off databases that have read intensive workloads
  - usage: same queries on RDS database get cached (ie. cached queries) via ElastiCache so queries going into in-mememory database
  - AWS takes care of OS maintenance / patching, optimizations, setup, configuration, monitoring, failure recovery and backups.

##### Solutions architecture - cache
- Elastic Load Balancer -> Ec2 Instance (possibly ASG) -> read/write from RDS DB (slow)
                                                       -> ElastiCache read/write from cache (in-memory) (fast)
### Dynamodb
- fully managed DB, high availability with replications across 3 AZ
- NoSQL database - not a relational database
- AWS flagship product - scales to massive workloads (distributed "serverless" database - we dont provision servers)
- handles Millions of request a second / trillions of row, 100s of TB of storage
- fast and consistent in performance
- single-digit millisecond latency - low latency retrieval
- integrated with IAM for security, authorization and administration
- low cost and auto scaling capabilities

#### type of data for DynamoDB
- Key/value database made up of -> Primary key (partition key + sort key)
                                -> attributes (where you define columns for your data)
#### DynamoDB Accelerator (DAX)
- Fully managed in-memory cache for DynamoDB. really well integrated with DynamoDB
- DAX is only used with DynamoDB
- 10x performance improvement 
- single digit millisecond latency to microseconds latency (accessing DynamoDb tables)
- Secure, highly scalable, highly available.
- Difference compared to ElastiCache is ElastiCache can be used for other databases whereas DAX is only for DynamoDB

#### DynamoDB - Global Tables
- Make a DynamoDB table accessible with <b>low latency</b> in multi-regions
- the tables are in different regions and there is 2-way replication between all tables.
- active / active replication - (read/write to any region)

### Redshift
* Redshift is based on PostgreSQL (but not used for Online transaction processing - OLTP which is what RDS is good for)
* It is for OLAP (Online Analytics Processing - analytics and data warehousing)
* load data every hour (not every second)
* 10x better performance than other data warehouse, scales to PB of data
* Columnar storage of data. Data is column based (instead of row based)
* has Massively Parallel Query Execution (MPP), highly available
* pay as you go based on the instances provisioned.
* has SQL interface to perform queries
* integrated with BI (business intelligence) tools  suck as AWS Quicksight or Tableau

### EMR
* Elastic Map Reduce
* used to make Hadoop clusters (Big Data) to analyze and process vast amount of data
* clusters can be made of hundreds of EC2 instances that colaborate to analyze data
* supports Apache spark, Hbase, Presto, Flink
* EMR takes care of provisioning EC2 instances and configuration
* auto-scaling and integrated with SPOT instances
* use case: data processing, machine learning, web indexing, big data.

### Athena
* Serverless query Service to perform analytics against objects stored in S3
* use standard SQL lanuage to query the files
* supports CSV, JSON, ORC, Avro, Parquet (built on Presto)
* pricing $5 per TB of data scanned
* using compressed or columnar data (more cost savings)
* after data is loaded on S3 bucket, Amazon Athena will be used to query and analyze data
* you can use Quicksight reporting ontop of Anthena.
* use case: Business intelligence, analytics/ reporting, analyze logs (analyze and query VPC flow logs, ELB logs, CloudTrail trails)
* EXAM: analyze data in S3 using serverless SQL, use Athena

### Quicksight
* serverless machine-learning powered business intelligence service to create interactive dashboards
* fast, automatically scalable, embeddable, with per-session pricing
* use cases:
  - business analytics
  - building visualizations
  - perform ad-hoc analysis
  - get business insights using data
* integrated with RDS, aurora, athena, redshift, S3...

### DocumentDB
* Aurora is AWS implementation of PostgreSQL / MySQL
* DocumentDB is the same <b>for MongoDB</b> (NoSQL database)
* MongoDB is used to store, query and index JSON data
* Similar "deployment concepts" as Aurora
* Fully managed, highly available with replication across 3 AZ.
* Aurura storage automatically grows in increments of 10GB up to 64TB
* Automatically scales to workloads with millions of request per seconds

### Neptune
* fully managed Graph database
* eg. graph db like a social network
* Highly available across 3 AZ with up to 15 read replicas
* build and run applications working with highly connected datasects - optimized for these complex and hard queries.
* can store up to billions of relations and query the graph with milliseconds latency.
* highly available with replications across multiple AZs
* great for knowledge graphs (Wikipedia), fraud detection, recommendation engines, social networking. 
*EXAM anything related to graph databases - Neptune

### QLDB
* Quantum ledger database
* ledger is a book recording financial transctions
* fully managed, serverless, high available, replication across 3 AZ.
* used to review history of all the changes made to your application data over time
* immutable system: no entry can be removed or modified, cryptographically verifiable
* 2-3x better performance than common ledger blockchain frameworks, manipulate data using SQL.
* Difference with Amazon Managed Blockchain: QLDB has no decentralization component, which is in accordance with financial regulation rules. 

### Amazon Managed Blockchain
* Blockchain makes it possible to build applications where multiple parties can execute transactions without the need for a trusted, central authority - thus decentralized
* Amazon Managed Blockchain is a managed service:
  - join public blockchain networks
  - or create your own scalable private network
* compatible with the frameworks Hyperledger Fabric and Ethereum

### DMS
* Database Migration Service
* Migrating data from one database to another.
* source DB -> then you have EC2 instance running DMS -> which allows you to extract from source and DMS inserts data into target DB.
* source database remains available during the migration
* supports - Homogeneous migration: oracle to oracle
           - Heterogeneous migration: Microsoft SQL server to Aurora

### Glue
* Managed, extract, transform, and load (ETL) service
* useful to prepare and transform data for analytics
* fully serverless service
* Glue used to extract data from multiple sources (we write a script to do transformation) -> once transformed we load data into a eg. Redshift database.

### Summary - 09. Databases and analytics
[Summary - 09. Databases and analytics](#summary-09-databases-and-analytics)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 10. Other compute services

### what is Docker
* software development platform to deploy apps.
* apps are packaged into containers that can run on any OS
* makes use of containers that will run consistent on any platform.
* can scale containers up and down
* docker images are stored in docker repositories 
- public - Docker Hub
- private - Amazon ECR (Elastic container Registry)
- alternatives Kubernetes

diff between Docker vs virtual machine VM
* each VM needs an OS via Hypervisor
* whereas docker uses a Docker Daemon that makes use of many containers sharing the same resources dont need full VM or OS.

### ECS, Fargate & ECR Overview
#### ECS (for Docker)
* Elastic container service
* used to launch docker container service on AWS
* must provision and maintain infrastructure yourself (EC2 instances) *created in advance
* AWS takes care of starting / stopping containers
* has integration with Application Load Balancer
* So you will have multiple EC2 instances, anytime there is a new docker container, ECS is smart enought to figure out which EC2 instance to add the docker container.

#### Fargate (for Docker)
* Also used to launch Docker containers on AWS.
* unlike ECS, simpler - as you dont need to provision infrastructure (EC2 instances)
* serverless 
* AWS just runs containers for you, based on CPU / RAM you need.

#### ECR
* ECR stands for Elastic Container Registry
* a container registry - used to store these docker images so they can be run on AWS.
* private docker registry on AWS.
* where you store Docker images so they can be run on ECS or Fargate.
* Fargate / ECS able to look at these images and create a container from them and run them directly on Fargate service.

Exam: know difference between ECS, Fargate, ECR

### Serverless
* paradigm where developers dont manage the servers anymore.
* they just deploy code / functions
* initially Serverless meant (FaaS - Functions as a service)
* serverless was pioneered by AWS Lamda (running functions in the cloud), but now also includes anything that's managed: databases, messaging, storage, etc.
* serverless does NOT mean there are no servers, it means you just dont manage / provision / see them.

serverless examples: S3, dynamoDB, Fargate, Lambda

### Why Lambda?
With EC2:
* virtual servers in cloud
* limited by RAM and CPU
* continuously running
* scaling means intervention to add / remove servers

With Lambda: 
* virtual functions - no servers to manage
* limited by time - short executions
* run on-demand
* scaling is automated

### Benefits of Lambda
* easy pricing (price per request and compute time) *EXAM
* free tier 1,000,000 AWS lambda requests 400,000GB soconds compute time.
* integrated with AWS services
* event driven (reactive type service) - functions get invoked when needed.
* Integrated with many programing languages
* easy monitoring through AWS CloudWatch
* easy to get more resources per function (up to 10 gb of ram)
* increasing RAM will also increase CPU and Network quality

### AWS lambda Language support
* Node.js (JS)
* Python
* Java
* C#
* Golang
* Powershell
* Ruby
* Custom Runtime API (eg. Rust)
* Lambda container Image 
  - Allow you to run docker images ontop of Lambda (must implement Lambda runtime API which is not every Docker image)

#### Example Lambda usage
* serverless thumbnail creation
* serverless CRON job (CRON allows you to define a schedule eg. day, month etc to run a script). by default CRON job is run on a LINUX machine, with Serverless, to solve this using the cloud, we use Cloudwatch Events (Event Bridge) which triggers Lambda function.

### API Gateway overview
* use case: when you want to build a serverless http API <b>*EXAM</b>
  - example: Lambda CRUD using DynamoDB but we want external clients to be able to access Lambda function. But Lambda functions arent exposed unless...
* Exposing REST APIs from AWS to client using API gateway
* API Gateway proxy's request to lambda function.
* fully managed service for developers to easily create, publish, maintain, monitor and secure APIs
* Serverless and scalable
* supports RESTful APIs and WebSocket APIs
* support for security, user authentication, API throttling, API keys, monitoring

### Batch Overview
* AWS Batch is a fully managed batch processing service
* efficiently run 100,000s of computing batch jobs on AWS.
* A batch job has a start and an end
* dynamically launch EC2 instances or Spot instances.
* AWS Batch provisions the right amount of compute / memory
* You submit or schedule batch jobs and AWS does the rest.

What is it? 
Batch jobs are defined as Docker Images and run on ECS service.

##### Batch vs Lambda?
Lambda: 
  * time limit (15min)
  * limited to few programming languages
  * limited disk space
  * serverless

Batch:
* no time limit
* any runtime as long as it is packaged into Docker image
* rely on EBS for disk storage
* not serverless. rely on EC2 (can be managed by AWS)

### Lightsail Overview
* single access point, simpler alternative
* low predicatable pricing
* little to no cloud experience <b>*EXAM</b>
* can setup notifications and monitoring of your lightsale resources.
* use case: simple web applications, websites, dev/test env
* has high availability but no autoscaling
* limited AWS integration

### Other Compute - Summary
[summary-10-other-compute-services](#summary-10-other-compute-services)

---

###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 11. Deploying and managing infrastructure at scale
ways to deploy workloads onto AWS

## Deployment services

### CloudFormation
* declarative way (via code) to outline AWS infrastructure (say what you need)
* used when you want to repeat an architecture in different environments, regions, or AWS accounts.
* create a stack from template
* can also update template
* deleting a stack cleans up all resources associated with stack.

summary - cloudformation is an easy way to define resources, infrastructure as code. you can take the same template and deploy it to many AWS regions or AWS accounts.

### Cloud development kit (CDK)
* defining cloud infrastructure using familiar coding language(js, node, java, python, .net)
* code will be compiled into cloudformation template (JSON/YAML) to be used by CloudFormation

### Beanstalk
* typical deployment in a 3tier architecture:
  * user talks to load balancer
  * load balancer forwards traffic to multiple instances (managed by ASG)
  * using RDS Database to read and write data / ElastiCache to store/retrieve session data (cached data)

* Beanstalk does all this for you (developer centric)
* it uses all these services (EC2, ASG, ELB, RDS etc)
* still have full control over configuration.
* Platform as a service (PaaS)
* developer centric meaning developer is only responsible for application code
* has full monitoring suite within Beanstalk

Beanstalk VS Cloudformation?
CloudFormation (infrastructure focused) you can do anything. not just App
with Beanstalk (application focused) the first thing you do is upload your code.

3 architecture models
1. single instance deployment - good for dev environment
2. Load Balancer + Auto Scaling Group - for production/pre-production web apps
3. ASG only - good for non-web app


### AWS Systems Manager (SSM)
Helps you manage EC2 and on-premises systems at scale.
* hybrid service
* Patching automation (patch fleet of EC2 instances or on-premises servers)
* run commands across entire fleet of servers
* store parameter configuration with SSM Parameter store
* works both for Windows and Linux OS.

How does it work?
you install an SSM agent on systems we control (EC2 instance or On-Premise VM)
* installed by default on Linux AMI

### Systems Manager - SSM Session Manager
* Allows SSH on EC2 and on-premise servers; 
* WITHOUT ssh access, Bastion hosts (special purpose comupter on a network designed and configured to withstand attacks), SSH keys.
* port 22 closed

How does it work?
* EC2 has a SSM agent; which is connected to Session manager.
* create IAM role with SSM access (role: AmazonSSMMangedInstanceCore)
* using SSM Secure Shell, we able to have SSH directly from AWS.

* users can access through session manager service the EC2 instance and execute commands on it.
* can send log data to S3 or CloudWatch logs.

### OpsWorks

* Chef / Puppet - tools that help you perform server configuration, or repetitive actions.
(designed to work great with EC2 and on-premises VM)

* AWS Opsworks was created to manage Chef and Puppet in the cloud.

* the reason you would use OpsWorks is if you were already using Chef or Puppet before migrating to the AWS Cloud and you wanted to reuse your chef and Puppet templates to work on AWS.

* alternative to AWS SSM.

* can only provision standard AWS resources (EC2 instances, Databases, Load Balances, EBS Volumes)

How OpsWorks Works?
* you have the OpsWorks Stack. and on it you have:
  1. ELB (elastic load balancer) Layer - ALB
  2. Aplication server layer - EC2 instances (gets info from Cookbook repository), Application from App Repository.
  3. Database Layer - RDS Database

---

## Developer Services

### AWS CodeDeploy
allows you to upgrade your EC2 instances, applications, and on premises servers applications from versions from 1 to 2 automatically from a single interface

Can be used to automatically deploy app. 
independent - doesnt need to use CloudFormation or Beanstalk 
hybrid service - works with EC2 instances AND on-premises servers
these servers must be provisioned/configured ahead of time

### AWS CodeCommit 
* github like service which stores repositories.
* lives within aws account (security)
* integrated with AWS services

### AWS CodeBuild
* Allows you to build code in the cloud.
* Compiles source code, runs test, produces packages to be ready for deployed *eg by CodeDeploy.
* Fully managed, Serverless
* Scalable + highly available
* Secure
* pay for build time

### AWS CodePipeline
* way to orchestrate pipeline (the steps to have code automatically pushed to production).
* Code-> Build-> Test-> Provision-> Deploy
* basis for CICD (continuous integration & continuous delivery) 
    CICD - every time code is updated on repository, code is built, tested, and prepared for deployment
* fully managed

### AWS CodeArtifact
* Software usually has code dependencies.
* Artifact management - process of storing and retrieving these dependencies.
* CodeArtifact is an artifact management system.
* All modern dependency management tools eg. npm, yarn can work with CodeArtifact.
* Developers retrieve dependencies straight from CodeArtifact.
* CodeBuild can also retrieve these dependencies from CodeArtifact.

### AWS CodeStar
* Unified UI to easily manage software development activities in one place.
* answers: "How do i setup CodeCommit, CodeBuild, and then CodeDeploy and unify everything with CodePipeline?" - using CodeStar
* Dashboard interface with - CodeRepository, CodeBuild, CodeDeploy, CodePipeline, Beanstalk, EC2 etc
* Central service allows developers to quickly start development using best CICD practices.

### AWS Cloud9
* integrated Cloud IDE for writing, running and debugging code.
* code-collaboration, pair programming
* pushing in Cloud9 goes directly to repository.

---

###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 12. Leveraging AWS Global infrastructure

### Why use global applications?
* [infrastructure.aws](http://infrastructure.aws)
* A Global application is an application deployed in multiple geographies.
* On AWS: deployed to regions or Edge locations.

#### Benefits:
* Decreased latency (faster)
* disaster recovery (DR)
* attack protection (difficult to attack mutli regions at once)

### Global Applications in AWS
#### Global DNS (Route53)
route users to closest deployment with least latency
* great for disaster recovery strategies
* Managed DNS (Domain Name System) 
  - a collection of rules and records which help clients understand how to reach a server through URLs.

##### Common records
* 'A' record - mapping a url (eg. www.google) to IPv4
* 'AAAA' record - mapping a url to IPv6
* CNAME - hostname to hostname - eg. search.google.com to www.google.com
* Alias record - hostname to AWS resource (ELB, CloudFront, S3, RDS, etc...)

##### Routing policies
* Simple routing policy - no health checks
* weighted routing policy - distribute traffic across multiple EC2 instances (type of load balancing as weights are applied to EC2 instances)
* latency routing policy - looks at where user is located, redirects user to server closest based on latency.
* failover routing policy - has primary EC2 instance and failover EC2 instance. DNS system does health check and incase primary fails, routed to failover. 

#### Global CDN (CloudFront)
* CloudFront is a CDN
* caching content at edge locations improves read performance of website 
* caching decreases latency, improves user experience
* DDoS Protection, also using Shield, AWS Web Application Firewall

##### Where can CloudFront Cache from?

###### S3 Buckets
* CloudFront can cache from S3 buckets
* CloudFront given enhanced security using Origin Access Identity (OAI) option to access S3
* CloudFront used to upload files to S3 
 
###### Custom origin (http)
* Application load balancer
* EC2 Instance
* S3 Website
* any http backend on premises

##### How does it work?
* CloudFront has edge location all around the world. 
* Connects to origin (source data - S3 or HTTP)
* client connects and does http request from edge location.
* edge location checks if its in cache, if its not, fetches it from origin
* caches result in local cache.

use case:
* if we created a S3 bucket in australia with a website in the bucket.
* and a user requests this from America
* user will request the content from an edge location in America using CloudFront.
* CloudFront fetches this information from Australia.
* if another user in America requests the same content, it will be served from the edge as it is cached.


##### CloudFront vs Cross Region Replication?

###### CloudFront:
  * CDN (cache content all around the world)
  * Global edge network
  * files are cached for a TTL (maybe a day) TTL = cache auto expires
  * great for static content everywhere around world.

###### S3 Cross Region Replication:
  * replicate an entire bucket into another region
  * must be set up for each region you want replication to happen
  * files updated in near real-time
  * only for read only
  * great for dynamic content that needs to be available at low-latency in a few regions

#### S3 Transfer Acceleration
* accelerate global uploads and downloads into Amazon s3
* usually s3 buckets associated with only one region. Sometimes you want to transfer files from all around the world into one specific S3 bucket in the target region.
* Transfer acceleration only used if you're uploading/downloading from an S3 bucket far away.

##### How it works?
Say you want to upload from USA to S3 bucket in Australia, you will upload file to edge location in USA and using the internal network (faster).
The edge location will upload the file with a more reliable and faster connection.

#### AWS Global accelerator
* improve global application availability and performance using the AWS global network.
* requests are routed through AWS internal network
* Leverage the AWS internal network to optimize the route to your application.
* up to 60% improvement.

##### How it works?
* if an application load balancer (ALB) has been deployed in India, and users from all around world want to access our application.
* Using the Global accelerator, users will actually connect to an edge location and edge location routes traffic into India.
* Benefit is traffic only happens between user in eg. USA and closest edge location, and it leverages AWS private network to speed up connection from edge location to application.
* 2 Anycast IP are created for your application, and traffic is sent through edge locations.

##### Global Accelerator vs CloudFront?
* Both use AWS global network and edge locations from around the world.
* Both integrate with AWS Shield for DDoS protection
* CloudFront is a CDN (cache content at edge, and served at edge)
* Global Accelerator there is no caching, all requests get passed on from the edge locations back to application in your regions. makes requests go faster and go through AWS internal network globally.

#### AWS Outposts

* Way to extend the AWS cloud directly onto own infrastructure on-premises system.
* hybrid cloud is when businesses keep an on-premises infrastructure alongside a cloud infrastructure.

##### therefore, 2 ways of dealing with IT systems (hybrid):
  1. AWS cloud (aws console, cli, AWS API's)
  2. On-Premises infrastructure

* Outposts are server racks that come packaged with AWS infrastructure, services, API's and tools to build your own applications on-premises just like in the cloud.

* AWS will setup servers "outpost racks" on premises with the AWS infrastructure which you can then extend onto your own on-premises servers.

* difference between cloud and outpost racks is now you are responsible for the outpost racks physical security.

##### Benefits?
* low latency
* local data processing (data doesnt leave your servers)
* easier migration to the clouyd
* fully managed service

#### AWS Wavelength 
* enabled via 5G networks.

* Wavelength zones are infrastructure deployments embedded within the telecommunications providers' datacenters at the edge of the 5G networks.

* Wavelength enables deployment of AWS services onto edge of 5G networks to get ultra low latency to applications via 5G; eg. deploying EC2, EBS, VPC to wavelength zone.

* say you have a carrier with 5g network with a Wavelength Zone, via a carrier gateway you will deploy an EC2 instance on that zone.
* that zone belongs to the 5g network.
* When an user accesses your wavelength zone via 5G, there is low latency because the application is already deployed at the edge.
* Traffic doesnt leave the Communication service provider (CSP) network.
* if you need connection to parent AWS region, you can. its secure.
* no additional costs or service agreements.
* use cases: smart cities, ML-assisted diagnostics, connected vehicles, interactive live video streams, AR/VR, real-time gaming.

#### AWS Local Zones
allows you to place AWS compute, storage, database, and other AWS Services closer to end user to run latency-sensitive applications.

* idea is to extend VPC (virtual private cloud) to more locations (extensions of AWS regions)
 extending AZ's with more local zones

#### Global Applications Architecture
* Single region, single AZ
  - bad availability
  - bad global latency
  - easy to setup

* Single region, multi AZ
  - good availability
  - bad global latency
  - more difficult to setup (not much)

* multi-region, active passive
  - 2 regions each region has one or multiple AZ
  - the one region the EC2 instances will be ACTIVE (read/write), all other regions are passive (read only).
  - improved read latency
  - difficult to setup

* multi-region, active-active
  - each EC2 instance can take writes/reads
  - replacation within these instances
  - more difficult to setup

### Summary - Leveraging the AWS Global Infrastructure
[Summary - 12. Leveraging the AWS Global Infrastructure](#summary-12-leveraging-the-aws-global-infrastructure)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 13. Cloud Integrations
* when you have multiple applications, they will have to communicate with each other
* 2 patterns of application communication
  * synchronous communication (application to application)
  * asynchronous / event based (application to queue to application) 

* async (decoupled) application design removes problems with spikes in traffic by introducing a queue
  - SQS (queue model)
  - SNS (pub/sub model)
  - Kinesis (realtime data streaming)
* these services scale independently from application

### SQS (Simple Queue service)
  
##### Whats a queue?
* we have producer(s) -> sending data into a SQS queue -> read by consumer(s) polling (requesting messages) from the queue
* consumers share the work (each consumer gets different messages), when done processing message, it's deleted from queue.

##### SQS 

* high through-put message queuing service.
* fully managed (serverless) used to <b>decouple</b> applications. <b>*EXAM</b>
* Scales
* default retention (4days, max 14 days)
* no limit to messages in queue.
* messages deleted after they are read
* low latency (< 10ms on publish and receive)
* consumers share the work to read messages and scale horizontally.

Example:
* Web Servers Layer - taking requests through Application Load Balancer, served through EC2 instances in an Auto Scaling Group, and users who want videos processed. 
SQS Queue - Instead of sending requests directly to video application,
requests get sent to a SQS Queue.
Video Processing Layer - made of auto scaling group of EC2 instances. these EC2 Instances read from the queue and process videos.
* the 2 Auto Scaling groups can scale independently of each other (decoupling)

### SNS (Simple notification services)
What if you wanted to send 1 message to many receivers.

Method 1: Direct integration
* Buying service talking to 
  -> 1. email notification 
  -> 2. fraud service 
  -> 3. shipping service 
  -> 4. SQS queue. 
  this is quite complicated because we need to write 4 direct integrations.

Method 2: pub/sub type integration
* Buying service sending message to -> SNS Topic
* SNS Topic will be smart enough to send notification to 
  -> 1. email notification 
  -> 2. fraud service 
  -> 3. shipping service 
  -> 4. SQS queue.

* The "Event publishers" only sends messages to one SNS topic.
* As many "event subscribers" can listen to the SNS topic notifications.
* Each subscriber will get all the messages.
* Up to 10,000,000 subscriptions per topic. 100,000 topic limit.
* SNS Subscribers can be: 
  - Http/https endpoint
  - email / SMS messages / mobile notifications
  - SQS queue
  - Lambda functions (write your own integration)

### Kinesis
* real-time big-data streaming <b>*EXAM</b>
* Managed service to collect, process, and analyze real-time streaming data at any scale.

##### Subservices of Kinesis
* Kinesis Data Stream - low latency streaming to ingest data at scale from hundreds of thousands of sources.
* Kinesis Data Firehose - load streams into S3, Redshift, Elastic Search, etc
* Kinesis Data Analytics - perform realtime analytics on streams using SQL
* Kinesis Video Streams - monitor realtime video streams for analytics or ML

Flow:
1. Kinesis Streams receive data from multi types of sources
2. Kinesis Analytics can then be used to analyze data and produce output in realtime
3. then can use Kinesis Firehouse to send this data outputs directly into destinations.

### Amazon MQ
* SNS, SQS are native AWS services using proprietary protocols from AWS.
* traditional applications running from on-premises may use open protocols
  such as: MQTT, AMQP, STOMP, Openwire, WSS
* So sometimes when a company is migrating to the cloud, instead of re-engineering the application to use SQS and SNS, we can use Amazon MQ.
* Amazon MQ will usually only be used IF a company is migrating to the cloud and needs to use one of these open protocals such as: MQTT, AMQP, STOMP, Openwire, WSS
otherwise they should use SQS and SNS as they scale a lot better and a lot more integrated with AWS. 
* Amazon MQ = Managed Apache ActiveMQ
* Amazon MQ doesnt scale as much as SQS/SNS
* Amazon MQ runs on a dedicated machine (not serverless)
* Amazon MQ has both features queue SQS, and notification SNS

### Summary
[Summary - 13. cloud integrations](#summary-13-cloud-integrations)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 14. Cloud monitoring
* getting a better understanding of performance of our cloud deployments
* CloudWatch provide metrics for every service in AWS
* Metric is a variable to monitor (eg CPUUtilization, NetworkIn)
* metrics have time-stamps
* can create a dashboard of metrics

##### Important Metrics
* EC2 instances: CPU Utilization, Status Checks, Network (not RAM)
  - Default metrics every 5 mins
  - option for detailed monitoring ($$$) metric every minute
* EBS Volumes: Disk Read/Writes
* S3 Buckets: BucketSizeBytes, NumberOfObjects, AllRequests
* Billing: Total Estimate Charge (only in US-east-1)
* service limits: how much you've been using a service API
* custom metrics: push your own metrics

### Cloudwatch Alarms
* alarms are used to trigger notifications for any metric
* alarm actions: 
  - auto scaling: increase or decrease EC2 instances "desired" count
  - EC2 Actions: stop, terminate, reboot, or recover an EC2 instance
  - SNS notifications: send a notification into an SNS topic
* various options for the alarm (sampling, %, max, min etc)
* choose period on which to evaluate an alarm
* create a billing alarm on CloudWatch Billing metric
* Alarm status: OK, INSUFFICIENT_DATA, ALARM
* EXAM: Billing alarm is only available in region: US-east-1

### Cloudwatch Logs
* applications write performance logs are collected by CloudWatch
* Cloudwatch Logs - collect logs from:
  - Elastic beanstalk: collection of logs from application
  - ECS: collection from containers
  - AWS Lambda: collection from function logs
  - CloudTrail: based on filter
  - CloudWatch log agents: on EC2 machines or on-premises servers
  - Route53: Log DNS Queries
* enable real-time monitoring of logs
* Adjustable CloudWatch logs retention

* Cloudwatch Logs for EC2
  - By default no logs from EC2 instances will go to CloudWatch
  - need to create a CloudWatch Logs Agent on EC2 instances to push the log files you want
  - EC2 instance needs proper instance role with correct IAM permission
  - The Cloudwatch log Agent can also be setup on on-premises servers too

### Cloudwatch Events / EventBridge
#### Cloudwatch Events
* allow us to react to events happening within AWS.
  * Schedule
    - cron jobs (scheduled scripts)
    - eg. every hour run / trigger script on Lambda function
  * Event Pattern
    - event rules to react to a service doing something
    - eg. IAM Root user sign in event -> SNS topic with Email notification
* Trigger Lambda functions, send SQS/SNS messages

#### EventBridge
* next evolution of CloudWatch Events
  * default event bus: generated by AWS services
  * partner event buses: receive events from SaaS service or applications 
  * custom event buses: for your own applications
* comes with Schema Registry to model event schema
* EventBridge has a different name to mark the new capabilities (partner event bus, custom event bus, Schema registry)
* CloudwatchEvents will be replaced by EventBridge

### CloudTrial
* provides governance, compliance and audit for AWS account
* CloudTrail is enabled by default
* get a history of events / API calls made within your AWS account by:
  - console
  - cli
  - sdk
  - aws services
* can put logs from CloudTrail into CloudWatch Logs or S3
* a trail can be applied to all regions (default) or a single region
* if a resource is deleted in AWS. investigate Cloudtrail first.
* retaining data for longer than 90 days can send data to Cloudwatch logs or S3 bucket

#### 3 types events:
##### Management event:
  * operations that are performed on resources in AWS account.
    - eg. configuring security (IAM AttachRolePolicy)
    - eg. creating routing data (EC2 CreateSubnet)
    - eg. setting up logging (AWS CloudTrial CreateTrial)
    - by default trails are configured to log management events.
    - can separate read events (that dont modify resources) from write events (that may modify resources).
##### data events:
  * by default data events are NOT logged (high volume operations)
  * Amazon S3 Object-level activity (GetObject, DeleteObject, PutObject) can separate Read and Write events
  * AWS Lambda function execution activity (the Invoke API)

##### Cloudtrail insights event
* by enabling Cloudtrail Insights, we can detect unsual activity in your account.
  - inacurate resource provisioning,
  - hitting service limits
  - bursts of AWS IAM actions
  - gaps in periodic maintenance activity
* CloudTrail Insights analyzes what normal activity looks like (creates baseline), then continuously analyzes WRITE events to detet unusual patterns.
* if something is detected, generate Insight Events -> which appear in CloudTrail console.

#### CloudTrial Events retention
* events are stored for 90 days in CloudTrail
* to keep events beyond 90days, log them to S3 bucket *(long-term retention) and use Athena to analyze

### X-Ray
* Common views of entire architecture.
* Visual analysis of our applications.

#### AWS X-Ray advantages
* Troubleshooting performance
* understand dependencies in a microservice architecture.
* pinpoint service issues.
* review request behavior
* find errors and exceptions
* are we meeting time SLA.
* where is it throttling
* Identify users that are impacted.

### CodeGuru
* machine powered (ML) service for automated code reviews and application performance recommendations.
* provides 2 functionalities:
  - CodeGuru Reviewer - Automated code reviews for static code analysis(development)
  - CodeGuru Profiler - Visibility/ recommendations about application performance during runtime (production)
* identify critial issues, security vulnerabilities, hard-to-find bugs
* uses machine learning and automated reasoning
* hard-learned lessons across millions of code reviews on 1000s of open-source and Amazon repositories.
* supports java/python.
* integrates with Github, Bitbucket, AWS codeComit.

### Service Health Dashboard
* shows health of services for all regions
* Shows historical information for each day
* has RSS feed you can subscribe to.
* [https://status.aws.amazon.com/](https://status.aws.amazon.com/)

### Personal health Dashboard
* provide alert and remediation guidance when AWS is experiencing events that may impact you
* gives personalized view into the performance and availability of the AWS services underlying your AWS resources.
* Dashboard provides relevant and timely information to help you manage events in progress and provides proactive notification to help you plan for scheduled activities.
* [https://phd.aws.amazon.com/](https://phd.aws.amazon.com/)
* shows how AWS outages directly impact you and your AWS resources.

### CloudMonitoring Summary
[Summary - 14. Cloud monitoring](#summary-14-cloud-monitoring)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 15. VPC and Networking
### VPC (Virtual Private Cloud), Subnets, Internet Gateways, NAT Gateways
* private network to deploy resources (EC2)
* VPC linked to a region (multi-regions require multi VPC)
* VPC has subnets (partition of your network) associated with an AZ
* public subnet has direct connectivity to internet (using Internet Gateway to connect to internet)
* private subnet DOES NOT have access to internet
* use Route Tables to access internet
* You can put your database tables inside Private subnet.
* VPC has CIDR Range, which is a range of addresses allowed within VPC.

##### access to internet
* public subnet -> Internet gateway
* private subnet ->  
  * NAT Gateways - AWS-Managed
  * NAT Instances - Self managed
* NAT instance is created in the public gateway, then a route from Private subnet to NAT and then from that to IGW.

### Security Groups, Network ACL (NACL), VPC Flow Logs

###### First line of defence
* at Subnet level
* NACL is a firewall which controls traffic from and to subnet.
* Can have ALLOW and DENY rules
* are attached at the Subnet level
* rules only include IP Addresses

###### second line of defence
* at EC2 instance level
* Security groups
* firewall that controls traffic to and from an ENI / EC2 instance.
* can only have ALLOW rules.
* rules include IP addresses and other security groups.

#### VPC Flowlogs
* capture information about IP traffic going into your interfaces
  - VPC flowlog
  - Subnet flowlog
  - Elastic Network Interface Flow Logs
* helps monitor and troubleshoot connectivity issues
  - subnets to internet
  - subnets to subnets
  - internet to subnets
* Captures network information from AWS managed interfaces too: Elastic load balancers, ElastiCache, RDS, Aurora etc.
* VPC flowlogs data can be exported into S3 / CloudWatch Logs.

### VPC Peering
* connect 2 VPC privately and make them behave as if they are in same network
* must not have overlapping CIDR address range
* VPC peering connection is not transitive 

### VPC Endpoints
* endpoints allow you to connect to AWS services using a private network instead of the public www network
* enhanced security, less latency

###### VPC Endpoint Gateway
* VPC Endpoint Gateway is only used to connect to S3 or DynamoDB.
* eg. VPC with private subnet and EC2 instance in subnet ->
wants to connect to S3 or DynamoDB -> (we create VPC endpoint of type Gateway)

###### VPC Endpoint Interface (ENI)
* connect to the rest AWS services.

### Site to Site VPN and Direct Connect
* regarding Hybrid cloud
* say you have a on-premises Data-center and you want to connect to VPC

###### Direct Connect
* physical connection between on-premises and AWS
* connection is private, secure and fast
* goes over the private network
* takes atleast 1 month to establish

###### Site to Site VPN
* Connect an On-premises VPN to AWS
  - on the on-premises: must use a Customer Gateway (CGW)
  - on the AWS side: must use a vitual private gateway (VGW)
  - once provisioned, they are connected using a site-to-site VPN.
* the connection is automatically encrypted.
* goes over the public internet

### Transit Gateway
* network topology can become complicated.
* new service for having transitive peering between thousands of VPC and on-premises with a hub-and-spoke (star) connection
* we have a AWS transit gateway in middle with everything connect to it...
  - all Amazon VPC 
  - Direct connect Gateway
  - VPN connections 

### Summary - VPC and Networking
[Summary - 15. VPC and networking](#summary-15-vpc-and-networking)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>

## 16. Security and Compliance
* AWS Shared responsibility model. 
  - AWS -> responsible for security OF the cloud
  - You -> responsible for security IN the cloud

### DDOS Protection: WAF and Shield
* DDOS - Distributed Denial of Service
* An attacker launches multiple master servers, which will launch bots which will send requests to application server
* the server cannot handle this many requests, and a normal user will see not accessible / not responsive

#### Protection
##### AWS Shield
* AWS Shield Standard - default protection - protects against DDOS attack for your website and applications, for all customers at no additional costs.
* AWS Shield Advanced - 24/7 premium DDoS protection - response team, higher level of defence ($3000/month)

##### AWS WAF
* AWS WAF (Web application firewall) - filter specific requests based on rules.
  - protects your web applications from common web exploits (layer 7 (HTTP))
  - can only be deployed on HTTP friendly services: Application load Balancer, API gateway, cloudFront.
  - define Web ACL (Web Access Control List) on WAF
    - rules can include IP addresses, Http headers, Http body, URI Strings.
    - protects from common attack - SQL injection and cross-site scripting (XSS)
    - Size constraints, geo-match (block countries)
    - rate-based-rules (to count occurences of events) - for DDoS protection

* CloudFront and Route 53 - availability protection using global edge network.
  - combined with AWS shield, provides attack mitigation at the edge.

* Be ready to scale - leverage AWS Auto Scaling.

##### Sample Reference Architecture for DDoS protection
1. users routed through DNS on Route 53 (protected by AWS Shield) 
2. use CloudFront Distribution so content can scale at the edge (protected by AWS Shield) - use WAF (web application firewall) to filter and protect from attack
3. to serve application, use Load Balancer in public subnet that will scale.
4. behind load balancer, use EC2 instances in Auto Scaling Group

### Penetration Testing
* AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services:
1. Amazon Ec2 instances, NAT Gateways, Elastic Load Balancers
2. Amazon RDS
3. Amazon CloudFront
4. Amazon Aurora
5. Amazon API Gateway
6. AWS Lambda and Lambda edge functions
7. Amazon Lightsail resources
8. Amazon Elastic Beanstalk environments
* List can increase ofver time (you wont be tested on this list)

#### Prohibited Activities
Prohibited: Anything that looks like an attack is prohibited.

* DNS Zone walking via Amazon Route 53 Hosted Zones
* Denial of Service (DoS), Distributed Denial of Service (DDoS), Simulated DoS, Simulated DDoS
* Port flooding
* Protocol Flooding
* request flooding (login request flooding, api request flooding)

* for simulated events, contact: [aws-security-simulated-event@amazon.com](mailto:aws-security-simulated-event@amazon.com)


### Encryption with KMS and CloudHSM
* 2 types: data at rest vs data in transit
* use encryption keys to encrypt data

##### 2 types of encryption
- KMS => AWS manages the encryption key for us
    - encryption service at center of AWS is called KMS (Key Management Service) 
- CloudHSM => AWS provisions encryption hardware. we responsible for key management. 
  - dedicated hardware (HSM -> Hardware security module) - device is tamper resistant.
  - FIPS 140-2 level 3 compliance.
  - using CloudHSM client to create SSL connection to AWS CloudHSM

#### Types of Customer Master Keys: CMK
##### Customer Managed CMK:
* create, manage and used by the customer, can enable or disable
* possibility of rotation policy (new key generated every year, old key preserved)
* possibility to bring your own key

##### AWS Managed CMK:
* create, managed and used on the customers behalf by AWS.
* used only in AWS services (aws/s3, aws/ebs, aws/redshift)

##### AWS owned CMK:
* Collection of CMK's that an AWS service owns and manges to use in multiple accounts.
* AWS can use those to protect resources in your account (but you cant view them)

##### CloudHSM Keys (custom keystore):
* keys generated from your own CloudHSM hardware devices
* cryptographic opertaions are performed within the CloudHSM cluster.

### AWS Certified Manager (ACM)
* provision, manage, deploy SSL/ TLS Certificates
* certificates provide in-flight encryption for websites (provides HTTPS endpoint)
* ACM supports private and public TLS certificates
* public TLS certificates free
* Automatic TLS certificate renewal
* Integrations with (load TLS certificates on services)
  - Elastic load balancers
  - Cloudfront distributions
  - APIs on API gateway

### Secrets Manager
* managing and storing secrets
* capability to force rotation of secrets every X days
* Automate generation of secrets on rotation (uses Lambda)
* integration with Amazon RDS (MySQL, PostgreSQL, Aurora)
* Secrets are encrypted using KMS
* mostly meant for RDS integration

### Artifact
* Portal will give you access on demand to AWS Compliance documentation and AWS agreements.
  - Artifact Reports: download AWS security and compliance documents from 3rd party auditors, like AWS ISO certificates, Payment Card Industry (PCI) and System Organization Control (SOC) reports.
  - Artifact Agreements: Allow you to review, accept and track status of AWS agreements such as the Business Associate Addendum (BAA or the Health Insurance Portability and Accountability Act (HIPAA) for an individual account or in your organization. <b>*EXAM</b>
* can be used to support internal audit or compliance.

### GuardDuty
* Intelligent threat discovery to Protect AWS Account
* Uses machine learning algorithms to detect anomalys and matches this with 3rd party data
* one click to enable (30 day trial)
* input data includes:
  - CloudTrial logs - unusual API calls, unauthorized deployments
  - VPC Flog Logs - unusual internal traffic, unusual IP Address
  - DNS Logs - compromised EC2 Instances sending encoded data within DNS Queries.
* Can setup CloudWatch Event rules to be notified in case of findings
* CloudWatch Event rules can target AWS Lambda or SNS.

### Inspector
* Automated security Assessment for EC2 instances
* analyze OS against known vulnerabilities
* analyze uninteded network accessibility
* AWS Inspector agent must be installed on OS of EC2 instance
* assessment creates a report of list of vulnerabilities.

### AWS Config
* helps with auditing and recording compliance of your AWS resources
* Helps record configurations and changes over time
* possibility of storing the configuration data into S3 (analyzed by Athena)
* receive alerts through SNS notifications for any changes.
* Config is a per region service but can aggregate all results from all accounts across the regions.

### AWS Macie
* Fully managed data security and data privacy service that uses 
machine learning and pattern matching to discover and protect your sensitive data in AWS.
* helps identify and alert you to sensitive data such as personal identifiable information (PII).

### Security Hub
* Central security tool to manage security across several AWS accounts and automate security checks.
* Integrated dashboard showing current security and compliance status to quickly take actions.
* Automatically aggregates alerts in predefined or personal findings formats from various AWS services and partner tools.
  - GuardDuty
  - Inspector
  - Macie
  - IAM Access Analyzer
  - AWS Systems manager
  - AWS firewall manager
  - AWS Partner Network Solutions
* Security hub needs AWS Config service enabled.

### Amazon Detective
* finding root cause of AWS security services - deeper analysis to isolate root cause.
* analyzes, investigates and identifies root cause of security issues or suspicious activities.
* produces visualizations with details and context to get to root cause.

### AWS Abuse
* report suspected AWS resources used for abusive or illegal purposes.
* abusive and prohibited behaviors:
  - Spam
  - port scanning
  - DoS or DDoS attacks
  - intrusion attempts
  - hosting questionable or copyrighted content
  - distributing malware
* contact abuse team abuse@amazonaws.com

### Root user priviledges
* Root user = account owner 
  - has access to all AWS services and resources
  - lock root account even administraive tasks
* actions that can only be performed by root user:
  - <b>change account settings</b> (account name, email, root user password, root user access keys)
  - view tax invoices
  - <b>close AWS account</b>
  - restore IAM user permissions
  - <b>change or cancel AWS support plan</b>
  - <b>Register a seller in a reserved Instance marketplace</b>
  - configure an S3 bucket to enable MFA
  - edit or delete an S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID
  - sign up for GovCloud

### Summary Security and compliance
[Summary - 16. Security and compliance](#summary-16-security-and-compliance)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 17. Machine Learning

### Rekognition
* find objects, people, text, scenes in images and videos using ML.
* facial analysis and facial search to do user verification, people counting
* create a database of "familiar faces" or compare against celebrities.

### Transcribe
* speach - to - text
* deep learning process called automatic speech recognition (ASR).
* transcribe customer calls, automate closed captioning and subtitling.
* create metadata for media to make a searchable archive

### Polly
* text-to-speach
* opposite of transcribe 
* create applications that talk.

### Translate
* language translation

### LEX and Connect
* Lex powers Alexa
* automatic speach recognition (ASR) convert speech to text.
* natural language understanding to recognize intent of text, callers
* help build chatbots, call center bots
#### Amazon Connect:
* receive calls, create contact flows, cloud-based virtual contact center
* can integrate with other CRM systems or AWS
* No upfront payment, 80% cheaper than traditional contact center solutions.

### Comprehend
* comprehend stuff (natural language processing NLP)
* uses machine learning to find insights and relationships in text.

### Sagemaker
* Fully managed service for delelopers to build ML models.
* using historical data -> create labels -> build machine model -> train and tune -> new data -> apply model -> predictions

### Forecast
* using ML to deliver highly accurate forecasts
* predict future sales of a raincoat
* 50% more accurate than looking at data itself
* reduce prediction time from months to hours
* use cases: product demand planning, financial planning

### Kendra
* ML fully managed document search service 
* extract answers from within a document
* kendra creates a knowledge index
* natural lanauge search capabilities

### Personalize
* ML service to build apps with real-time personalized recommendations
* amazon.com technology for recommendation
* use case: retail stores

### Summary
[Summary - 17. Machine Learning](#summary-17-machine-learning)

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 18. Account management, Billing and support
### AWS Organizations
* global service
* creating Organization - grouping multiple AWS accounts
* main account (master) / other accounts (child)

##### Organization benefits:
* consolidated billing
* pricing benefits from aggregated usage
* pooling of reserved EC2 instances
* API available to automate AWS account creation
* restrict account privileges using service control policies (SCP)

##### Multi-account strategies
* creating accounts based on regulatory restrictions (using SCP) for better resource isolation. to have separate per-account service limits - isolate account for logging.
* 2 options: multi account vs one account VPC
* use tagging standards for billing
* enable CloudTrail on all accounts - send logs to central S3 account
* send CloudWatch Logs to central logging account

##### Organization Units (OU) examples
* Business Unit
* Environmental Lifecycle
* Project-based

##### Service Control Policies (SCP)
* whitelist or blacklist IAM actions
* Applied at OU or account level
* SCP DOES NOT APPLY to the master account!!
* SCP applied to all Users and Roles of the account, including Root
* SCP does not affect other Service linked roles
  - service linked roles enable other AWS services to integrate with AWS Organizations and cant be restricted by SCPs
* SCP must have an explicit Allow (does not allow anything by default)

* Use cases: 
  - restrict access to certain services (for example cant use EMR)
  - enforce PCI compliance by explicitly disabling services   

### Organizations Consolidated Billing
* combined usage - resevered instance and savings plan discounts - share volume pricing. - management account can turn off reserved instances discount sharing for any account in the AWS Organization (including itself).
* one bill - get one bill for all AWS accounts in teh AWS Organization

### AWS Control Tower
* Easy way to set up and govern a sercure and compliant multi-account AWS Environment based on best practices.
* Benefits:
  - Automate the setup of your env in a few clicks
  - automate ongoing policy management using guardrails
  - detect policy violations and remediate them
  - Monitor compliance through an interactive dashboard.
* AWS Control Tower runs on top of AWS Organizations
  - auto sets up AWS Organizations to organize accounts and implement SCPs

### Pricing models of the cloud
* AWS has 4 pricing models
  - Pay as you go: 
  - Save when you reserve:
  - Pay less by using more:
  - Pay less as AWS Grows

* FREE (https://aws.amazon.com/free):
  - IAM
  - VPC
  - Consolidated Billing
  - Elastic Beanstalk
  - Cloud Formation
  - Auto Scaling Groups

##### Compute Pricing - EC2
  * Only charge for what you use
  * number of EC2 instances
  * instance configuration:
    - Physical capacity
    - Region
    - OS and software
    - Instance type
    - instance size
  * ELB Running time and amount of data processed
  * Detailed Monitoring

  ##### On-demand pricing
  * minimum 60s
  * pay per second (linux/win) or per hour (other)

  ##### Reserved instances
  * up to 75% discount compared to on-demand on hourly rate
  * 1-3 yr commitment
  * all upfront, partial upfront, no upfront

  ##### Spot instances
  * Up to 90% discount compared to on-demaind on hourly rate
  * bid for unused capacity 

  ##### Dedicated host
  * on-demand
  * reservation for 1 year or 3 years commitment

##### Compute Pricing - Lambda and ECS
* Lambda
  - Pay per call
  - Pay per duration
* ECS
  - EC2 launch type model: no additional fees, you pay for AWS resources stored and created in your application.
* Fargate
  - Fargate Launch type model: pay for vCPU and memory resources allocated to your applications in your container

##### Storage Pricing S3
- Storage Class: 
  * S3 Standard
  * S3 Infrequent Access
  * S3 On-Zone IA
  * S3 IntelligentTiering
  * S3 Glacier
  * S3 Glacier Deep Archive
* Pay for number and size of objects: Price can be tiered (based on volume)
* Pay for Number and Type of requests
* Pay For Data transfer OUT of the S3 region
* S3 Transfer Acceleration
* Lifecycle transitions
* Similar service: EFS (Pay per use, has infrequent access and lifecycle rules)

##### Storage Pricing EBS
* Volume type (based on performance)
* Storage Volume in GB per month provisioned
* IOPS: 
  - General Purpose SSD: included
  - Provisioned IOPS SSD: Provisioned amount in IOPS
  - Magnetic: Number of requests
* Snapshots:
  - Added data costs per GB per month
* Data transfer:
  - Outbound data transfer are tiered for volume discounts
  - inbound is free

##### Database Pricing - RDS
* Per hour billing
* database characteristics: Engine/Size/Memory Class
* purchase type: on-demand, Reserved instances (1 or 3 years) with required up-front
* Backup Storage: no additional charge for backup storage up to 100% of your total database storage for a region.

* Additional storage (per GB per month)
* Number of input / output requests per month
* Deployment type (storage and I/O are variable)
  - Single AZ
  - Multi AZ
* Data transfer: 
  - outbound data transfer are tiered for volume discounts
  - inbound is free.

##### Content Delivery - CloudFront
* CDN pricing is different based on where content is served from (different geographic regions).
* aggregated for each edge location, then applied to your bill
* data transfer out (volume discount)
* Number of HTTP/HTTPS requests.

##### Networking Costs in AWS per GB
* use a private IP instead of public IP for good savings and better network performance. 
* use same AZ for maximum savings (at the cost of high availability)
* eg. region with 2 AZ:
  - inbound to EC in AZ is free
  - private IP -> 2 EC -> free for cross network
  - between 2 different AZ, public IP is more expensive than if using private IP
  - cross region is $0.02

### Savings Plan
* Commit to a certain $ amount per hour for 1 or 3 years
* easiest way to setup long-term commitments on AWS
  ##### EC2 savings Plan
    - Up to 72% discount compared to on-demand
    - commit to usage of individual <b> instance families</b> in a <b>region</b> (eg. C5 or M5)
    - regardless of AZ, size (m5.xl to m5.4xl), OS (linux/windows) or tenancy
    - All upfront, partial upfront, no upfront
  ##### Compute savings Plan
    - up to 66% discount compared to on-demand
    - regardless of family, region, size, OS, tenancy, compute options
    - compute options: EC2, fargate, lambda
* Setup from the AWS Cost Explorer console.

### Compute Optimizer
* used to reduce costs and improve perforance by recommending optimal AWS resources for your workloads.
* helps you choose optimal configurations and right rize your workloads.
* uses ML to analyze your resource configuration and their untilization CloudWatch Metrics.
* Supported resources by AWS Compute Optimizer:
  - EC2 Instances
  - EC2 Auto Scaling Groups
  - EBS Volumes
  - Lambda functions
* Lower your costs by up to 25%
* Recommendations can be exported to S3

### Billing and Costing Tools

Overview Categories:
##### Estimate Costs in the cloud
  - TCO Caculator
  - Simple Monthly Calculator / Pricing Calculator
##### Tracking costs in the cloud
  - Billing Dashboard
  - Cost Allocation Tags
  - Cost and Usage Reports
  - Cost Explorer
##### Monitoring against cost plans:
  - Billing Alarms
  - Budgets

### TCO Calculator
* deprecated but may still be in exam
* makes reports (pdf 25pgs) on cost savings vs traditional/inhouse hosting.
* Helps reduce Total cost of ownership - reducing the need to invest in large capital expenditures and providing a pay-as-you-go model
* estimate cost savings when using AWS and provides reports that can be used in executive presentations.
* compare costs of applications in an on-premises/traditional hosting env. vs. AWS: Server, Storage, Network, IT Labor 
* https://awstcocalculator.com/ 
* new https://calculator.aws/

### Simple monthly Calculator / Pricing Calculator
* Simple monthly Calculator depricated 2020-06-30
* new https://calculator.aws/
* estimate the cost for your architecture solution

### Tracking costs in the cloud
##### Billing Dashboard
* all costs associated for month, forecasts, month-to-date
* aws - free tier dashboard - usage within free tier for month
* high-level overview

##### Cost allocation tags
* explore bill more indepth - grouping them together costs by category
* AWS generated tags
  - automatically applied to resources you create
  - prefix -> aws
* user generated tags 
  - defined by user
  - prefix -> user
* tags can be used for organizing resources
* free naming - common tags are: name, environment, team ...
* tags can be used to create Resource Groups.
  - create, maintain, view a collection of resources that share common tags.
  - manage these with Tag Editor.

##### Cost and Usage Reports
* dive deeper into costs and usage
* most comprehensive set of AWS cost and usage data available.
* report gives all AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as tags you've activated for cost allocation purposes.
* report can be integrated with Athena, Redshift or Quicksight

##### Cost Explorer
* visualize, understand and manage your AWS costs and usage over time.
* create custom reports that analyze cost and usage data.
* Analyze your data at a high level: total costs and usage across all acounts
* or monthly, hourly, or at resource level - granularity
* choose an optimal Savings Plan (to lower prices on your bill)
* Forecast your bill for up to 12 months based on previous usage.

### Monitoring against cost plans

##### Billing Alarm in CloudWatch
* Billing data metric is stored in cloudWatch us-east-1
* Billing data are for overall worldwide AWS costs.
* Its for actual cost, not for projected costs.
* intended as a simple alarm (not as powerful as AWS Budgets)

##### Budgets
* create budget and send alarms when costs exceed the budget.
* 3 types of budgets: Usage, Cost, Reservation
* For Reserved Instances (RI)
  - Track utilization
  - Supports EC2, ElastiCache, RDS, Redshift
* Up to 5 SNS notifications per budget
* Can filter by Service, Linked Account, Tag, Purchase Option, Instance Type, Region, Availability Zone, API Operation, etc.
* Same Options as AWS Cost Explorer
* 2 budgets are free, then $0.02/day/budget

### AWS Trusted Advisor
* Gives high level AWS Account assessment

##### Recommendations on 5 Categories
* Analyze your AWS Accounts and provides recommendation on 5 categories *EXAM
  1. Cost Optimization
  2. Performance
  3. Security
  4. Fault Tollerance
  5. Service Limits

##### Support Plans 
##### 7 CORE checks (basic and developer support plan)
  * EXAM
  1. S3 Bucket permissions
  2. Security Groups - Specific Ports are not unrestricted
  3. IAM use (one IAM user minimum)
  4. MFA on Root Account
  5. EBS Public Snapshots (ensure do not have)
  6. RDS Public Snapshots (ensure do not have)
  7. Service Limits (looking at service limits in AWS)

##### FULL Checks (business and enterpise support plan)
  * EXAM
  1. Full checks on the 5 categories (see above)
  2. Ability to set CloudWatch alarms when reaching limits
  3. Programmatic Access using AWS Support API

### AWS Support Plans Pricing
##### basic support - free
  - customer service and communities 24/7 access to customer service,
  documentation, whitepapers and support forums
  - AWS trusted advisor - access to 7 core trusted advisor checks and 
  guidance to provision your resources following best practices to increase performance and improve security.
  - AWS Personal Health Dashboard - A personalized view of the health of AWS
  services, and alerts when youre resources are impacted.

##### developer 
  - basic support + Business hours email acces to Cloud Support Associates
  - Unlimited cases / 1 primary contact
  - Case severity / response times: 
      * general guidance response < 24 business hrs
      * system impaired response < 12 business hrs

##### Business
* intended for if you have production workloads
* All of Developer plan + 
* Trusted Advisor - Full set of checks + API access
* 24/7 access to phone, email and chat access to Cloud Support Engineers
* unlimited cases / unlimited contacts
* access to Infrastructure Event Management for additional fee
* Case severity / response times: 
  * general guidance response < 24 business hrs
  * system impaired response < 12 business hrs
  * production system impaired response < 4 business hrs

##### enterprise
* intended to be used if you have mission critical workloads
* all of business support plan + 
* access to dedicated technical Account Manager (TAM)
* Concierge Support Team (for billing and account best practices)
* Infrastructure Event Management, Well-Architected and Operations Reviews
* Case severity / response times: 
  * ...
  * production system impaired response < 4 business hrs
  * production system down: < 1 hr
  * Business-critical system down: < 15 min

### Summary - Account Best Practices
* Operating Multiple accounts using Organizations
* Use SCP (service control Policies) to restrict account power
* Easily set up Multiple accounts with best-practices with AWS Control Tower
* use Tags and Cost Allocation Tags for easy management & billing.
* IAM Guidlines: MFA, least-privilege, password policy, password rotation
* Config to record all resourcs configurations and compliance over time
* CloudFormation to deploy stacks across accounts and regions
* TrustedAdvisor - to get insights, support plan adapted to your needs
* Send Service logs and Access Logs to S3 or CloudWatch Logs
* CloudTrail to record API Calls made within your account
* If your account is compromised: change the root password, delete and rotate all passwords / keys, contact the AWS Support.

### Summary - Billing
* Compute Optimizer - Recommends resources configurations to reduce costs
* TCO Calculator - from on Premises to AWS
* Simple Monthly calculator / Pricing calculator: cost of services on AWS
* Billing Dashboard: high level overview + free tier dashboard
* Cost Allocation Tags: tag resources to create detailed reports
* Cost and Usage reports: most comprehensive billing dataset
* Cost explorer: View currange usage (detailed) and forecast usage
* Billing Alarms: in US-east-1 - track overall and per-service billing
* Budgets - more advanced -track usage, costs, RI, and get Alerts
* Savings Plans: easy way to save based on long-term usage of AWS.

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 19. Advanced Identity
##### STS (Security Token Services)
  - Behind the scenes service by AWS called 
  - enables you to create temporary, limited-privileges credentials to access your AWS resources.
* Short-term credentials: you configure expiration period.
* Use Cases: 
  * Identity Federation - manage user identities in external systems, and provide them with STS tokens to access AWS resources.
  * IAM Roles for cross/same account access
  * IAM Roles for Amazon EC2 - provid temporary credentials for EC2 instances to access AWS resources.

#### Cognito
* Identify for your Web and Mobile applications users (potentially millions)
* Way to manage users on AWS without giving them IAM credentials (which is for your company thats writing the code), you create a user in Cognito
* users/mobile apps interface with Coginito for stuff like login (login with social media accounts. Social Identity Provider)

### Directory Services
* MS Active Directory (AD) - is found on Windows servers with AD Domain Services 
  * Database of objects: user accounts, computers, printers, file shares, security groups
  * centralized security management, create account, assign permissions 

##### AWS Directory Services 
- AWS Managed Microsoft AD
  - create own AD in AWS, manage users locally, supports MFA
  - establish "trust" connections with your on-premise AD
- AD Connector
  - Directory Gateway (proxy) to redirect to on-premise AD
  - Users are manged on the on-premise AD
- Simple AD
  - AD compatible managed directory on AWS
  - Cannot be joined with on-premise AD

### Single Sign-on (SSO)
- one login to access multiple accounts and 3rd party business applications
- Integrated with AWS Organizations
- Supports SAML 2.0 Markup
- Integration with on-premise active directory

### Summary - Advanced Identity
* IAM 
  - Identity and acccess management inside your AWS account
  - For users that you trust and belong to your company
* Organizations
  - Manage multiple AWS accounts
* STS (Security Token Services) - temporary, limited-privileges credentials to access AWS resources
* Cognito - create a database of users for your mobile and web applications
* Directory services - integrate MS Active Directory in AWS
* Single Sign-on (SSO) - one login for Multiple AWS Accoutns and applications.

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 20. Other Services

##### Workspaces
* managed Desktop as a Service (DaaS) solution to easily provision Windows or Linux desktops
* Greate to eliminate management of on-premise VDI (Virtual desktop infrastructure) - (eg. secure windows desktop in the cloud)
* Fast and quickly scalable to thousands of users
* Secured data - integrates with KMS
* pay-as-you-go service with monthly or hourly rates

##### AppStream 2.0
* Desktop Application streaming service
* Deliver to any computer -> without acquiring and provisioning infrastructure
* The application is delivered from within a web browser

##### Workspaces vs AppStream 2.0
##### Workspace
  * fully managed VDI and desktop available
  * The users connect to the VDI and open native or WAM applications
  * Worksapces are on-demand or always on
##### AppStream 2.0
  * Stream a desktop application to web browsers (no need to connect to VDI)
  * Works with any device (that has a browser)
  * Allow to configure an instance type per application type (CPU, RAM, GPU)

### Sumerian
  * create and run virtual reality (VR) augmented reality (AR) and 3D applications
  * can be used to quickly create 3D models with animations
  * ready-to-use templates and assets - no programming or 3D expertise required
  * accessible via web-browser URLs or on popular hardware for AR/VR

### AWS IoT Core
* Internet of Things - the network of internet connected devices that are able to collect and transfer data
* Allows you to easily collect IoT devices to AWS Cloud
* Serverless, secure and scale to billions of devices and trillions of messages
* applications can communicate with devices even when they arent connected
* Integrates with a lot of AWS Services
* Build IoT applications that gather, process, analyze and act on data

### Elastic Transcoder
* Converts media files stored in S3 into media files in the formats required by consumer playback devices
* Easy to use, highly scalable
* Cost effective - pay for transcoding time
* fully managed and secure

### Device Farn
* fully managed service, tests your web and mobile apps against:
  desktop browsers, real mobile devices, and tables
* runs tests concurrently on multiple devices
* ability to configure device settings

### AWS Backup
* fully managed service to centrally manage and automate backups across AWS services.
* on-demand and scheduled backups
* Supports PITR (Point-in-time-recovery)
* retention periods, lifecycle management, backup policies
* Cross region backup
* Cross Account Backup (using AWS organizations)

### Disaster Recovery Strategies
* Backup and restore (Cheapest)
* Pilot light - critical functions of app are in the cloud, minimal setup.
* Warm standby - full version of app in cloud at minimum size.
* multi-site/hot-site - full version of app at full size in cloud

### CloudEndure
* quickly and easily recover your physical, virtual, and cloud-based servers into AWS.
*  eg. protect most critical databases (oracle, mysql, sql server), enterprise apps (SAP), protect data from ransomware
* continuous block-level replication for your servers.

### AWS Datasync
* move large amount of data from on-premises to AWS.
* Can synchronize to: Amazon S3, EFS, FSx
* replication tasks can be scheduled hourly, daily, weekly
* the replication tasks are <b>incremental</b> after the first full load.

### AWS Fault Injection Simulator
* run fault injection experiments on AWS workloads
* based on Chaos Engineering - stressing an application by creating disruptive events (eg. sudden increase CPU or memory), observing how the system responds and implement improvements
* Helps uncover hidden bugs and performance bottlenecks.
* use pre-built templates that generate the desired disruptions.

---
###### <div style="text-align:right">[table of contents](#table-of-contents)</div>
## 21. AWS architecting and Ecosystem

### General Guiding principles
* Well architected framework
  - stop guessing your capacity needs (use Autoscaling)
  - test systems at production scale
* automate -> making architectural experimentation easier
* allow for evolutionary architectures - design based on changing requirements
* drive archtitectures using data
* improve through game days -> simulate flash sale days

##### Design principles
* Scalability: vertical and horizontal
* Disposable Resources: servers should be disposable and easily reconfigured
* Automation: Serverless, infrastructure as a service, autoscaling
* Loose Coupling: 
  - Monolith are applictions that do more over time, become bigger
  - Break it down into smaller loosely coupled components
  - A change or a failure in one component should not cascade to other components
* services not servers
  - Dont just use EC2
  - use managed services, databases, serverless, etc.

### Well Architected Framework 5 pillars
1. Operational Excellence - ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures
  ##### Design principles
  * Perform operation as code - infrastructure as code
  * annotate documentation - documentation
  * make frequenct, small, reversible changes
  * Refine operations procedures frequently
  * Anticipate failure - learn from failure
  ##### Operational Excellence AWS Services
  * Prepare - AWS CloudFormation, AWS Config
  * Operate - AWS CloudFormation, AWS Config, AWS CloudTrail, Amazon CloudWatch, AWS-Xray
  * Evolve - AWS CloudFormation, CICD tools (AWSCodeBuild, AWSCodeCommit, AWSCodeDeploy, AWS CodePipeline)

2. Security - ability to protect information, systems and assets while deliverying business value through risk assessment and mitigation strategies.
  ##### Design principles
  * Implement a strong identity foundation - centralize privilege management and reduce reliance on long-term credentials / principles of least privilege - IAM
  * Enable traceability - integrate logs with systems
  * apply security at all layers - edge network, VPC, subnet, load balancer, every instance
  * automate security best practices
  * protect data in transit and at rest - encryption, tokenization, access control
  * Keep people away from data
  * Prepare for security events - run simulations
  ##### Security AWS Services
  * Identity and Access Management: IAM, AWS-STS, MFA tokens, AWS Organizations
  * Detective Controls: AWS Config, AWS CloudTrial, Amazon CloudWatch
  * Infrastructure Protection: Amazon CloudFront, Amazon VPC, AWS Shield, AWS WAF, Amazon Inspector
  * Data Protection: KMS, S3, Elastic Load Balancing (ELB), Amazon EBS, Amazon RDS
  * Incident Response: IAM, AWS CloudFormation, Amazon CloudWatch Events

3. Reliability - ability of system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, mitigate disruptions such as misconfigurations or transient network issues.
  ##### Design principles
  * Test recovery procedures
  * Automatically recover from failure
  * Scale horizontally to increase system availability / load
  * stop guessing capacity - autoscaling
  * Manage change through automation
  ##### Reliability AWS Services
  * Foundations: IAM, Amazon VPC, Service Limits, Trusted Advisor
  * Change Management: AWS Auto Scaling, Amazon CloudWatch, AWS CloudTrial, AWS Config
  * Failure Management: Backups, AWS CloudFormation, Amazon S3, Amazon S3 Glacier, Amazon Route S3

4. Performance Efficiency - Ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve. - adapting and providing best performance
  ##### Design Principles
  * use advanced technologies - tracking technologies - as products become available maybe can use them in your products
  * go global in minutes - Easy deployment in multiple regions
  * use serverless architectures - avoid burden of managing servers
  * Experiment more often
  * mechanical sympathy - be aware of all AWS Services
  ##### Performance Efficiency AWS Services
  * Selection: AWS Auto Scaling, AWS Lambda, Amazon Elastic Block Store (EBS), Amazon Simple Storage Service (S3), Amazon RDS
  * Review: AWS Cloud Formation, AWS News blog
  * Monitoring: Amazon CloudWatch, AWS Lambda
  * TradeOffs - Amazon RDS, Amazon Elasticache, AWS Snowball, Amazon Cloudfront

5. Cost Optimization - Ability to run systems to deliver business value at lowest price
  ##### Design Principles
  * Adopt a comsumable mode - pay only for what you use
  * measure overall efficiency - use CloudWatch
  * Stop spending money on data center operations - AWS does the infrastructure part and enables customer to focus on organization projects
  * Analyze and attribute expenditure - Accurate identification of system usage and costs, helps measure return on investment (ROI) - Make sure to use tags
  * Use managed and application level services to reduce cost of ownership - As managed services operate at cloud scale, they can offer a lower cost per transaction or service
  ##### Cost Optimization AWS Services
  * Expenditure awareness - AWS Budgets, AWS Cost and Usage Report, AWS Cost Explorer, Reserved Instance Reporting
  * Cost-Effective Resources - Spot Instance, Reserved Instance, Amazon S3 Glacier
  * Matching Supply and demand - AWS AutoScaling , AWS Lambda
  * Optimizing over time - AWS Trusted Advisor, AWS Cost and Usage report, AWS newsblog

### AWS Well-Architected Tool
* Tool to review your architectures against the 5 pillars (Well-architected Framework) and adopt best architectural best practices
* How does it work? 
1. Select workload and answer questions 
2. review your answers against the 5 pillars 
3. obtain advice: get videos and docs, generate report and see results in a dashboard.

### Right Sizing
* EC2 has many instance types, but choosing the most powerful instance type isnt the best choice, because the cloud is elastic
* Right sizing is process of matching instance types and sizes to your workload performance and capacity requirements at the lowest possible cost
* Scaling up is easy so always start small
* process of looking at the deployed instances and identifying opportunities to eliminate or downsize without compromising capacity or other requirements, which results in lower costs
* RightSize before 
  1. Cloud Migration
  2. Continuously after the cloud onboarding process (requirements change)
Tools that can help with rightsizing:
  * Cloudwatch
  * Cost Explorer
  * Trusted Advisor
  * 3rd party tools

### AWS Ecosystem
1. Free resources 
  * AWS Blogs
  * AWS Forums
  * AWS Whitepapers & guides
  * AWS quickstarts
  * AWS Solutions
2. AWS Support
  ##### Developer
  * Business hours email access to cloud Support associates
  * General guidance < 24 business hrs
  * System impaired < 12 business hrs
  ##### Business
  * 24/7 phone, email, and chat access to cloud support engineers
  * Production system impared: < 4 hrs
  * Prodcution system down: < 1 hr
  ##### Enterprise 
  * Access to technical account manager (TAM)
  * Concierge support team (for billing and account best practices)
  * Business-critical system down: < 15 min
3. AWS MarketPlace - buy/sell
4. AWS Training
  * AWS Digital (online) and Clasroom training (in-person or virtual)
  * AWS Private training (for org)
  * training and certification for US Government
  * Training and certification for Enterprise
  * AWS Academy - helps universities teach AWS
  * online teacher teaching about AWS
5. AWS professional services and partner network
  * AWS Professional Services Organization is a global team of experts that can help with AWS
  * work alongside your team and a chosen member of APN 
  * APN = (AWS Partner Network)
  * APN Technology Partners: providing hardware, connectivity and software
  * APN Consulting Partners: help build on AWS
  * APN training partners: find who can help you learn AWS
  * AWS Competency Program: AWS Competencies are granted to APN Partners who have demonstrated technical proficiency and proven customer success in specialzed solution areas.
  * AWS Navigate Program: Help partners become better partners.

### AWS Knowledge center
* Web portal that contains most frequently asked questions and requests.
---

## Source

+ Stephane maarek [Ultimate AWS Certified Cloud Practitioner - 2021](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/)

---