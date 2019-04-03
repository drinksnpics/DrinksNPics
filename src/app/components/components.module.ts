import {NgModule} from '@angular/core';
import { MoviecardautoComponent} from './moviecardauto/moviecardauto.component';
import {TicketComponent} from './ticket/ticket.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [
        MoviecardautoComponent,
        TicketComponent,
    ],
    imports: [
        IonicModule
    ],
    exports: [
        MoviecardautoComponent,
        TicketComponent,
    ]
})
export class ComponentsModule {}
