import {App, Stack} from "@aws-cdk/core";
import {
    IVpc,
    SubnetType,
    Vpc
} from "@aws-cdk/aws-ec2";

export class NetworkStack extends Stack {
    vpc: IVpc

    constructor(scope: App) {
        super(scope, NetworkStack.name);
        this.vpc = new Vpc(this, 'exanubes-vpc', {
            cidr: '10.0.0.0/16',
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'exanubes-public-subnet',
                    subnetType: SubnetType.PUBLIC
                },
                {
                    cidrMask: 24,
                    name: 'exanubes-private-subnet',
                    subnetType: SubnetType.PRIVATE
                }
            ]
        })

    }

}
