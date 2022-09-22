import {Routes} from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {SupplyChainMappingComponent} from './supply-chain-mapping/supply-chain-mapping.component';
import {ListViewComponent} from './list-view/list-view.component';
import {GraphViewComponent} from './graph-view/graph-view.component';
import {MapBusinessRelationComponentComponent} from './map-business-relation-component/map-business-relation-component.component';

export const appRoutes: Routes = [
    { path: 'contact/:id', component: ContactDetailComponent },
    { path: 'add', component: AddContactComponent },
    { path: 'list', component: ContactListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'first-component',
    component: SupplyChainMappingComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ListViewComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: GraphViewComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'map-business-relation', component: MapBusinessRelationComponentComponent },
];
