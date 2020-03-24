import { AbilityBuilder } from "@casl/ability";
export default function defineRulesFor(role) {
    const { can, rules } = AbilityBuilder.extract();
    switch (role) {
        case "superAdmin":
            can("manage", "all");
            break;
        case "admin":
            can("read", "all");
            can("delete", "all");
            can("update", "user");
            can("create", "customer");
            break;
        case "operator":
            can("read", "all");
            can("create", "all");
            break;
        case "endUser":
            can("read", "all");
            break;
        default:
            can("read", "all");
    }
    return rules;
}

// import { AbilityBuilder } from '@casl/ability'

// const superAdmin = AbilityBuilder.define(can => {
//     can('manage', 'all')
// });

// const admin = AbilityBuilder.define((can, cannot) => {
//     can('read', 'all')
//     can('delete', 'all')
//     cannot('update', 'user')
//     cannot('create', 'customer')
// });
// const operator = AbilityBuilder.define(can => {
//     can('read', 'all')
//     can('create', 'all')

// });

// const endUser = AbilityBuilder.define(can => {
//     can('read', 'all')
// });
// const ABILITIES = { superAdmin, admin, operator, endUser }
// export default ABILITIES