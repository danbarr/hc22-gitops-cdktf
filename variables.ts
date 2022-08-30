import { Construct } from 'constructs';

export class Tfvars extends Construct {
  public awsRegion: string;
  public amiId: string;

  constructor(scope: Construct, name: string) {
    super(scope, name);

    this.awsRegion = 'eu-west-1';

    this.amiId = '10.255.3.253';
  }
}
