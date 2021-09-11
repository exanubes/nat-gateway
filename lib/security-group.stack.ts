import {IVpc, Peer, Port, SecurityGroup} from "@aws-cdk/aws-ec2";
import {App, Stack} from "@aws-cdk/core";

export class SecurityGroupStack extends Stack {
    securityGroup: SecurityGroup;
    constructor(scope: App, vpc: IVpc) {
        super(scope, SecurityGroupStack.name);
        this.securityGroup = new SecurityGroup(this, 'exanubes-sg', {
            vpc,
            securityGroupName: 'exanubes-sg'
        })

        this.securityGroup.addIngressRule(
            Peer.anyIpv4(),
            Port.tcp(22),
            'Open access via SSH')
    }
}
