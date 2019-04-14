import {NgModule} from '@angular/core';
import { MoviecardautoComponent} from './moviecardauto/moviecardauto.component';
import {TicketComponent} from './ticket/ticket.component';
import {IonicModule} from '@ionic/angular';
import {ShowtimesComponent} from './showtimes/showtimes.component';
import {MovieShowtimeComponent} from './showtimes/movie-showtime/movie-showtime.component';

@NgModule({
    declarations: [
        MoviecardautoComponent,
        TicketComponent,
        ShowtimesComponent,
        MovieShowtimeComponent,
    ],
    imports: [
        IonicModule
    ],
    exports: [
        MoviecardautoComponent,
        TicketComponent,
        ShowtimesComponent,
        MovieShowtimeComponent,
    ]
})
export class ComponentsModule {}
