import { Stack, type StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DeploymentService } from './deployment-service';

export class DeployFrontendShopStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        new DeploymentService(this, 'deployment');
    }
}
