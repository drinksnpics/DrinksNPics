import {NgModule} from '@angular/core';
import { MoviecardautoComponent} from './moviecardauto/moviecardauto.component';
import {TicketComponent} from './ticket/ticket.component';
import {IonicModule} from '@ionic/angular';
import {ShowtimesComponent} from './showtimes/showtimes.component';
import {MovieShowtimeComponent} from './showtimes/movie-showtime/movie-showtime.component';
import {ProfileCardComponent} from './profile-card/profile-card.component';

@NgModule({
    declarations: [
        MoviecardautoComponent,
        TicketComponent,
        ShowtimesComponent,
        MovieShowtimeComponent,
        ProfileCardComponent,
    ],
    imports: [
        IonicModule
    ],
    exports: [
        MoviecardautoComponent,
        TicketComponent,
        ShowtimesComponent,
        MovieShowtimeComponent,
        ProfileCardComponent,
    ]
})
export class ComponentsModule {}
