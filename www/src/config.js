// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6pl9urah3t0hncm6pe1lh8udl1",     // CognitoClientID
  "api_base_url": "https://aowfkzwb83.execute-api.eu-west-2.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-eg-lambda.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1ao4gkla1yjz2.amplifyapp.com"                                      // AmplifyURL
};

export default config;
