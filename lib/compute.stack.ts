import {App, Stack} from "@aws-cdk/core";
import {
    Instance,
    IVpc,
    InstanceClass,
    InstanceType,
    InstanceSize,
    MachineImage,
    SubnetType
} from "@aws-cdk/aws-ec2";

interface Props {
    securityGroup: any;
    vpc: IVpc;
}

export class ComputeStack extends Stack {
    constructor(scope: App, {securityGroup, vpc}: Props) {
        super(scope, ComputeStack.name);
        new Instance(this, 'exanubes-public-instance', {
            vpc,
            instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
            machineImage: MachineImage.latestAmazonLinux(),
            keyName: 'exanubes',
            vpcSubnets: vpc.selectSubnets({
                subnetType: SubnetType.PUBLIC
            }),
            securityGroup
        })
        new Instance(this, 'exanubes-private-instance', {
            vpc,
            instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
            machineImage: MachineImage.latestAmazonLinux(),
            keyName: 'exanubes',
            vpcSubnets: vpc.selectSubnets({
                subnetType: SubnetType.PRIVATE
            }),
            securityGroup
        })
    }
}
