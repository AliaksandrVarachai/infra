# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Task 2.1. Manual Deployment

### Changes

1. Created & configured S3 bucket
2. Built & uploaded `MyShop` app
3. Created a CloudFront distribution. Changed S3 bucket policy to allow access only via the CloudFront distribution
4. Made small changes in MyApp, re-deployed to S3, invalidated CloudFront distribution

### Links

- FE changes: https://github.com/AliaksandrVarachai/shop-react-redux-cloudfront/pull/1/files
- CloudFront URL: https://d32f7wufaedcnm.cloudfront.net
- Direct access to S3 **is forbidden**: https://bender-rodrigues-bucket.s3.us-west-1.amazonaws.com

## Task 2.2. Automated Deployment

1. Added & configured AWS CDK. Added NPM scripts for synthesis and deployment with CDK. Added CloudFront invalidation.
2. Destroyed the created S3 & CloudFront
3. Added & configured necessary AWS CDK constructs per requirements.

### Links

- FE changes: https://github.com/AliaksandrVarachai/shop-react-redux-cloudfront/pull/1/files
- CloudFront URL: https://d2kooluge9l1su.cloudfront.net
- Direct access to S3 **is forbidden**: https://bender-rodriguez-bucket-2.s3.us-west-1.amazonaws.com
