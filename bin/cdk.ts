#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {NetworkStack} from "../lib/network.stack";
import {Tags} from "@aws-cdk/core";
import {resolveCurrentUserOwnerName} from "../utils";
import {ComputeStack} from "../lib/compute.stack";
import {SecurityGroupStack} from "../lib/security-group.stack";

async function main(){
    const owner = await resolveCurrentUserOwnerName()
    const app = new cdk.App();
    const network = new NetworkStack(app)
    const sg = new SecurityGroupStack(app, network.vpc)
    new ComputeStack(app, {securityGroup: sg.securityGroup, vpc: network.vpc})

    Tags.of(app).add('owner', owner)
}

main().catch(error=> {
    console.log(error);
    process.exit(1)
})
