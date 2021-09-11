import {Arn} from "@aws-cdk/core";
import { STS } from "aws-sdk";

export async function resolveCurrentUserOwnerName() {
    const result = await new STS().getCallerIdentity().promise()
    const parsed = Arn.parse(result.Arn!);
    return parsed.resourceName!;
}
