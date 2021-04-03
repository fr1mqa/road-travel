import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventCardComponent } from './event/event-card/event-card.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { MenuButtonComponent } from './dropdown-menu/menu-button/menu-button.component';
import { MenuToggleDirective } from './dropdown-menu/menu-toggle.directive';
import { ControlButtonComponent } from './event/event-card/control-button/control-button.component';
import { VehicleComponent } from './event/event-card/vehicle/vehicle.component';
import { HotelComponent } from './event/event-card/hotel/hotel.component';
import { RepeatTimesDirective } from './event/event-card/hotel/repeat-times.directive';
import { PlaceComponent } from './event/event-card/place/place.component';
import { EventSettingsComponent } from './event/event-card/event-settings/event-settings.component';
import { TimeControlComponent } from './event/event-card/event-settings/time-control/time-control.component';
import { TimeSettingComponent } from './event/event-card/event-settings/time-setting/time-setting.component';
import { FormsModule } from '@angular/forms';
import { DurationComponent } from './event/duration/duration.component';
import { ParametersComponent } from './event/parameters/parameters.component';
import { ExampleDataService } from './services/example-data/example-data.service';
import { AddEventService } from './event/add-event/add-event.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventComponent,
    AddEventComponent,
    EventCardComponent,
    DropdownMenuComponent,
    MenuButtonComponent,
    MenuToggleDirective,
    ControlButtonComponent,
    RepeatTimesDirective,
    PlaceComponent,
    HotelComponent,
    VehicleComponent,
    EventSettingsComponent,
    TimeControlComponent,
    TimeSettingComponent,
    DurationComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ExampleDataService,
    AddEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
