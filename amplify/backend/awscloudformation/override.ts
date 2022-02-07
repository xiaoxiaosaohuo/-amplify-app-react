import { AmplifyRootStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyRootStackTemplate) {
  resources.authRole.roleName = "se-us-fe-sa";
  //   resources.authRole.path = "/sn-us-fe/";
}
