## commands

    ng new ng_material_akita --minimal --skip-tests --skip-git --routing --style scss
    ng add @angular/material
    ng generate @angular/material:navigation nav
    npm install @datorama/akita
    npm install @datorama/akita-ng-entity-service

    ng g module todos-app --routing
    ng g c todos-app/todos
    ng g ./akita-schematics:feature --flat=false --entityService="Http" todos

    ng g module auth
    ng g guard auth/auth --implements CanActivate
    ng g ./akita-schematics:store auth/state/auth
    ng g ./akita-schematics:query auth/state/auth
    ng g ./akita-schematics:service auth/state/auth
    ng generate @angular/material:address-form auth/login
