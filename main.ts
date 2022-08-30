import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, CloudBackend, NamedCloudWorkspace } from "cdktf";
import { AwsProvider, ec2 } from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "AWS", {
      region: "eu-west-1",
    });

    const instance = new ec2.Instance(this, "compute", {
      ami: "ami-08a9dc8f6d1c4f806",
      instanceType: "t3.micro",
      tags: {
        Name: "CDKTF-Demo"
      }
    });

    new TerraformOutput(this, "public_ip", {
      value: instance.publicIp,
    });
  }
}

const app = new App();
const stack = new MyStack(app, "hc22-gitops-cdktf");
new CloudBackend(stack, {
  hostname: "app.terraform.io",
  organization: "dbarr-org",
  workspaces: new NamedCloudWorkspace("hc22-gitops-cdktf")
});
app.synth();
