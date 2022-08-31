import { Construct } from 'constructs';

export class Tfvars extends Construct {
  public awsRegion: string;
  public amiId: string;

  constructor(scope: Construct, name: string) {
    super(scope, name);

    this.awsRegion = 'eu-west-1';

    this.amiId = 'ami-08a9dc8f6d1c4f806';
  }
}
