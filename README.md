# NAT Gateway

Repository from blog [exanubes.com](https://exanubes.com) for [NAT or gaining internet access in private networks](https://exanubes.com/blog/setup-aurora-serverless-with-cdk).

## Commands:

Run the following commands for deploying and destroying the stacks

- `npm run cdk:deploy`
- `npm run cdk:destroy`


Both of these commands use the `aws-cli sts` service to get the account id and aws IAM role `exanubes-cloudformation-access` in order to dynamically provide role arn. Make sure you're using the account you want to deploy the stacks to and that you have the role created either with the same name or different name and change the scripts in `package.json`.
